import { FC } from 'react'
import { View, Image, StyleSheet } from 'react-native'

type FoodImageProps = {
  image: string
  marginLeft?: number
}

export const FoodImage: FC<FoodImageProps> = (props) => {
  const styles = StyleSheet.create({
    image: {
      width: 100,
      height: 100,
      borderRadius: 8,
      marginLeft: props.marginLeft ?? 0,
    },
  })

  return (
    <View>
      <Image style={styles.image} source={{ uri: props.image }} />
    </View>
  )
}
