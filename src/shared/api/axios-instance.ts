import axios, { CreateAxiosDefaults } from 'axios'

const createAxiosInstance = () => {
  const config: CreateAxiosDefaults = {
    baseURL: import.meta.env.VITE_APP_API_URL,
  }

  const instance = axios.create(config)

  return instance
}

export const api = createAxiosInstance()
