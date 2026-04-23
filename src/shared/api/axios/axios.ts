/* eslint-disable require-atomic-updates */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  type AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios'

import { Api } from '../backend-paths'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string
const DEFAULT_TIMEOUT = 15_000

const commonConfig: AxiosRequestConfig = {
  baseURL: API_BASE_URL,
  timeout: DEFAULT_TIMEOUT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
}

export const AxiosPublic = axios.create(commonConfig)

export const AxiosApi = axios.create(commonConfig)

let isRefreshing = false
let failedQueue: Array<{
  resolve: (value: any) => void
  reject: (reason?: any) => void
}> = []

const processQueue = (error: any = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error)
    else prom.resolve(null)
  })
  failedQueue = []
}

AxiosApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('access_token')

  if (token && config.headers) {
    config.headers.set('Authorization', `Bearer ${token}`)
  }

  return config
})

AxiosApi.interceptors.response.use(
  (response: AxiosResponse) => response,

  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject })
        })
          .then(() => AxiosApi(originalRequest))
          .catch((error_) => Promise.reject(error_))
      }

      originalRequest._retry = true
      isRefreshing = true

      try {
        const refreshResponse = await AxiosPublic.post(Api.Refresh)
        const newAccessToken = refreshResponse.data.accessToken
        localStorage.setItem('access_token', newAccessToken)

        AxiosApi.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`
        processQueue()

        return AxiosApi(originalRequest)
      } catch (refreshError) {
        processQueue(refreshError)
        localStorage.removeItem('access_token')
        window.location.href = '/login?session_expired=true'
        return Promise.reject(refreshError)
      } finally {
        isRefreshing = false
      }
    }

    let userMessage = 'An error occurred'

    if (error.response) {
      const { status, data } = error.response as {
        data: { message: any }
        status: number
      }

      if (status === 400) userMessage = data?.message ?? 'Bad request'
      if (status === 409) userMessage = data?.message ?? 'Conflicted request'
      if (status === 401) userMessage = 'Session expired – please sign in again'
      if (status === 403) userMessage = 'Forbidden'
      if (status === 422) userMessage = data?.message ?? 'Validation error'
      if (status >= 500) userMessage = 'Server error – try again later'
    } else if (error.request) {
      userMessage = 'No response from server – check your connection'
    }

    return Promise.reject({
      ...error,
      userMessage,
      status: error.response?.status,
    })
  },
)

// ────────────────────────────────────────────────
// Mutation deduplication
//
// Tracks in-flight mutating requests (POST/PUT/PATCH/DELETE) by "METHOD:URL".
// If an identical request fires while one is already pending, the duplicate
// caller receives the same Promise — no second network request is ever made.
// The entry is cleared automatically on settle (success or error).
// ────────────────────────────────────────────────
const pendingMutations = new Map<string, Promise<any>>()

function withDeduplication<T>(key: string, fn: () => Promise<T>): Promise<T> {
  const inFlight = pendingMutations.get(key)
  if (inFlight) return inFlight as Promise<T>

  const promise = fn().finally(() => pendingMutations.delete(key))
  pendingMutations.set(key, promise)
  return promise
}

// ────────────────────────────────────────────────
// Exported helpers
// ────────────────────────────────────────────────
export const api = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    AxiosApi.get<T>(url, config).then((r) => r.data),
  post: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    withDeduplication(`POST:${url}`, () =>
      AxiosApi.post<T>(url, data, config).then((r) => r.data),
    ),
  put: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    withDeduplication(`PUT:${url}`, () =>
      AxiosApi.put<T>(url, data, config).then((r) => r.data),
    ),
  patch: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    withDeduplication(`PATCH:${url}:${JSON.stringify(data)}`, () =>
      AxiosApi.patch<T>(url, data, config).then((r) => r.data),
    ),
  delete: <T>(url: string, config?: AxiosRequestConfig) =>
    withDeduplication(`DELETE:${url}`, () =>
      AxiosApi.delete<T>(url, config).then((r) => r.data),
    ),
} as const

export const apiPublic = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    AxiosPublic.get<T>(url, config).then((r) => r.data),
  post: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    withDeduplication(`PUBLIC_POST:${url}`, () =>
      AxiosPublic.post<T>(url, data, config).then((r) => r.data),
    ),
  put: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    withDeduplication(`PUBLIC_PUT:${url}`, () =>
      AxiosPublic.put<T>(url, data, config).then((r) => r.data),
    ),
  patch: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    withDeduplication(`PUBLIC_PATCH:${url}`, () =>
      AxiosPublic.patch<T>(url, data, config).then((r) => r.data),
    ),
  delete: <T>(url: string, config?: AxiosRequestConfig) =>
    withDeduplication(`PUBLIC_DELETE:${url}`, () =>
      AxiosPublic.delete<T>(url, config).then((r) => r.data),
    ),
} as const
