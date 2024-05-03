import React from 'react'
import DropDownPicker, { ItemType } from 'react-native-dropdown-picker'
import { mainStyles } from '../styles/mainStyles'
import { CommonDropDownProps } from '../redux/types'

const CommonDropDown = ({ 
    isOpen, 
    dropDownValue,
    setDropDownValue, 
    dropDownData, 
    setIsOpen, 
    placeHolderText, 
    handleSelectItem 
}: CommonDropDownProps) => {
  return (
    <DropDownPicker
        open={isOpen}
        value={dropDownValue}
        items={dropDownData}
        setOpen={setIsOpen}
        setValue={setDropDownValue}
        placeholder={placeHolderText}
        onSelectItem={(item: ItemType<string>)=> handleSelectItem(item)}
        textStyle={mainStyles.dropDownTextStyle}
        style={{ backgroundColor: "white" }}
    />
  )
}

export default React.memo(CommonDropDown)