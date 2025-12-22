import { RouteType } from '@shared/types/router/route-type'

import { mainRoute } from './dashboard'
import { protectRoutes } from './secured-routes'

export const routes: RouteType[] = [...mainRoute]
export const protectedRoutes: RouteType[] = [...protectRoutes]
