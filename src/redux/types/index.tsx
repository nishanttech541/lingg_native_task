import { ItemType } from "react-native-dropdown-picker";

export const GET_DATA = "GET_DATA";
export const SEARCH_DATA = "SEARCH_DATA";
export const FILTER_BY_NAME_ASC = "FILTER_BY_NAME_ASC";
export const FILTER_BY_NAME_DESC = "FILTER_BY_NAME_DESC";
export const FILTER_BY_RANK_LOWEST = "FILTER_BY_RANK_LOWEST";

export interface SearchBarProps {
    searchVal: string;
    handleChangeSearchVal: (value: string) => void;
    placeHolderVal: string;
}

export interface CommonButtonProps {
    btnText: string;
    onClickBtn: () => void;
}

export interface ListItemProps {item:UserDataType,userName:string}

export interface CommonDropDownProps {
    isOpen: boolean;
    dropDownValue:  string | null;
    setDropDownValue: React.Dispatch<React.SetStateAction<null>>;
    dropDownData: FilterType[];
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    placeHolderText: string;
    handleSelectItem:  ((item: ItemType<string>) => void) ;
}

export interface UserDataType {
    bananas : number,
    lastDayPlayed : string,
    longestStreak : number,
    name : string,
    stars : number,
    subscribed : boolean,
    uid : string,
    rank?: number
}

export interface FilterType {
    label: string,
    value: string
}

export interface GetUserData {
    type: typeof GET_DATA
}

export interface GetSearchedUsersData  {
    type: typeof SEARCH_DATA,
    payload: string
}

export interface GetUserByNameAsc  {
    type: typeof FILTER_BY_NAME_ASC
}

export interface GetUserByNameDesc  {
    type: typeof FILTER_BY_NAME_DESC
}

export interface GetUserByLowestRank  {
    type: typeof FILTER_BY_RANK_LOWEST
}

export enum FilterEnumValues {
    By_Name_Inc = "By_Name_Inc",
    By_Name_Desc = "By_Name_Desc",
    By_Rank_Lowest = "By_Rank_Lowest"
}