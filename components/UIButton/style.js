import { StyleSheet } from 'react-native'
import Style from '../../constants/Style'

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 4,
    backgroundColor: Style.primaryColor,
    marginVertical: 20,
    height: 50,
  },
  text: {
    fontSize: Style.textSmallSize,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: Style.textColorLight,
  },
})
export default styles
