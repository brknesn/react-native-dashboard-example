import { StyleSheet } from 'react-native'
import Style from '../../../../constants/Style'
import badges from './badges.style'

const style = StyleSheet.create({
  wrapper: {
    padding: 20,
    marginVertical: 2,
    backgroundColor: '#fff',
    borderColor: Style.borderLightColor,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 15,
    flex: 1,
    flexDirection: 'row',
  },
  left: {
    flexDirection: 'column',
  },
  printButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 4,
    backgroundColor: Style.primaryColor,
    color: Style.textColorLight,
  },
  dateTimeWrapper: {
    width: 55,
    height: 55,
    backgroundColor: Style.badgeBgColor,
    borderRadius: 8,
    justifyContent: 'center',
    padding: 5,
  },
  badgesWrapper: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 5,
  },
  rightWrapper: {
    flex: 1,
    flexDirection:
     'row',
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  textWrapper: {
    justifyContent: 'space-between',
  },
  title: {
    fontSize: Style.textNormalSize,
    color: Style.textColor,
  },
  description: {
    fontSize: Style.textSmallSize,
    color: Style.textNormal,
    maxWidth: 150,
  },
  clickable: {
    textDecorationLine: 'underline',
  },
  amountWrapper: {
    position: 'absolute',
    bottom: 0,
  },
  amount: {
    fontSize: Style.textNormalSize,
    color: Style.textColor,
    alignSelf: 'flex-end',
  },
  amountLabel: {
    fontSize: Style.textNormalSize,
    color: Style.textNormal,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  time: {
    fontSize: Style.textNormalSize,
    textAlign: 'center',
    color: Style.primaryColor,
    fontWeight: 'bold',
  },
  button: {
    fontSize: 10,
    backgroundColor: Style.primaryColor,
  },
  date: {
    fontSize: Style.textXSmallSize,
    textAlign: 'center',
    color: Style.primaryColor,
  },
  ...badges,
})
export default style
