import { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'

import { About, MenuItem } from '../../components'
import { ViewCart } from '../../components/ViewCart'

import { foods } from './foods'

export const RestaurantDetails: FC = () => (
  <View style={styles.viewContainer}>
    <About />

    <Divider width={1.8} style={styles.container} />

    <MenuItem foods={foods} />

    <ViewCart />
  </View>
)

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
