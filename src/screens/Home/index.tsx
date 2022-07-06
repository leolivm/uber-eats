import { FC } from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'

import { HeaderTabs } from '../../components/HeaderTabs'
import { SearchBar } from '../../components/SearchBar'

export const Home: FC = () => (
  <SafeAreaView>
    <View style={styles.container}>
      <HeaderTabs />
      <SearchBar />
    </View>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    padding: 15,
  },
})
