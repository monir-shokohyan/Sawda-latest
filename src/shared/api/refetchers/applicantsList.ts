import { mutate } from 'swr'

import { SwrKeys } from '../swr-keys'

const RefetchApplicantLists = () => {
  mutate(
    (key): key is string =>
      typeof key === 'string' && key.startsWith(`${SwrKeys.GetApp}-page-`),
    undefined,
    { revalidate: true },
  )
}

export { RefetchApplicantLists }
