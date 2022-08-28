/* eslint-disable no-plusplus */
/* eslint-disable react/no-unstable-nested-components */
import { Ionicons } from '@expo/vector-icons'
import React, { useEffect } from 'react'
import {
  SafeAreaView, View, FlatList, Text, ScrollView,
  RefreshControl, ActivityIndicator, Pressable,
  Platform,
  Image,
} from 'react-native'
import { Audio } from 'expo-av'
import { useDispatch, useSelector } from 'react-redux'
import Toast from 'react-native-root-toast'
import COLORS from '../../../constants/Style'
import Chart from '../components/Chart'
import ListItem from '../components/ListItem'
import {
  fetchOrders, selectOrders, refreshOrders,
} from '../store'
import style from './OrdersScreen.style'
import UIHeader from '../../../components/UIHeader'
import Summary from '../components/Summary'

const OrdersScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false)
  const [audio, setAudio] = React.useState()
  const {
    data, pending, loading, hasNewOrder,
  } = useSelector(selectOrders)
  const refreshTime = 10
  const dispatch = useDispatch()
  const NO_RESULT_IMAGE = require('../../../assets/no-result.jpg')
  const NOTIFICATION_SOUND = require('../../../assets/audio/notification.mp3')

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true)
    await dispatch(fetchOrders())
    setRefreshing(false)
  }, [])

  const playSound = React.useCallback(async () => {
    const { sound } = await Audio.Sound.createAsync(NOTIFICATION_SOUND)
    setAudio(sound)
    await sound.playAsync()
  }, [])

  useEffect(() => (audio ? () => { audio.unloadAsync() } : undefined), [audio])

  useEffect(() => {
    const timer = setInterval(
      () => dispatch(refreshOrders()),
      Object.keys(data).length > 0 && data.refreshTime
        ? data.refreshTime * 1000 : refreshTime * 1000,
    )
    dispatch(fetchOrders())
    return () => clearInterval(timer)
  }, [])

  if (pending || Object.keys(data).length === 0) {
    return <View style={{ flex: 1, justifyContent: 'center' }}><ActivityIndicator color={COLORS.teal500} size="large" /></View>
  }
  if (hasNewOrder) {
    if (Platform.OS !== 'web') {
      Toast.show('New order placed', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
      })
    }
    playSound()
    dispatch({ type: 'SET_HAS_NEW_ORDER', payload: false })
  }
  return (
    <View style={style.view}>
      <View style={style.headerWrapper}>
        <UIHeader title={data.showingDateFormatted ? `Showing orders on ${data.showingDateFormatted}` : 'Welcome to Dashboard'} />
        <Pressable
          onPress={() => dispatch({ type: 'SIGN_OUT' })}
          style={style.signOutButton}
        >
          <Ionicons name="log-out-outline" style={style.signOutIcon} />
        </Pressable>
      </View>
      <ScrollView refreshControl={(
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={refreshing}
        />
      )}
      >
        <SafeAreaView>
          {data.data.length === 0 ? (
            <View style={style.noResultWrapper}>
              <Image
                source={NO_RESULT_IMAGE}
                style={style.noResultImage}
              />
              <Text style={style.noResultTitle}>No Order Placed</Text>
              <Text style={style.noResultText}>
                No orders were found on the date shown.
              </Text>
              <Text style={style.noResultText}>
                Please try again later...
              </Text>
            </View>
          )
            : (
              <>
                <View style={style.card}>
                  <Summary data={data} />
                </View>
                <View style={style.card}>
                  <Chart data={data} />
                </View>
                <View style={style.card}>
                  <FlatList
                    data={data.data}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={null}
                    ListHeaderComponent={() => (
                      <Text style={style.listHeaderText}>
                        Recent Orders
                      </Text>
                    )}
                    renderItem={({ item }) => (
                      <ListItem
                        address={item.address}
                        amount={item.amount}
                        customer={item.customer}
                        date={item.date}
                        driver={item.driver}
                        id={item.id}
                        loading={loading}
                        map={item.map}
                        paymentMethod={item.paymentMethod}
                        paymentStatus={item.paymentStatus}
                        phone={item.phone}
                        status={item.status}
                        time={item.time}
                      />
                    )}
                    scrollEnabled={false}
                  />
                </View>
              </>
            )}

        </SafeAreaView>
      </ScrollView>
    </View>
  )
}
export default OrdersScreen
