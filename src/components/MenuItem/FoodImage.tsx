import { FC } from 'react'
import { View, Image, StyleSheet } from 'react-native'

type FoodImageProps = {
  image: string
}

export const FoodImage: FC<FoodImageProps> = ({ image }) => (
  <View>
    <Image style={styles.image} source={{ uri: image }} />
  </View>
)

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
})
