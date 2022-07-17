import { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'

import { About } from '../../components'

export const RestaurantDetails: FC = () => (
  <View>
    <About />
    <Divider width={1.8} style={styles.container} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
})
