import { FC } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

type ViewCartProps = {
  restaurantName: string
}

export const ViewCart: FC<ViewCartProps> = ({ restaurantName }) => (
  <View style={styles.wrapper}>
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>View cart</Text>
      </TouchableOpacity>
    </View>
  </View>
)

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
  },
  button: {
    marginTop: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 13,
    borderRadius: 30,
    width: 300,
  },
})
