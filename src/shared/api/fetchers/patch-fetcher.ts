import { api } from '../axios'

export const patchFetcher = async <Dto = unknown, Response = unknown>(
  url: string,
  { arg }: { arg: Dto },
  resourceId?: string,
) => {
  let resource = resourceId
  if (resourceId) {
    resource = resourceId.startsWith('/') ? resourceId : `/${resourceId}`
    if (url.endsWith('/')) {
      resource = resource.slice(1)
    }
  }
  const response = await api.patch<Response>(url + resource, arg)
  return response
}
