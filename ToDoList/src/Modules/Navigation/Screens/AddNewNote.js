import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useThemedValues, colorNames } from "../../Theming";
import { texts, useLocalization } from "../../Localization"

import getStyles from "./Styles/AddNewNoteStyles";



const AddNewNote = props => {

    const { styles, colors } = useThemedValues(getStyles);
    const loc = useLocalization();

    return (
        <View style={{flex:1}}>
        <SafeAreaView style={styles.mainContainer} >
        <TextInput style={styles.taskNameInput} placeholder={loc.t(texts.taskname)} textAlignVertical="center" placeholderTextColor={colors[colorNames.addNewNote.textInputs]}  ></TextInput>
        <TextInput style={styles.endDateInput} placeholder={loc.t(texts.endDate)} textAlignVertical="center" placeholderTextColor={colors[colorNames.addNewNote.textInputs]} ></TextInput>
        <TextInput style={styles.timeInput} placeholder={loc.t(texts.time)} textAlignVertical="center"  placeholderTextColor={colors[colorNames.addNewNote.textInputs]} ></TextInput>
        <TextInput style={styles.noteDetailsInput} 
        placeholder={loc.t(texts.noteDetails)} 
        textAlign="left" 
        textAlignVertical="top" 
        focusable="focus"
        pointerEvents="none"
        placeholderTextColor={colors[colorNames.addNewNote.textInputs]}></TextInput>
        <TouchableOpacity style={styles.addButton}>
            <Text 
            style={{marginLeft:5, 
            backgroundColor:colors[colorNames.addNewNote.border],
            fontSize:20,fontWeight:"bold", 
            color:colors[colorNames.addNewNote.headerText]}}
            >
                {loc.t(texts.add)}
            </Text>
        </TouchableOpacity>
        </SafeAreaView>
        </View>
    )
};

export default AddNewNote;
