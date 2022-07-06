import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import { Home } from './src/screens/Home'
import { AppProvider } from './src/providers'

export default function App() {
  return (
    <AppProvider>
      <View style={styles.container}>
        <Home />
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
