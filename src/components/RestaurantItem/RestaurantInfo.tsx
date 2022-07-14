import { FC } from 'react'
import { StyleSheet, View, Text } from 'react-native'

type RestaurantInfoProps = {
  name: string
  rating: number
}

export const RestaurantInfo: FC<RestaurantInfoProps> = ({ name, rating }) => (
  <View style={styles.infoContainer}>
    <View>
      <Text style={styles.infoTitleText}>{name}</Text>
      <Text style={styles.infoText}>30-45 • min</Text>
    </View>

    <View style={styles.infoRating}>
      <Text>{rating}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  infoTitleText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 13,
    color: 'gray',
  },
  infoRating: {
    backgroundColor: '#eee',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
})
