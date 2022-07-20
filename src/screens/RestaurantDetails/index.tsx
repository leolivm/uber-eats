import { FC } from 'react'
import { useRoute } from '@react-navigation/native'
import { View, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'

import { About, MenuItem, ViewCart } from '../../components'

import { RestaurantType } from '../../types'

export const RestaurantDetails: FC = () => {
  const route = useRoute()
  const { name } = route.params as RestaurantType

  return (
    <View style={styles.viewContainer}>
      <About />

      <Divider width={1.8} style={styles.container} />

      <MenuItem />

      <ViewCart restaurantName={name} />
    </View>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#222',
    position: 'relative',
    flex: 1,
  },
  container: {
    marginVertical: 20,
  },
})
