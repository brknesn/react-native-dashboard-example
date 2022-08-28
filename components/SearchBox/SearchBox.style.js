import { isAndroid } from '@freakycoder/react-native-helpers'
import { Dimensions } from 'react-native'

const ScreenWidth = Dimensions.get('window').width

export function searchBoxContainer(
  searchBoxWidth,
  searchBoxBorderRadius,
  searchBoxBackgroundColor,
) {
  return {
    alignItems: 'center',
    justifyContent: 'center',
    height: isAndroid ? 30 : null,
    borderRadius: searchBoxBorderRadius,
    backgroundColor: searchBoxBackgroundColor,
    width: ScreenWidth - 40,
    marginLeft: 50,
  }
}

export default {
  searchBoxGlue: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchBoxTextStyle: {
    left: 3,
    width: '85%',
    fontSize: 13,
    color: '#000',
    height: isAndroid ? 50 : null,
    backgroundColor: 'transparent',
  },
}
