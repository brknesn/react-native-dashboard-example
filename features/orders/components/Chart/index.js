/* eslint-disable no-plusplus */
import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import { BarChart } from 'react-native-chart-kit'
import Style from '../../../../constants/Style'
import style from './style'

function calcArrValue(maxValue) {
  let calcMaxValue = 0
  for (let i = 1; i <= 100; i++) {
    if (maxValue < 50 * i) {
      calcMaxValue = 50 * i
      break
    }
  }
  return calcMaxValue
}
function* yLabel(minValue, maxValue) {
  yield* [minValue, maxValue / 2, maxValue]
}
const Chart = ({ data }) => {
  const screenWidth = Dimensions.get('window').width - 40
  const labels = []
  const dataPoints = []
  for (let i = 0; i < data.topSellingProducts.length; i++) {
    labels.push(data.topSellingProducts[i].name)
    dataPoints.push(parseFloat(data.topSellingProducts[i].totalPrice))
  }
  const minValue = 0
  const maxValue = Math.max(...dataPoints)
  const arrangeValue = calcArrValue(maxValue)
  const datapoints = dataPoints.map((datapoint) => datapoint - minValue - 1)
  const yLabelIterator = yLabel(minValue, arrangeValue)

  const chartData = {
    labels,
    datasets: [
      {
        data: datapoints,
      },
    ],
  }
  const chartConfig = {
    backgroundColor: Style.bgColor,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: Style.bgColor,
    backgroundGradientToOpacity: 0,
    decimalPlaces: 2,
    color: () => Style.primaryColor,
    labelColor: () => Style.lineColor,
    propsForVerticalLabels: {
      fontSize: Style.textXSmallSize,
    },
    propsForHorizontalLabels: {
      fontSize: Style.textXSmallSize,
    },
    barPercentage: 0.7,
    propsForBackgroundLines: {
      strokeWidth: 1,
      opacity: 0.1,
      color: Style.lineColor,
      strokeDasharray: null,
      stroke: Style.lineColor,
    },
    data: chartData.datasets,
    propsForDots: {
      r: '0',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
    formatYLabel: () => yLabelIterator.next().value,
  }
  return (
    <View>
      <Text style={style.text}>
        Top 5 selling products
      </Text>
      <BarChart
        bezier
        chartConfig={chartConfig}
        data={chartData}
        fromZero
        height={220}
        segments={2}
        style={style.chart}
        verticalLabelRotation={0}
        width={screenWidth}
        withInnerLines
        yAxisInterval={1}
        yAxisLabel="£"
        yLabelsOffset={3}
      />
    </View>
  )
}

export default Chart
