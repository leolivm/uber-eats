import { RestaurantType, OrderCompletedType } from './types'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined
      RestaurantDetails: RestaurantType
      OrderCompleted: OrderCompletedType
    }
  }
}
