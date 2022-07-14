import { FC } from 'react'
import { Image, ScrollView, Text, View, StyleSheet } from 'react-native'

const items = [
  {
    image: require('../../assets/images/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    image: require('../../assets/images/soft-drink.png'),
    text: 'Soft Drinks',
  },
  {
    image: require('../../assets/images/bread.png'),
    text: 'Bakery Items',
  },
  {
    image: require('../../assets/images/fast-food.png'),
    text: 'Fast Foods',
  },
  {
    image: require('../../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    image: require('../../assets/images/coffee.png'),
    text: 'Coffee & Tea',
  },
  {
    image: require('../../assets/images/desserts.png'),
    text: 'Desserts',
  },
]

export const Category: FC = () => (
  <View style={styles.wrapper}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item, index) => (
        <View key={index} style={styles.container}>
          <Image style={styles.image} source={item.image} />
          <Text style={styles.text}>{item.text}</Text>
        </View>
      ))}
    </ScrollView>
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#222',
    paddingVertical: 15,
    paddingLeft: 20,
  },
  container: {
    alignItems: 'center',
    marginRight: 30,
  },
  image: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 13,
    fontWeight: '900',
    color: '#fff',
  },
})
