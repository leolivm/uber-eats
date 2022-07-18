import { FC, useEffect, useState } from 'react'
import { Divider } from 'react-native-elements'
import { SafeAreaView, View, StyleSheet, ScrollView } from 'react-native'

import { YELP_API_KEY } from '@env'

import {
  Category,
  SearchBar,
  HeaderTabs,
  RestaurantItem,
  BottomTabs,
} from '../../components'

import { useActiveTab } from '../../providers/activetab'
import { restaurantMockData } from '../../components/RestaurantItem/restaurantMockData'

import { RestaurantsType, BusinessType } from '../../types'

export const Home: FC = () => {
  const [restaurants, setRestaurants] = useState<RestaurantsType>(restaurantMockData)
  const [city, setCity] = useState('San Francisco')

  const { activeTab } = useActiveTab()

  const getRestaurantsFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    }

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurants(
          json.businesses.filter((business: BusinessType) =>
            business.transactions.includes(activeTab.toLowerCase()),
          ),
        ),
      )
  }

  useEffect(() => {
    getRestaurantsFromYelp()
  }, [city, activeTab])

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <HeaderTabs />
        <SearchBar cityHandler={setCity} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Category />
        <RestaurantItem restaurants={restaurants} />
      </ScrollView>

      <Divider width={1} />

      <BottomTabs />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#111',
  },
  container: {
    backgroundColor: '#222',
    padding: 15,
  },
})
