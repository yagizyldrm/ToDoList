import { StyleSheet } from "react-native";
import { colorNames } from "../../Theming";

export default Colors => StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors[colorNames.settings.background],
    },
    text1:{
        marginTop:20,
        marginBottom:3,
        fontSize:25,
        fontWeight:"bold",
        marginLeft:10,
        color:Colors[colorNames.settings.username],
    },
    text2:{
        fontSize:23,
        fontWeight:"normal",
        marginLeft:10,
        color:Colors[colorNames.settings.eMail],
    },
    optionContainer:{
        flex:0.5,
        marginHorizontal:15,
        marginTop:30,
        flexGrow:1,
    },
    signOutTouchable:{
        
        justifyContent:"center",
        alignItems:"center",
        borderWidth:3,
        borderColor:Colors[colorNames.settings.signOutBorder],
        borderRadius:10,
        height:60,
        marginBottom:10,
        marginHorizontal:20,
        backgroundColor:Colors[colorNames.settings.signOutButtonBackground]
    },
    toucableText:{
        color:Colors[colorNames.settings.signOutText],
        fontSize:20,
        fontWeight:"bold",
    },
})

