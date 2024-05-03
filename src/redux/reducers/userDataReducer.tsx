import { getSearchList, setInitialData } from "../../utils";
import { 
  GET_DATA, 
  SEARCH_DATA, 
  UserDataType, 
  FILTER_BY_NAME_ASC, 
  FILTER_BY_NAME_DESC,  
  FILTER_BY_RANK_LOWEST,
} from "../types";

const initialFeedState = {
    initialUserList: [],
    searchedOrFilteredList: []
};

  
  export function userDataReducer(state: any = initialFeedState, action: any): any {
    switch (action.type) {
      case GET_DATA: {
        const userRecords = setInitialData()
        return {
          ...state,
          initialUserList: userRecords
        }
      }
        
      case SEARCH_DATA: {
        const list = getSearchList(action.payload, state.initialUserList)
        return {
          ...state,
          searchedOrFilteredList: list
        };
      }

      case FILTER_BY_NAME_ASC: {
        const serachedData = state.searchedOrFilteredList;
        const nameSortIns = serachedData.sort((a: UserDataType, b: UserDataType) => a.name.toLowerCase() < b.name.toLowerCase() ? -1: 1)
        return {
          ...state,
          searchedOrFilteredList: nameSortIns
        };
      }

      case FILTER_BY_NAME_DESC: {
        const serachedData = state.searchedOrFilteredList;
        const nameSortDesc = serachedData.sort((a: UserDataType, b: UserDataType) => a.name.toLowerCase() > b.name.toLowerCase() ? -1: 1)
        return {
          ...state,
          searchedOrFilteredList: nameSortDesc
        };
      }

      case FILTER_BY_RANK_LOWEST: {
        const serachedFilterData = [...state.initialUserList];
        const lowerRankRecord = serachedFilterData.reverse().splice(1,10);
        return {
          ...state,
          searchedOrFilteredList: lowerRankRecord
        };
      }

      default:
        return state
    }
  };