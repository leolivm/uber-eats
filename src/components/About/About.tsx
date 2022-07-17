import { FC } from 'react'
import { View } from 'react-native'

import { RestaurantImage } from './RestaurantImage'
import { RestaurantTitle } from './RestaurantTitle'
import { RestaurantDescription } from './RestaurantDescription'

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

const formattedCategories = yelpRestaurantInfo.categories
  .map((cat) => cat.title)
  .join(' • ')

const description = `${formattedCategories} ${
  yelpRestaurantInfo.price ? ' • ' + yelpRestaurantInfo.price : ''
} • 🎫 • ${yelpRestaurantInfo.rating} ⭐️ (${yelpRestaurantInfo.reviews}+)`

export const About: FC = () => (
  <View>
    <RestaurantImage image={yelpRestaurantInfo.image} />
    <RestaurantTitle title={yelpRestaurantInfo.name} />
    <RestaurantDescription description={description} />
  </View>
)
