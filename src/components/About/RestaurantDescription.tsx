import { FC } from 'react'
import { Text, StyleSheet } from 'react-native'

type RestaurantDescriptionProps = {
  description: string
}

export const RestaurantDescription: FC<RestaurantDescriptionProps> = ({
  description,
}) => <Text style={styles.text}>{description}</Text>

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: '400',
    fontSize: 15.5,
  },
})
