import React from 'react'
import { Image, TextInput, View } from 'react-native'
import { mainStyles } from '../styles/mainStyles'
import { SearchBarProps } from '../redux/types'

const CommonSearchBar = ({ searchVal, placeHolderVal, handleChangeSearchVal }: SearchBarProps) => {
  return (
    <View style={mainStyles.searchBarWrapper}>
                <Image 
                    alt="search_icon" 
                    style={mainStyles.searchIconStyle} 
                    source={require('../assets/search_icon.png')}  
                />
                <TextInput
                    value={searchVal}
                    placeholder={placeHolderVal}
                    style={{ width: '90%' }}
                    onChangeText={(text) => handleChangeSearchVal(text)}
                />
    </View>
  )
}

export default React.memo(CommonSearchBar);