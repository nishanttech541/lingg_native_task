import React from 'react'
import { ListItemProps } from '../redux/types';
import { Text, View } from 'react-native';
import { mainStyles } from '../styles/mainStyles';

const ListItem = ({item,userName}:ListItemProps) => {
    const bool = userName !=="" && item.name.toLowerCase().includes(userName.toLowerCase());
    return ( 
        <View style={mainStyles.listBodyWrapper}>
            <Text style={[mainStyles.listNameStyle, { color: bool ? 'red' :"black"}]}> 
                {item.name} 
            </Text>
            <Text style={mainStyles.listRankStyle}>
                {item.rank}
            </Text>
            <Text style={[mainStyles.listNumBananasStyle, { textAlign: 'center' }]}>
                {item.bananas} 
            </Text>
        </View>
    );
}

export default React.memo(ListItem)

