import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ProfileScreen = () => (
  <View style={styles.view}>
    <Text>Profile</Text>
  </View>
)

const styles = StyleSheet.create({
  view: {
    position: 'relative',
    flex: 1,
  },
})

export default ProfileScreen
