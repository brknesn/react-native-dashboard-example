import { StyleSheet } from 'react-native'
import Style from '../../constants/Style'

const styles = StyleSheet.create({
  headerWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: Style.headerTwo,
    fontSize: Style.headerTwoSize,
    fontWeight: 'bold',
    marginLeft: 10,
  },
})

export default styles
