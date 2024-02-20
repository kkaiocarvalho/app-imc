import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contextImc:{
        flex:1,
        marginTop: 20,
        paddingTop:15,
        alignItems: "center",
        width: "100%"
    },

    resultImc:{
        flex:1,
        marginTop:15,
        paddingTop:60,
        borderRadius: 50,
        alignItems:"center",
        width:"100%",

    },

    numberImc:{
        fontSize:48,
        color:"#FF0043",
        fontWeight:"bold",
        marginBottom:10
    },

    information:{
        fontSize:18,
        color:"#FF0043",
        fontWeight:"bold",
    },
    boxShareButton:{
        width: "100%",
        alignItems: "center",
        marginBottom: 10,
        marginTop:10
    },
    shared:{
        backgroundColor: "#1877f2",
        borderRadius: 50,
        paddingTop: 5,
        paddingBottom: 5,
    },
    sharedText:{
        color: "#ffffff",
        fontWeight: "bold",
        paddingHorizontal: 30,

    }
    
});

export default styles