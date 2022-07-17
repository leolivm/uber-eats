import { FC } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { RestaurantInfo } from './RestaurantInfo'
import { RestaurantImage } from './RestaurantImage'

import { RestaurantsType } from '../../types'

type RestaurantItemProps = {
  restaurants: RestaurantsType
}

export const RestaurantItem: FC<RestaurantItemProps> = (props) => (
  <TouchableOpacity activeOpacity={1}>
    {props?.restaurants?.map((item, index) => (
      <View style={styles.container} key={index}>
        <RestaurantImage source={item.image_url} />
        <RestaurantInfo name={item.name} rating={item.rating} />
      </View>
    ))}
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 15,
    backgroundColor: '#222',
  },
})
