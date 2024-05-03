import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { mainStyles } from '../styles/mainStyles'
import { CommonButtonProps } from '../redux/types'

const CommonButton = ({ btnText, onClickBtn }: CommonButtonProps) => {
  return (
    <TouchableOpacity onPress={onClickBtn} style={mainStyles.searchBtnStyle}> 
        <Text style={mainStyles.searchBtnText}>
            {btnText}
        </Text>
    </TouchableOpacity>
  )
}

export default React.memo(CommonButton)