/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import COLORS from '../../constants/Style'
import OrdersScreen from '../../features/orders/screens/OrdersScreen'
import ProfileScreen from '../../features/profile/screens/Profile'

import HomeIcon from '../Icons/HomeIcon'
import ProfileIcon from '../Icons/ProfileIcon'
import HeaderSearchBar from '../HeaderSearchBar'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  const tabBarIcon = (name) => {
    if (name === 'Orders') {
      return <HomeIcon />
    } if (name === 'Profile') {
      return <ProfileIcon />
    }
    return <HomeIcon />
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon,
          tabBarShowLabel: false,
          headerStyle: { backgroundColor: '#F9F9F9' },
          headerTitle: () => (
            <HeaderSearchBar />
          ),
        })}
      >
        <Tab.Screen
          activeColor={COLORS.red700}
          barStyle={{ backgroundColor: COLORS.bgColor }}
          component={OrdersScreen}
          initialRouteName="Orders"
          name="Orders"
          shifting={false}
        />
        <Tab.Screen
          activeColor={COLORS.red700}
          barStyle={{ backgroundColor: COLORS.bgColor }}
          component={ProfileScreen}
          initialRouteName="Profile"
          name="Profile"
          shifting={false}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigator
