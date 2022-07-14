import { FC } from 'react'
import { View, StyleSheet } from 'react-native'

import { HeaderButton } from '.'

export const HeaderTabs: FC = () => (
  <View style={styles.container}>
    <HeaderButton text="Delivery" />
    <HeaderButton text="Pickup" />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
})
