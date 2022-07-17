import { FC } from 'react'
import { Text, StyleSheet } from 'react-native'

type RestaurantTitleProps = {
  title: string
}

export const RestaurantTitle: FC<RestaurantTitleProps> = ({ title }) => (
  <Text style={styles.text}>{title}</Text>
)

const styles = StyleSheet.create({
  text: {
    fontSize: 29,
    fontWeight: '600',
    marginTop: 10,
    color: '#fff',
    marginHorizontal: 15,
  },
})
