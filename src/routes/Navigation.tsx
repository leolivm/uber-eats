import { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { Home } from '../screens/Home'
import { RestaurantDetails } from '../screens/RestaurantDetails'

export const RootNavigation: FC = () => {
  const Stack = createStackNavigator()

  const screeOptions = {
    headerShown: false,
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screeOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
