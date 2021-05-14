import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";
import { useThemedValues, colorNames } from "../../Theming";
import { texts, useLocalization } from "../../Localization"

import getStyles from "./Styles/AddNewNoteStyles";
import { addNote, getNoteDetail } from '../../ToDo/API/Firebase';
import { Fonts } from '../../../StylingConstants';

const AddNewNote = props => {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [taskname, setTaskname] = useState("");
    const [time, setTime] = useState(new Date());
    const [todayDate, setDateToday] = useState('');
    const [todayTime,setTodayTime] = useState('');
    const [noteDetails, setNoteDetails] = useState('');
    const [isComplated, setIsComplated] = useState(false);
    
    

    const onChangeDate = (event, selectedDate) => {
        if (event.type === 'dismissed') {
            setShow(false);
        }

        else {
            const currentDate = selectedDate;
            setShow(Platform.OS === 'ios');
            setDate(currentDate);
            setDateToday(moment(currentDate).format('DD-MM-YYYY'));
        }
    };
    
   
    

    const onChangeTime = (event, selectedTime) => {
        if (event.type === 'dismissed') {
            setShow(false);
        }

        else {
            const currentTime = selectedTime;
            setShow(Platform.OS === 'ios');
            setTime(currentTime);
            setTodayTime(moment(currentTime).format('LT'));
        }
    };

    useEffect(() => {
        if (props.value !== undefined) {
            setDateToday(props.value)
        }
    }, [])

    const showModeDate = () => {
        setShow(true);
        setMode('date');
    };
    const showModeTime = () => {
        setShow(true);
        setMode('time');
    };


    const _onPress_AddSaveNote = () => {
        const item = {
            key: itemKey,
            taskname: taskname,
            time: time,
            noteDetails: noteDetails,
            date: date,
            todayDate: todayDate,
            todayTime: todayTime,
            isComplated: false,
            
        };

        const onComplate = () => {
            props.navigation.goBack();
        }

        // _onPress_AddSaveNote'a basıldığında yukarıda oluşturulan (item'de) değerleri firebase'e aktarılmasını sağlayan kod.
        addNote(item, onComplate);
    }
    useEffect(() => {
        if (itemKey) {
            getNoteDetail(itemKey, item => {
                setTaskname(item.taskname);
                //setTime(item.time);
                setNoteDetails(item.noteDetails);
                setIsComplated(item.isComplated);
                //setDate(item.date);
                setDateToday(item.todayDate);
                setTodayTime(item.todayTime);
            });
        }
    }, []);


    const itemKey = props.route.params?.itemKey;

    useEffect(() => {
        props.navigation.setOptions({
            title: itemKey ? loc.t(texts.edit) : loc.t(texts.add)
        })
    }, []);


    const { styles, colors } = useThemedValues(getStyles);
    const loc = useLocalization();


    return (
        <View style={{ flex: 1 }}>
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
                    <View style={styles.datePickerTextInputContainer}>
                        <TextInput
                            value={todayDate}
                            onChangeText={setDate}
                            style={styles.endDateInput}
                            placeholder={loc.t(texts.endDate)}
                            textAlignVertical="center"
                            placeholderTextColor={colors[colorNames.addNewNote.placeHolderText]}
                            editable={false}>
                            
                        </TextInput>
                        <TouchableOpacity style={styles.datePicker} onPress={showModeDate}>
                        {show && (
                            <DateTimePicker
                                testID="datePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChangeDate}
                                defaultDate={"01-01-2010"}
                            />
                        )}
                        <Text style={{color:colors[colorNames.addNewNote.headerText],fontFamily:Fonts.type.regular}}  >{loc.t(texts.setDate)}</Text></TouchableOpacity>
                    </View>
                    <View style={styles.datePickerTextInputContainer}>
                        <TextInput
                            value={todayTime}
                            onChangeText={setTime}
                            style={styles.endDateInput}
                            placeholder={loc.t(texts.time)}
                            textAlignVertical="center"
                            placeholderTextColor={colors[colorNames.addNewNote.placeHolderText]} >
                        </TextInput>
                        <TouchableOpacity style={styles.datePicker} onPress={showModeTime}>
                        {show && (
                            <DateTimePicker
                                testID="timePicker"
                                value={time}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChangeTime}
                            />
                        )}
                        <Text style={{color:colors[colorNames.addNewNote.headerText],fontFamily:Fonts.type.regular}} >{loc.t(texts.setTime)}</Text>
                        </TouchableOpacity>
                    </View>
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
                            style={{
                                marginLeft: 5,
                                backgroundColor: colors[colorNames.addNewNote.border],
                                fontSize: 20, fontFamily: Fonts.type.bold,
                                color: colors[colorNames.addNewNote.headerText]
                            }}
                        >
                            {itemKey ? loc.t(texts.edit) : loc.t(texts.add)}
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
};

export default AddNewNote;
