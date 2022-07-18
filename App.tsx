import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import { AppProvider } from './src/providers'

import { Routes } from './src/routes'

export default function App() {
  return (
    <AppProvider>
      <View style={styles.container}>
        <Routes />
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
