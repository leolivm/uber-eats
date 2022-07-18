import { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { BottomIcon } from './BottomIcon'

export const BottomTabs: FC = () => (
  <View style={styles.container}>
    <BottomIcon icon="home" text="Home" />
    <BottomIcon icon="search" text="Browse" />
    <BottomIcon icon="shopping-bag" text="Grocery" />
    <BottomIcon icon="receipt" text="Orders" />
    <BottomIcon icon="user" text="Account" />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    marginHorizontal: 30,
    justifyContent: 'space-between',
    backgroundColor: '#111',
  },
  text: {
    color: '#fff',
  },
})
