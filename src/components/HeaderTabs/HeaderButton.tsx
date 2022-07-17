import { FC } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

import { useActiveTab } from '../../providers/activetab'

interface HeaderButtonProps {
  text: string
}

export const HeaderButton: FC<HeaderButtonProps> = ({ text }) => {
  const { activeTab, setActiveTab } = useActiveTab()

  const styles = StyleSheet.create({
    container: {
      backgroundColor: activeTab === text ? '#fff' : '#111',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
      margin: 4,
    },
    text: {
      color: activeTab === text ? '#111' : '#fff',
      fontSize: 15,
      fontWeight: '900',
    },
  })

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setActiveTab(text)}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}
