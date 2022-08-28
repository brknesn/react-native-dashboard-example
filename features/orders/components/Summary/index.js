import React from 'react'
import {
  Text, View,
} from 'react-native'
import style from './style'

const Summary = ({ data }) => (
  <View style={style.summaryCard}>
    <View style={style.summaryItem}>
      <Text style={style.summaryAmount}>
        {data.totalOrders}
      </Text>
      <Text style={style.summaryLabel}>
        Total daily orders
      </Text>
    </View>
    <View style={style.summaryItem}>
      <Text style={style.summaryAmount}>
        £
        {data.totalAmount}
      </Text>
      <Text style={style.summaryLabel}>
        Total daily sales
      </Text>
    </View>
  </View>
)

export default Summary
