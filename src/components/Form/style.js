import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext:{
        flex: 1,
        marginTop: 10,
        backgroundColor:"#ffffff",
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingTop: 30,
    },
    form:{
        width:"100%",
    },
    formLabel:{
        color:"#000000",
        fontSize:18,
        paddingLeft:20,
    },
    formInput:{
        width:"90%",
        borderRadius:50,
        backgroundColor: "#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10,
    },
    buttonCalculator:{
        borderRadius: 50,
        alignItems: "center",
        width: "90%",
        backgroundColor: "#FF0043",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        marginTop:30,
    },
    textButtonCalculator:{
        fontSize:20,
        color:"#ffffff",
    },
    errorMessage:{
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
        
    },
    exhibitionResultImc:{
        width:"100%",
        height: "35%",
    },
    listImcs:{
        marginTop:20,
    },
    resultImcItem:{
       fontSize:26,
       color: "red",
       height: 50,
       width:"100%",
       paddingRight:20, 
    },
    textResultItemList:{
        fontSize:20,
        color: "blue"
    }
});

export default styles