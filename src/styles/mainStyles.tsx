import { StyleSheet } from "react-native";

export const mainStyles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: 'white', 
        alignItems: 'center', 
        justifyContent:'center', 
        height:'100%'
    },
    searchedWrapper: { 
        width: "90%", 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginTop: 40
    },
    searchBarWrapper: {
        height: 45,
        width: '70%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        paddingHorizontal: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    searchIconStyle: { 
        width: 18, 
        height: 18, 
        marginRight: 2, 
        alignSelf: 'center' 
    },
    searchBtnStyle: { 
        width: '28%',
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 15, 
        height: 40,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center', 
        opacity: 0.9
    },
    searchBtnText: {
        textAlign: 'center', 
        color: 'white', 
        fontWeight: "600"
    },
    filterWrapper: { 
        width: "90%", 
        marginVertical: 10 
    },
    filterTxtStyle: { 
        color: 'black', 
        fontSize: 14, 
        fontWeight: "600", 
        marginBottom: 4 
    },
    dropDownTextStyle: { 
        color: "gray", 
        fontSize: 12 
    },
    listWrapper: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'black',
        width: "90%",
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-between', 
        flex: 1,
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    listHeadingWrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        marginTop: 5,
        borderBottomWidth: 1,
        height: 60, 
    },
    listNameStyle:{
        width: '50%' 
    },
    listRankStyle:{ 
        textAlign: 'center', 
        width: '10%' 
    },
    listNumBananasStyle:{ 
        width: '40%', 
        textAlign: 'right' 
    },
    listBodyWrapper: {
        height: 50,
        width: '100%',
        alignSelf: 'center',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        borderColor: 'lightgray'
    },
    noDataWrapperStyle: { 
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '90%' 
    },
    noDataTxtStyle: { 
        textAlign: 'center', 
        color: 'black', 
        fontSize: 14, 
        fontWeight: "600" 
    },
})