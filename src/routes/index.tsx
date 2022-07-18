import { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { RootNavigation } from './navigation.stack.routes'

export const Routes: FC = () => (
  <NavigationContainer>
    <RootNavigation />
  </NavigationContainer>
)
