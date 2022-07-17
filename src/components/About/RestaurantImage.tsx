import { FC } from 'react'
import { Image, StyleSheet } from 'react-native'

type RestaurantImageProps = {
  image: string
}

export const RestaurantImage: FC<RestaurantImageProps> = ({ image }) => (
  <Image source={{ uri: image }} style={styles.container} />
)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 180,
  },
})
