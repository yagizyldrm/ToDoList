import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useThemedValues, colorNames } from "../../Theming";
import { texts, useLocalization } from "../../Localization"

import getStyles from "./Styles/AddNewNoteStyles";
import { addNote } from '../../ToDo/API/Firebase';
import { Fonts } from '../../../StylingConstants';

const AddNewNote = props => {

    const[taskname, setTaskname]= useState("");
    const[endDate,setEndDate]= useState("");
    const[time,setTime] = useState("");
    const[noteDetails,setNoteDetails]=useState("");
    const[isComplated,setIsComplated]=useState(false);

    const _onPress_AddSaveNote = ()=>{
        const item ={
            key:itemKey,
            taskname: taskname,
            endDate: endDate,
            time:time,
            noteDetails:noteDetails,    
        };
        // _onPress_AddSaveNote'a basıldığında yukarıda oluşturulan (item'de) değerleri firebase'e aktarılmasını sağlayan kod.
        addNote(item);
    }

    const itemKey= props.route.params?.itemKey;

    useEffect(()=>{
        props.navigation.setOptions({
            title:itemKey ? loc.t(texts.edit) : loc.t(texts.add)
        })
    }, []);

    const { styles, colors } = useThemedValues(getStyles);
    const loc = useLocalization();

    return (
        <View style={{flex:1}}>
        <SafeAreaView style={styles.mainContainer} >
        <ScrollView style={styles.mainContainer}>
        <TextInput 
        value={taskname}
        onChangeText={setTaskname}
        style={styles.taskNameInput} 
        placeholder={loc.t(texts.taskname)} 
        textAlignVertical="center" 
        placeholderTextColor={colors[colorNames.addNewNote.placeHolderText]}>
        </TextInput>
        <TextInput 
        value={endDate}
        onChangeText={setEndDate}
        style={styles.endDateInput} 
        placeholder={loc.t(texts.endDate)} 
        textAlignVertical="center" 
        placeholderTextColor={colors[colorNames.addNewNote.placeHolderText]}>
        </TextInput>
        <TextInput 
        value={time}
        onChangeText={setTime}
        style={styles.timeInput} 
        placeholder={loc.t(texts.time)} 
        textAlignVertical="center"  
        placeholderTextColor={colors[colorNames.addNewNote.placeHolderText]} >
        </TextInput>
        <TextInput 
        value={noteDetails}
        onChangeText={setNoteDetails}
        style={styles.noteDetailsInput} 
        placeholder={loc.t(texts.noteDetails)} 
        textAlign="left" 
        textAlignVertical="top" 
        placeholderTextColor={colors[colorNames.addNewNote.placeHolderText]}>

        </TextInput>
        
        
        <TouchableOpacity style={styles.addButton} onPress={_onPress_AddSaveNote}>
            <Text 
            style={{marginLeft:5, 
            backgroundColor:colors[colorNames.addNewNote.border],
            fontSize:20,fontFamily:Fonts.type.bold, 
            color:colors[colorNames.addNewNote.headerText]}}
            >
                {itemKey?loc.t(texts.edit):loc.t(texts.add)}
            </Text>
        </TouchableOpacity>
        </ScrollView>
        </SafeAreaView>
        </View>
    )
};

export default AddNewNote;
