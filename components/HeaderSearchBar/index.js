/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import {
  SafeAreaView, View,
} from 'react-native'
import SearchBox from '../SearchBox/SearchBox'
import style from './style'

const HeaderSearchBar = (props) => (
  <SafeAreaView>
    <View style={style.headerWrapper}>
      <SearchBox searchBoxWidth="100%" {...props} />
    </View>
  </SafeAreaView>
)

export default HeaderSearchBar
