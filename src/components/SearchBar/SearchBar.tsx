import { FC, Dispatch, SetStateAction } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

import { GOOGLE_PLACES_API_KEY } from '@env'

type SearchBarProps = {
  cityHandler: Dispatch<SetStateAction<string>>
}

export const SearchBar: FC<SearchBarProps> = ({ cityHandler }) => (
  <View style={styles.container}>
    <GooglePlacesAutocomplete
      query={{ key: GOOGLE_PLACES_API_KEY }}
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
      onPress={(data) => {
        const city = data.description.split(',')[0]
        cityHandler(city)
      }}
    />
  </View>
)

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
