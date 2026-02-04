import { AuthSelector } from '@shared/hooks'
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux-hooks'
import { toggleAuth } from '@shared/hooks/slice'

const Auth = () => {
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector(AuthSelector)
  const ToggleAuth = () => {
    return dispatch(toggleAuth())
  }
  return {
    isAuth,
    ToggleAuth,
  }
}

export { Auth }
