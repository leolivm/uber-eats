import { FC } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { useCart } from '../../providers/cart'

export const ViewCart: FC = () => {
  const { cart } = useCart()
  const items = cart?.items

  const total = items
    ?.map((item) => Number(item?.price.replace('$', '')))
    .reduce((prev, cur) => prev + cur, 0)

  const totalUSD = total?.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <>
      {total ? (
        <View style={styles.wrapper}>
          <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>View cart</Text>
              <Text style={styles.totalText}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 35,
    zIndex: 9,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginRight: 30,
  },
  totalText: {
    color: 'white',
    fontSize: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 15,
    borderRadius: 30,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
})
