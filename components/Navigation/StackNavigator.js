import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { selectAuth } from '../../features/auth/store/selectors'
import OrdersScreen from '../../features/orders/screens/OrdersScreen'
import SignInScreen from '../../features/auth/screens/SignInScreen'

const Stack = createStackNavigator()
const StackNavigator = () => {
  const { token } = useSelector(selectAuth)
  const screenOptions = {
    headerShown: false,
  }
  return (
    <NavigationContainer>
      {token ? (
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen component={OrdersScreen} name="Orders" />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen component={SignInScreen} name="SignIn" />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  )
}

export default StackNavigator
