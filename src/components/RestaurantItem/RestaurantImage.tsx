import { FC } from 'react'
import { Image, TouchableOpacity, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

type RestaurantImageProps = {
  source: string
}

export const RestaurantImage: FC<RestaurantImageProps> = ({ source }) => (
  <>
    <Image style={styles.image} source={{ uri: source }} />
    <TouchableOpacity style={styles.heartIcon}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
)

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 180,
    borderRadius: 4,
  },
  heartIcon: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
})
