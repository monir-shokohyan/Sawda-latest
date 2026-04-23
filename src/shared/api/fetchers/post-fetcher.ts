import { apiPublic } from '../axios'

export const postFetcher = async <Dto = unknown, Response = unknown>(
  url: string,
  body: Dto,
) => {
  const response = await apiPublic.post<Response>(url, body)
  return response
}
