import React from 'react'
import {
  View, Text, Pressable, Platform,
} from 'react-native'
import * as Linking from 'expo-linking'
import style from './style'

const ListItem = ({
  id, customer, amount, time, status, paymentStatus, driver,
  paymentMethod, address, map, phone, date,
}) => {
  const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' })
  const latLng = `${map.latitude},${map.longitude}`
  const label = `${customer}'s address`
  const mapUrl = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`,
  })
  return (
    <View style={style.wrapper}>
      <View style={style.left}>
        <View style={style.dateTimeWrapper}>
          <Text style={style.time}>{time}</Text>
          <Text style={style.date}>{date}</Text>
        </View>
        <View>
          <View style={style.badgesWrapper}>
            <Text style={[style.status]}>{paymentMethod}</Text>
            <Text style={[
              style.paymentStatus,
              style[paymentStatus.toLowerCase()],
              { marginTop: 3 },
            ]}
            >
              {paymentStatus}
            </Text>
            <Text style={[
              style.status,
              style[status.toLowerCase()],
              { marginTop: 3 },
            ]}
            >
              {status}
            </Text>
          </View>
        </View>
      </View>
      <View style={style.rightWrapper}>
        <View style={style.textWrapper}>
          <Text style={style.customer}>{customer}</Text>
          <Pressable onPress={() => Linking.openURL(`tel:${phone}`)}>
            <Text style={[style.description, style.clickable]}>{phone}</Text>
          </Pressable>
          {address === 'Take away' ? (<Text style={[style.description]}>{address}</Text>) : (
            <Pressable onPress={() => Linking.openURL(mapUrl)}>
              <Text style={[style.description, style.clickable]}>{address}</Text>
            </Pressable>
          )}

          <Text style={[style.description, { fontWeight: 'bold' }]}>{driver ? `Assigned to ${driver}` : 'Not assigned'}</Text>
        </View>
        <View>
          <Text style={style.amountLabel}>Total</Text>
          <Text style={style.amount}>{amount}</Text>
        </View>
      </View>

    </View>
  )
}

export default ListItem
