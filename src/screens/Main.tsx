import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, Keyboard, SafeAreaView, Text, View } from 'react-native';
import { ItemType } from 'react-native-dropdown-picker';
import { filterOptionsData } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import { 
    getFilteredUserByLowestRank, 
    getFilteredUserByNameAsc, 
    getFilteredUserByNameDesc, 
    getSearchedUserData, 
    setInitialUserData 
} from '../redux/actions';
import { FilterEnumValues } from '../redux/types';
import { mainStyles } from '../styles/mainStyles';
import CommonSearchBar from '../components/CommonSearchBar';
import CommonButton from '../components/CommonButton';
import CommonDropDown from '../components/CommonDropDown';
import { 
    Filter_Items_Text, 
    Name_Text, 
    Num_of_Bananas_Text, 
    Please_search_to_get_user_list, 
    Rank_Text, 
    Search_Text, 
    Search_user_by_Name 
} from '../config';
import ListItem from '../components/ListItem';

const Main = () => {
    const [userName,setUserName] = useState('');
    const [openFilterDropDown, setOpenFilterDropDown] = useState<boolean>(false);
    const [selectedFilterValue, setSelectedFilterValue] = useState(null);

    const { searchedOrFilteredList } = useSelector((state:any) => state.userData)
    const dispatch = useDispatch()
 

    useEffect(() => {
        dispatch(setInitialUserData())
    }, [])
    
    const onSearchClick = useCallback(() => {
      dispatch(getSearchedUserData(userName))
      Keyboard.dismiss();
      setSelectedFilterValue(null)
      setOpenFilterDropDown(false);
    },[userName]);

    const handleSelectedFilter = (item: ItemType<string>) => {
        switch(item.value){
            case FilterEnumValues.By_Name_Inc:
                dispatch(getFilteredUserByNameAsc())
                break;
            case FilterEnumValues.By_Name_Desc: 
                dispatch(getFilteredUserByNameDesc())
                break;
            case FilterEnumValues.By_Rank_Lowest: 
                dispatch(getFilteredUserByLowestRank())
                setUserName("")
                break;
            default: 
                return;
        }
    }

    return (
     <SafeAreaView style={mainStyles.container}>
        
        <View style={mainStyles.searchedWrapper}>
            <CommonSearchBar 
                placeHolderVal={Search_user_by_Name}
                searchVal={userName} 
                handleChangeSearchVal={(text: string) => setUserName(text)}                
            />
            <CommonButton btnText={Search_Text} onClickBtn={onSearchClick} />
        </View>

        <View style={mainStyles.filterWrapper}>
            <Text style={mainStyles.filterTxtStyle}>Filter:</Text>
            <CommonDropDown 
                isOpen={openFilterDropDown}
                dropDownValue={selectedFilterValue}
                setDropDownValue={setSelectedFilterValue}
                dropDownData={filterOptionsData}
                setIsOpen={setOpenFilterDropDown}
                placeHolderText={Filter_Items_Text}
                handleSelectItem={(item: ItemType<string>)=> handleSelectedFilter(item)}
            />
        </View>

        {searchedOrFilteredList && searchedOrFilteredList.length > 0 ?
            <View style={mainStyles.listWrapper}>
                <View style={mainStyles.listHeadingWrapper}>
                    <Text style={mainStyles.listNameStyle}>
                        {Name_Text}
                    </Text>
                    <Text style={mainStyles.listRankStyle}>
                        {Rank_Text}
                    </Text>
                    <Text style={mainStyles.listNumBananasStyle}>
                        {Num_of_Bananas_Text}
                    </Text>
                </View>   
            
                <FlatList
                    style={{ width: '100%'}}
                    data={searchedOrFilteredList}
                    renderItem={(item)=> <ListItem item={item.item} userName={userName}/>}
                />
                
            </View>
            :
            <View style={mainStyles.noDataWrapperStyle}>
                <Text style={mainStyles.noDataTxtStyle}>
                    {Please_search_to_get_user_list}
                </Text>
            </View>
        }
      </SafeAreaView>
    );
}

export default Main