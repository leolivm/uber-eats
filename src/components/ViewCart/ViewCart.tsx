import { FC, useState } from 'react'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native'

import { OrderItem } from '..'

import { useCart } from '../../providers/cart'

export const ViewCart: FC = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)

  const { navigate } = useNavigation()

  const { cart } = useCart()
  const items = cart?.items
  const restaurantName = cart?.restaurantName

  const total = items
    ?.map((item) => Number(item?.price.replace('$', '')))
    .reduce((prev, cur) => prev + cur, 0)

  const totalUSD = total?.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  })

  const handleAddOrder = () => {
    setLoading(true)
    setModalVisible(false)

    setTimeout(() => {
      setLoading(false)

      navigate('OrderCompleted', {
        restaurantName: restaurantName!,
        totalUSD: totalUSD!,
      })
    }, 2000)
  }

  const handleCheckoutModalContent = () => (
    <View style={styles.modalContainer}>
      <View style={styles.modalCheckoutContainer}>
        <Text style={styles.restaurantName}>{restaurantName}</Text>
        <TouchableOpacity
          style={styles.closeButtonContainer}
          onPress={() => setModalVisible(false)}
        >
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
        {items?.map((item, index) => (
          <OrderItem key={index} title={item!.title} price={item!.price} />
        ))}
        <View style={styles.subtotalContainer}>
          <Text style={styles.subtotalText}>Subtotal</Text>
          <Text style={styles.subtotalText}>{totalUSD}</Text>
        </View>
        <View style={styles.touchableWrapper}>
          <TouchableOpacity
            style={styles.touchableContainer}
            onPress={() => handleAddOrder()}
          >
            <Text style={styles.checkoutButtonText}>Checkout</Text>
            <Text style={styles.checkoutTotalText}>
              {total ? totalUSD : ''}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {handleCheckoutModalContent()}
      </Modal>

      {total ? (
        <View style={styles.wrapper}>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.text}>View cart</Text>
              <Text style={styles.totalText}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {loading && (
        <View style={styles.loadingContainer}>
          <LottieView
            source={require('../../assets/animations/scanner.json')}
            style={styles.lottieContainer}
            autoPlay
            speed={3}
          />
        </View>
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
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  touchableWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  touchableContainer: {
    marginTop: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: 'relative',
  },
  checkoutText: {
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalCheckoutContainer: {
    backgroundColor: '#111',
    padding: 16,
    height: 500,
    borderWidth: 1,
  },
  restaurantName: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  subtotalText: {
    textAlign: 'left',
    fontWeight: '600',
    color: 'white',
    fontSize: 15,
    marginBottom: 10,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 20,
  },
  checkoutTotalText: {
    position: 'absolute',
    right: 20,
    color: 'white',
    fontSize: 15,
    top: 17,
  },
  closeButtonContainer: {
    position: 'absolute',
    right: 15,
    top: 20,
    borderRadius: 9,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'white',
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
  },
  loadingContainer: {
    backgroundColor: 'black',
    position: 'absolute',
    opacity: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  lottieContainer: {
    height: 200,
  },
})
