import { AuthSelector } from '@shared/hooks'
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux-hooks'
import { toggleAuth } from '@shared/hooks/slice'

const Auth = () => {
  const isAuth = useAppSelector(AuthSelector)
  const dispatch = useAppDispatch()
  const ToggleAuth = () => {
    dispatch(toggleAuth())
  }

  return {
    isAuth,
    ToggleAuth,
  }
}

export { Auth }
