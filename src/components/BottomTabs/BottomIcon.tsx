import { FC } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

type BottomIconProps = {
  icon: string
  text: string
}

export const BottomIcon: FC<BottomIconProps> = ({ icon, text }) => (
  <TouchableOpacity>
    <View>
      <FontAwesome name={icon} size={25} style={styles.container} />
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    color: '#fff',
  },
  text: {
    color: '#fff',
  },
})
