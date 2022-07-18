import { RestaurantType } from './types'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined
      RestaurantDetails: RestaurantType
    }
  }
}
