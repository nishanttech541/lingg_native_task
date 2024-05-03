import { FILTER_BY_NAME_ASC, FILTER_BY_NAME_DESC, FILTER_BY_RANK_LOWEST, GET_DATA, SEARCH_DATA } from "../types"

export const setInitialUserData = () => {
    return {
        type: GET_DATA
    }
}

export const getSearchedUserData = (name: string) => {
    return {
        type: SEARCH_DATA,
        payload: name
    }
}

export const getFilteredUserByNameAsc = () => {
    return {
        type: FILTER_BY_NAME_ASC
    }
}

export const getFilteredUserByNameDesc = () => {
    return {
        type: FILTER_BY_NAME_DESC
    }
}

export const getFilteredUserByLowestRank = () => {
    return {
        type: FILTER_BY_RANK_LOWEST
    }
}
