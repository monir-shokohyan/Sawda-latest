import { api } from '../axios'

export const authPostFetcher = async <Dto = unknown, Response = unknown>(
  url: string,
  body: Dto,
) => {
  const response = await api.post<Response>(url, body)
  return response
}
