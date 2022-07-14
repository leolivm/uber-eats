import { FC, useEffect, useState } from 'react'
import { SafeAreaView, View, StyleSheet, ScrollView } from 'react-native'

import { YELP_API_KEY } from '@env'

import { Category } from '../../components/Category'
import { SearchBar } from '../../components/SearchBar'
import { HeaderTabs } from '../../components/HeaderTabs'
import { RestaurantItem } from '../../components/RestaurantItem'

import { restaurantMockData } from '../../components/RestaurantItem/restaurantMockData'
import { RestaurantsType } from '../../types'

export const Home: FC = () => {
  const [restaurants, setRestaurants] = useState<RestaurantsType>(restaurantMockData)

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego`

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    }

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurants(json.businesses))
  }

  useEffect(() => {
    getRestaurantsFromYelp()
  }, [])

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <HeaderTabs />
        <SearchBar />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Category />
        <RestaurantItem restaurants={restaurants} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    padding: 15,
  },
})
