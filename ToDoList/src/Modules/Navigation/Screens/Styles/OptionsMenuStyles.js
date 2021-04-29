import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    MenuTitle:{
        color:"#189ad3",
        marginBottom:5,
        fontSize:25,
        fontWeight:"bold",
    },
    optionTouchable:{
        flexDirection:"row",
        marginVertical:5,
        marginLeft:5,
        color:"black",
        alignItems:"center"
        
    },
    iconContainer:{
        width:20,
        height:20,
        backgroundColor:"lightblue",
        justifyContent:"center",
        alignItems:"center",
    },
    optionTitleText:{
        fontWeight:"normal",
        fontSize:20,
        marginLeft:5,
    }
})


export default styles;