import { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'

import { About, MenuItem } from '../../components'

export const RestaurantDetails: FC = () => (
  <View style={styles.viewContainer}>
    <About />

    <Divider width={1.8} style={styles.container} />

    <MenuItem />
  </View>
)

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#222',
  },
  container: {
    marginVertical: 20,
  },
})
