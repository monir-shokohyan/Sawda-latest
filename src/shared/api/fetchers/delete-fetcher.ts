import { api } from '../axios'

export const deleteFetcher = async <Response = unknown>(
  url: string,
  resourceId?: string,
) => {
  let resource = resourceId
  if (resourceId) {
    resource = resourceId.startsWith('/') ? resourceId : `/${resourceId}`
  }
  const response = await api.delete<Response>(url + resource)
  return response
}
