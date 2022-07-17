import { FC } from 'react'
import { Divider } from 'react-native-elements'
import { View, StyleSheet, ScrollView } from 'react-native'

import { FoodInfo } from './FoodInfo'
import { FoodImage } from './FoodImage'

const foods = [
  {
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechamel',
    price: '$13.50',
    image: 'https://github.com/leolivm.png',
  },
  {
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechamel',
    price: '$13.50',
    image: 'https://github.com/leolivm.png',
  },
  {
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechamel',
    price: '$13.50',
    image: 'https://github.com/leolivm.png',
  },
  {
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechamel',
    price: '$13.50',
    image: 'https://github.com/leolivm.png',
  },
]

export const MenuItem: FC = () => (
  <ScrollView showsVerticalScrollIndicator={false}>
    {foods.map((food, index) => (
      <View key={index}>
        <View style={styles.container}>
          <FoodInfo food={food} />
          <FoodImage image={food.image} />
        </View>

        <Divider width={0.5} orientation="horizontal" style={styles.divider} />
      </View>
    ))}
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  divider: {
    marginHorizontal: 20,
  },
})
