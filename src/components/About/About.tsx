import { FC } from 'react'
import { View } from 'react-native'

import { RestaurantImage } from './RestaurantImage'
import { RestaurantTitle } from './RestaurantTitle'
import { RestaurantDescription } from './RestaurantDescription'

const image = 'https://github.com/leolivm.png'
const title = 'Farmhouse Kitchen Thai Cuisine'
const description = 'Thai • Comfort Food • $$ 🎫  • 4 ⭐️ (2913+)'

export const About: FC = () => (
  <View>
    <RestaurantImage image={image} />
    <RestaurantTitle title={title} />
    <RestaurantDescription description={description} />
  </View>
)
