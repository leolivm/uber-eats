import { FC } from 'react'
import { Divider } from 'react-native-elements'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
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
  <ScrollView
    showsVerticalScrollIndicator={false}
    style={styles.scrollContainer}
  >
    {foods.map((food, index) => (
      <View key={index}>
        <View style={styles.container}>
          <BouncyCheckbox iconStyle={styles.bouncyCheckbox} fillColor="green" />

          <FoodInfo food={food} />
          <FoodImage image={food.image} />
        </View>

        <Divider width={0.5} orientation="horizontal" style={styles.divider} />
      </View>
    ))}
  </ScrollView>
)

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#222',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    backgroundColor: '#222',
  },
  divider: {
    marginHorizontal: 20,
  },
  bouncyCheckbox: {
    borderColor: 'lightgray',
    borderRadius: 0,
  },
})
