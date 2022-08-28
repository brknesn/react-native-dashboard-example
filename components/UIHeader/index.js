import React from 'react'
import { Text, View } from 'react-native'
import styles from './style'

const UIHeader = ({ title }) => (
  <View style={styles.headerWrapper}>
    <Text style={styles.headerTitle}>
      {title}
    </Text>
  </View>
)

export default UIHeader
