import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import { AppProvider } from './src/providers'

import { Home } from './src/screens/Home'
import { RestaurantDetails } from './src/screens/RestaurantDetails'

export default function App() {
  return (
    <AppProvider>
      <View style={styles.container}>
        <RestaurantDetails />
        <StatusBar style="light" />
      </View>
    </AppProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
})
