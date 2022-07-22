import { FC } from 'react'
import { Text, View, StyleSheet } from 'react-native'

type OrderItemProps = {
  title: string
  price: string
}

export const OrderItem: FC<OrderItemProps> = ({ price, title }) => (
  <View style={styles.container}>
    <Text style={styles.titleText}>{title}</Text>
    <Text style={styles.priceText}>{price}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
  },
  titleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  priceText: {
    color: 'white',
    fontSize: 16,
    opacity: 0.7,
  },
})
