import { api, apiPublic } from '../axios'

export const getFetcher = async (url: string, secure: boolean) => {
  if (secure) {
    const response = await api.get(url)
    return response
  }
  const response = await apiPublic.get(url)
  return response
}
