import { StyleSheet } from 'react-native'
import Style from './constants/Style'

export const fontsData = {
  LexendDeca: require('./assets/fonts/LexendDeca-Regular.ttf'),
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Style.backgroundColor,
    fontFamily: 'LexendDeca',
  },
})
