import React from 'react'
import {
  View, Text, Image,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import UIButton from '../../../components/UIButton'
import UIError from '../../../components/UIError'
import UITextInput from '../../../components/UITextInput'
import { login } from '../store/actions'
import { selectAuth } from '../store/selectors'
import styles from './SignInScreen.style'

const SignInScreen = () => {
  const [username, setUsername] = React.useState()
  const [password, setPassword] = React.useState()
  const { pending, error } = useSelector(selectAuth)
  const LOGO = require('../../../assets/logo.png')
  const dispatch = useDispatch()
  const onSignIn = React.useCallback(() => dispatch(login({ username, password })))
  return (
    <View style={styles.wrapper}>
      <Image
        source={LOGO}
        style={styles.logo}
      />
      <Text style={styles.heading}>
        Welcome to React Dashboard!
      </Text>
      {error && (<UIError text="Invalid Credentials" />)}
      <UITextInput
        onChange={setUsername}
        placeHolder="Enter your email"
        secureTextEntry={false}
        value={username}
      />
      <UITextInput
        onChange={setPassword}
        placeHolder="Enter your password"
        secureTextEntry
        value={password}
      />
      <UIButton
        isLoading={pending}
        onPress={onSignIn}
        style={styles.button}
        textStyle={styles.buttonText}
        title="Sign In"
      />
    </View>
  )
}

export default SignInScreen
