import { StyleSheet } from 'react-native'
import Style from '../../../../constants/Style'

const style = StyleSheet.create({
  summaryCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderColor: Style.borderLightColor,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
  summaryItem: {
    flex: 1,
  },
  summaryAmount: {
    flexDirection: 'column',
    fontSize: Style.headerOneSize,
    color: Style.headerOne,
    fontWeight: 'bold',
  },
  summaryLabel: {
    fontSize: Style.textNormalSize,
    color: Style.textNormal,
  },
})
export default style
