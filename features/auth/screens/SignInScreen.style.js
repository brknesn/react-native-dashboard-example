import { StyleSheet } from 'react-native'
import Style from '../../../constants/Style'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: Style.headerOneSize,
    fontWeight: 'bold',
    color: Style.headerOne,
    marginVertical: 20,
  },
  logo: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  button: {
    height: 55,
    marginTop: 20,
    backgroundColor: Style.primaryColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: Style.headerTwoSize,
    fontWeight: 'bold',
    color: Style.textColorLight,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
})
export default styles
