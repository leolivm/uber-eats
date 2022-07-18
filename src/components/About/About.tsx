import { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { useRoute } from '@react-navigation/native'

import { RestaurantImage } from './RestaurantImage'
import { RestaurantTitle } from './RestaurantTitle'
import { RestaurantDescription } from './RestaurantDescription'

import { RestaurantType } from '../../types'

const yelpRestaurantInfo = {
  name: 'Farmhouse Kitchen Thai Cuisine',
  image: 'https://github.com/leolivm.png',
  price: '$$',
  reviews: '1500',
  rating: 4.5,
  categories: [
    {
      title: 'Thai',
    },
    {
      title: 'Comfort Food',
    },
  ],
}

export const About: FC = () => {
  const route = useRoute()
  const item = route.params as RestaurantType

  const formattedCategories = item.categories.map((cat) => cat).join(' • ')

  const description = `${formattedCategories} ${
    yelpRestaurantInfo.price ? ' • ' + yelpRestaurantInfo.price : ''
  } • 🎫 • ${yelpRestaurantInfo.rating} ⭐️ (${yelpRestaurantInfo.reviews}+)`

  return (
    <View style={styles.abourContainer}>
      <RestaurantImage image={item.image_url} />
      <RestaurantTitle title={item.name} />
      <RestaurantDescription description={description} />
    </View>
  )
}

const styles = StyleSheet.create({
  abourContainer: {
    backgroundColor: '#222',
  },
})
