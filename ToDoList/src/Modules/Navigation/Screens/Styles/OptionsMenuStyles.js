import { StyleSheet } from "react-native";
import { colorNames } from "../../../Theming";
import { Fonts, Metrics } from "../../../../StylingConstants";

export default Colors =>  StyleSheet.create({
    menuTitle:{
        marginBottom:5,
        fontSize:25,
        fontWeight:"bold",
        color:Colors[colorNames.settings.titleColor],
    },

    optionTouchable:{
        flexDirection:"row",
        marginVertical:5,
        marginLeft:5,
        color:Colors[colorNames.settings.signOutText],
        alignItems:"center" ,
    },
    optionText:{
        fontSize:20,   
        alignItems:"center"
    },
    iconContainer:{
        width:10,
        height:10,  
        justifyContent:"center",
        alignItems:"center",
    },
    optionTitleText:{
        fontWeight:"normal",
        fontSize:20,
        marginLeft:5,
        color:Colors[colorNames.settings.signOutText],
    }
})


