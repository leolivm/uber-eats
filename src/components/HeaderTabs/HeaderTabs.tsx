import { FC } from 'react'
import { View, StyleSheet } from 'react-native'

import { HeaderButton } from '.'

export const HeaderTabs: FC = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignSelf: 'center',
    },
  })

  return (
    <View style={styles.container}>
      <HeaderButton text="Delivery" />
      <HeaderButton text="Pickup" />
    </View>
  )
}
