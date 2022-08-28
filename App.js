/* eslint-disable no-promise-executor-return */
import 'react-native-gesture-handler'
import {
  LogBox, View,
} from 'react-native'
import { RootSiblingParent } from 'react-native-root-siblings'
import { Provider, useDispatch } from 'react-redux'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import {
  useCallback, useEffect, useState,
} from 'react'
import * as SecureStore from 'expo-secure-store'
import { store } from './store'
import setupAxios from './middlewares/axios.middleware'
import { fontsData, styles } from './App.style'
import StackNavigator from './components/Navigation/StackNavigator'
// import TabNavigator from './components/Navigation/TabNavigator'

SplashScreen.preventAutoHideAsync()
// ignore unnecessary logs
LogBox.ignoreLogs(['EventEmitter.removeListener'])
// For sending auth token to backend on each request
setupAxios(store)

const App = () => {
  const dispatch = useDispatch()
  const [appIsReady, setAppIsReady] = useState(false)
  // preparing app for first time launch
  useEffect(() => {
    const bootstrapAsync = async () => {
      const userToken = await SecureStore.getItemAsync('userToken')
      dispatch({ type: 'RESTORE_TOKEN', payload: userToken })
    }
    bootstrapAsync()
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync()
        await Font.loadAsync(fontsData)
        await new Promise((resolve) => setTimeout(resolve, 2000))
      } catch (e) {
        console.warn(e)
      } finally {
        setAppIsReady(true)
      }
    }
    prepare()
  }, [])
  // if app is ready, show app, hide splash screen
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  // Use <TabkNavigator /> if you do not want to use stack navigation
  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <StackNavigator />
    </View>
  )
}
// App is the root component of our app
const AppWrapper = () => (
  <RootSiblingParent>
    <Provider store={store}>
      <App />
    </Provider>
  </RootSiblingParent>
)
export default AppWrapper
