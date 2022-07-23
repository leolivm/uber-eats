import { FC } from 'react'
import { Divider } from 'react-native-elements'
import { useRoute } from '@react-navigation/native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { View, StyleSheet, ScrollView } from 'react-native'

import { FoodInfo } from './FoodInfo'
import { FoodImage } from './FoodImage'

import { useCart } from '../../providers/cart'
import { Items, RestaurantType } from '../../types'

type MenuItemProps = {
  foods: (Items | undefined)[]
  hideCheckbox?: boolean
}

export const MenuItem: FC<MenuItemProps> = (props) => {
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
      {props.foods.map((food, index) => (
        <View key={index}>
          <View style={styles.container}>
            {!props.hideCheckbox && (
              <BouncyCheckbox
                iconStyle={styles.bouncyCheckbox}
                fillColor="green"
                onPress={(checkBox) => handleAddToCart(food!, checkBox)}
                isChecked={handleFoodInCart(food!)}
              />
            )}

            <FoodInfo food={food!} />
            <FoodImage image={food!.image} />
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
