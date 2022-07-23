import { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { OrderCompleted } from '../screens/OrderCompleted'
import { RestaurantDetails } from '../screens/RestaurantDetails'

export const RootNavigation: FC = () => {
  const Stack = createStackNavigator()

  const screeOptions = {
    headerShown: false,
  }

  return (
    <Stack.Navigator screenOptions={screeOptions} initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
      <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
    </Stack.Navigator>
  )
}
