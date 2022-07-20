import { FC } from 'react'
import { Divider } from 'react-native-elements'
import { useRoute } from '@react-navigation/native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { View, StyleSheet, ScrollView } from 'react-native'

import { FoodInfo } from './FoodInfo'
import { FoodImage } from './FoodImage'

import { useCart } from '../../providers/cart'
import { Items, RestaurantType } from '../../types'

const foods = [
  {
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechamel',
    price: '$13.50',
    image:
      'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
  },
  {
    title: 'Tandoori Chicken',
    description:
      'Amazing Indian dish with tenderloin chicken off the sizzles 🔥',
    price: '$19.20',
    image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
  },
  {
    title: 'Chilaquiles',
    description:
      'Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽',
    price: '$14.50',
    image:
      'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg',
  },
  {
    title: 'Chicken Caesar Salad',
    description:
      'One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!',
    price: '$21.50',
    image:
      'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da',
  },
]

export const MenuItem: FC = () => {
  const route = useRoute()
  const { name } = route.params as RestaurantType

  const { addToCart, cart } = useCart()
  const { items } = cart!

  const handleAddToCart = (food: Items, checkBox: boolean) => {
    const item = { items: [food], restaurantName: name }

    addToCart(item, checkBox)
  }

  const handleFoodInCart = (food: Items) =>
    Boolean(items.find((item) => item?.title === food.title))

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollContainer}
    >
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.container}>
            <BouncyCheckbox
              iconStyle={styles.bouncyCheckbox}
              fillColor="green"
              onPress={(checkBox) => handleAddToCart(food, checkBox)}
              isChecked={handleFoodInCart(food)}
            />

            <FoodInfo food={food} />
            <FoodImage image={food.image} />
          </View>

          <Divider
            width={0.5}
            orientation="horizontal"
            style={styles.divider}
          />
        </View>
      ))}
    </ScrollView>
  )
}

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
