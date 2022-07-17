import { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'

type FoodInfoProps = {
  food: {
    title: string
    description: string
    price: string
  }
}

export const FoodInfo: FC<FoodInfoProps> = ({ food }) => (
  <View style={styles.container}>
    <Text style={styles.titleStyle}>{food.title}</Text>
    <Text style={styles.text}>{food.description}</Text>
    <Text style={styles.text}>{food.price}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: 240,
    justifyContent: 'space-evenly',
  },
  titleStyle: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '600',
  },
  text: {
    color: '#fff',
  },
})
