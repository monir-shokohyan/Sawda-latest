import { api } from '../axios'

export const deleteRangeFetcher = async <Response = unknown>(
  url: string,
  resourceIdRange?: number[],
) => {
  const response = await api.delete<Response>(url, { data: resourceIdRange })
  return response
}
