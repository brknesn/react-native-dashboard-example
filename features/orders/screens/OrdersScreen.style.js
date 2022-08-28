import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import Style from '../../../constants/Style'

const style = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: Style.bgColor,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Constants.statusBarHeight + 20,
    marginHorizontal: 10,
  },
  signOutButton: {
    marginHorizontal: 10,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signOutIcon: {
    fontSize: Style.headerOneSize,
    color: Style.primaryColor,
  },
  noResultWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 70,
  },
  noResultImage: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
  },
  noResultTitle: {
    fontSize: Style.headerTwoSize,
    fontWeight: 'bold',
    color: Style.headerTwo,
  },
  noResultText: {
    fontSize: Style.textNormalSize,
    color: Style.textNormal,
    marginHorizontal: 40,
    marginVertical: 3,
    alignSelf: 'center',
    textAlign: 'center',
  },
  listHeaderTest: {
    fontSize: Style.headerThreeSize,
    color: Style.headerThree,
    fontWeight: '600',
    marginBottom: 10,
  },
  card: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  screen: {
    paddingTop: 50,
  },
  head: {
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 25,
    fontFamily: 'Nunito-Bold',
    color: Style.primaryColor,
  },
  subHeading: {
    fontSize: 16,
    color: Style.textColorLight,
  },
  empty: {
    minHeight: 60,
  },
})
export default style
