/* eslint-disable react/default-props-match-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-dynamic-vector-icons'
import {
  TextInput, TouchableOpacity, Text, View,
} from 'react-native'
import styles, { searchBoxContainer } from './SearchBox.style'

const SearchBox = (props) => {
  const {
    value,
    onFocus,
    iconName,
    iconType,
    iconSize,
    iconColor,
    onChangeText,
    searchBoxText,
    iconComponent,
    searchBoxWidth,
    searchBoxOnPress,
    disableTextInput,
    searchBoxTextStyle,
    searchBoxBorderRadius,
    searchBoxBackgroundColor,
  } = props

  const renderTextInput = () => {
    if (disableTextInput) { return <Text style={styles.searchBoxTextStyle}>{searchBoxText}</Text> }
    return (
      <TextInput
        onChangeText={onChangeText}
        onFocus={onFocus}
        placeholder={searchBoxText}
        style={searchBoxTextStyle || styles.searchBoxTextStyle}
        value={value}
      />
    )
  }

  return (
    <TouchableOpacity
      onPress={searchBoxOnPress}
      style={searchBoxContainer(
        searchBoxWidth,
        searchBoxBorderRadius,
        searchBoxBackgroundColor,
      )}
    >
      <View style={styles.searchBoxGlue}>
        {iconComponent || (
          <Icon
            color={iconColor}
            name={iconName}
            size={iconSize}
            type={iconType}
          />
        )}
        {renderTextInput()}
      </View>
    </TouchableOpacity>
  )
}

SearchBox.propTypes = {
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.number,
  searchBoxText: PropTypes.string,
  disableTextInput: PropTypes.bool,
  searchBoxBorderRadius: PropTypes.number,
  searchBoxBackgroundColor: PropTypes.string,
}

SearchBox.defaultProps = {
  iconSize: 25,
  iconName: 'search',
  iconColor: 'black',
  iconType: 'EvilIcons',
  disableTextInput: false,
  searchBoxWidth: '95%',
  searchBoxBorderRadius: 8,
  searchBoxBackgroundColor: '#f5f5f5',
  searchBoxText: 'What are you looking for?',
}

export default SearchBox
