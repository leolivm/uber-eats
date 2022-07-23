import { FC } from 'react'
import LottieView from 'lottie-react-native'
import { useRoute } from '@react-navigation/native'
import { Text, SafeAreaView, StyleSheet, View, ScrollView } from 'react-native'

import { MenuItem } from '../../components'

import { useCart } from '../../providers/cart'
import { OrderCompletedType } from '../../types'

export const OrderCompleted: FC = () => {
  const { params } = useRoute()
  const { restaurantName, totalUSD } = params as OrderCompletedType

  const { cart } = useCart()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <LottieView
            style={styles.lottieViewCheckMark}
            source={require('../../assets/animations/check-mark.json')}
            autoPlay
            speed={0.5}
            loop={false}
          />

          <Text style={styles.text}>
            Your order at {restaurantName} has been placed for {totalUSD}
          </Text>

          <MenuItem foods={cart!.items} hideCheckbox />
          <LottieView
            style={styles.lottieViewCooking}
            source={require('../../assets/animations/cooking.json')}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  viewContainer: {
    margin: 15,
    alignItems: 'center',
    height: '100%',
  },
  lottieViewCheckMark: {
    height: 100,
    alignSelf: 'center',
    marginBottom: 30,
  },
  lottieViewCooking: {
    height: 200,
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
})
