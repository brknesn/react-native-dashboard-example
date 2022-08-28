import React from 'react'
import {
  Text, Pressable,
  ActivityIndicator,
  View,
} from 'react-native'
import styles from './style'

const UIButton = ({
  onPress, title = 'Save', isLoading = false, style = null, textStyle = null, loadingSize = 'small',
}) => (
  <View>
    <Pressable onPress={onPress} style={style || styles.button}>
      {isLoading && <ActivityIndicator color="white" size={loadingSize} />}
      {!isLoading && <Text style={textStyle || styles.text}>{title}</Text>}
    </Pressable>
  </View>
)

export default UIButton
