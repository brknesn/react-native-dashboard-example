import React from 'react'
import { TextInput, View } from 'react-native'
import style from './style'

const UITextInput = ({
  onChange, placeHolder, inputStyle, value, secureTextEntry,
}) => (
  <View>
    <TextInput
      onChangeText={onChange}
      placeholder={placeHolder}
      secureTextEntry={secureTextEntry}
      style={inputStyle || style.input}
      value={value}
    />
  </View>
)

export default UITextInput
