import { FC } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export const SearchBar: FC = () => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: styles.textInput,
          textInputContainer: styles.textInputContainer,
        }}
        renderLeftButton={() => (
          <View style={styles.iconContainer}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.searchContainer}>
            <AntDesign name="clockcircle" size={11} style={styles.icon} />
            <Text style={styles.searchText}>Search</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 20,
    fontWeight: '700',
    marginTop: 7,
  },
  textInputContainer: {
    backgroundColor: '#fff',
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  iconContainer: {
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    marginRight: 8,
    backgroundColor: '#222',
    padding: 9,
    borderRadius: 30,
    alignItems: 'center',
  },
  searchText: {
    color: '#fff',
  },
  icon: {
    marginRight: 6,
    color: '#fff',
  },
})
