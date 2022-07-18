import { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { RestaurantInfo } from './RestaurantInfo'
import { RestaurantImage } from './RestaurantImage'

import { RestaurantsType } from '../../types'

type RestaurantItemProps = {
  restaurants: RestaurantsType
}

export const RestaurantItem: FC<RestaurantItemProps> = (props) => {
  const { navigate } = useNavigation()

  return (
    <>
      {props?.restaurants?.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          onPress={() => navigate('RestaurantDetails', item)}
        >
          <View style={styles.container}>
            <RestaurantImage source={item.image_url} />
            <RestaurantInfo name={item.name} rating={item.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 15,
    backgroundColor: '#222',
  },
})
