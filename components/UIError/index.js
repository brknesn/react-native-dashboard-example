import React from 'react'
import { Text, TextInput, View } from 'react-native'
import style from './style'

const UIError = ({ textStyle = null, text = '' }) => (
  <View>
    <Text style={textStyle || style.text}>
      {text}
    </Text>
  </View>
)

export default UIError
