import { initialUserData } from "./leaderboard";
import { FilterType, FilterEnumValues, UserDataType } from "./redux/types";

export const filterOptionsData: FilterType[] = [
    {label: "By Name Inc", value: FilterEnumValues.By_Name_Inc},
    {label: "By Name Desc", value: FilterEnumValues.By_Name_Desc},
    {label: "By Rank Lowest (Bottom 10)", value: FilterEnumValues.By_Rank_Lowest},
]

const alterData = (sortedArr: UserDataType[]) => {
    const newData: UserDataType[] = [];
    sortedArr.forEach((item: UserDataType, index: number) => {
        let obj: UserDataType = {
            ...item,
            rank: index + 1
        }
        newData.push(obj); 
    })
    
    if(newData.length>0) {
        return newData;
    }
}

export const setInitialData = () => {
    const arr =  Object.values(initialUserData);
    const sortedArr = arr.sort((a, b) => b.bananas - a.bananas)
    return alterData(sortedArr)
}

export const getSearchList = (userName: string, data: UserDataType[]) => {
    if (userName) {
      let searchedData = data.filter((item: UserDataType) => (item?.rank ?? 0) < 11);
      let bool = searchedData.some((item) => item.name.toLowerCase().includes(userName.toLowerCase()))
      if (bool) {
        return searchedData
      } else {
          let userData = data.find((item) => item.name.toLowerCase().includes(userName.toLowerCase()));
          if (userData){
            searchedData.splice(searchedData.length - 1, 1);
            searchedData.push(userData)
         }
        return searchedData
      }
    } 
    else {
      return [];
    }
}