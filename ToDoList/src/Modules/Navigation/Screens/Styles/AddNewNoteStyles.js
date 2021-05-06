
import {StyleSheet } from "react-native";
import { Fonts,Metrics } from "../../../../StylingConstants"
import { colorNames } from "../../../Theming";


export default Colors => StyleSheet.create({

    mainContainer:{
        flex:1,
        backgroundColor:Colors[colorNames.addNewNote.background],
    },
    taskNameInput:{
        flex:0.08,
        backgroundColor:Colors[colorNames.addNewNote.background],
        borderColor:Colors[colorNames.addNewNote.border],
        borderWidth:2,
        borderRadius:10,
        marginHorizontal:Metrics.width*0.05,
        marginVertical:Metrics.width*0.02,
        justifyContent:"flex-start",
        alignItems:"center",
        color:Colors[colorNames.addNewNote.text],
        paddingLeft:10,
        fontFamily:Fonts.type.medium,
        
    },
    endDateInput:{
        flex:0.08,
        backgroundColor:Colors[colorNames.addNewNote.background],
        marginHorizontal:Metrics.width*0.05,
        marginVertical:Metrics.width*0.01,
        borderWidth:2,
        borderRadius:10,
        borderColor:Colors[colorNames.addNewNote.border],
        alignItems:"center",
        paddingLeft:10,
        color:Colors[colorNames.addNewNote.text],
        fontFamily:Fonts.type.medium,
    },
    timeInput:{
        flex:0.08,
        backgroundColor:Colors[colorNames.addNewNote.background],
        borderColor:Colors[colorNames.addNewNote.border],
        marginHorizontal:Metrics.width*0.05,
        marginVertical:Metrics.width*0.01,
        borderWidth:2,
        borderRadius:10,
        alignItems:"center",
        paddingLeft:10,
        color:Colors[colorNames.addNewNote.text],
        fontFamily:Fonts.type.medium,
    },
    noteDetailsInput:{
        flexGrow:1,
        flexShrink:1,
        height:Metrics.width*0.9,
        backgroundColor:Colors[colorNames.addNewNote.background],
        borderColor:Colors[colorNames.addNewNote.border],
        marginTop:Metrics.width*0.07,
        borderRadius:10,
        borderWidth:2,
        marginHorizontal:Metrics.width*0.05,
        alignItems:"center",
        paddingLeft:10,
        color:Colors[colorNames.addNewNote.text],
        fontFamily:Fonts.type.medium,
    },
    addDetailsText:{
        position:"absolute",
    },
    //addButtonContainer:{
       // backgroundColor:"yellow",
       // maxHeight:Metrics.width*0.3
    //},
    addButton:{
        marginHorizontal:Metrics.width*0.05,
        height:Metrics.width*0.13,
        borderColor:Colors[colorNames.addNewNote.border],
        backgroundColor:Colors[colorNames.addNewNote.border],
        paddingHorizontal:5,
        borderWidth:2,
        borderRadius:10,
        marginTop:Metrics.width*0.15,
        marginBottom:Metrics.width*0.05,
        justifyContent:"center",
        alignItems:"center",
        fontFamily:Fonts.type.bold,
    },
})

