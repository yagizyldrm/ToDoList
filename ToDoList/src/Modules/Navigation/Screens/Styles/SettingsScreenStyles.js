import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    text1:{
        marginTop:20,
        marginBottom:3,
        fontSize:25,
        fontWeight:"bold",
        marginLeft:10,
    },
    text2:{
        fontSize:23,
        fontWeight:"normal",
        marginLeft:10,
    },
    optionContainer:{
        
        flex:0.5,
        marginHorizontal:15,
        marginTop:30,
        flexGrow:1
    },
    signOutTouchable:{
        
        justifyContent:"center",
        alignItems:"center",
        borderWidth:3,
        borderColor:"#189ad3",
        borderRadius:10,
        height:60,
        marginBottom:10,
        marginHorizontal:20
        
        
    },
    toucableText:{
        color:"black",
        fontSize:20,
        fontWeight:"bold",
    }
})

export default styles;