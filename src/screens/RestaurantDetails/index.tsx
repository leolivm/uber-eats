import { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'

import { About, MenuItem } from '../../components'

export const RestaurantDetails: FC = () => (
  <View>
    <About />

    <Divider width={1.8} style={styles.container} />

    <MenuItem />
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
})
