import React, { useEffect, useState } from 'react';
import { FlatList, KeyboardAvoidingView, Text, Platform, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Metrics } from '../../StylingConstants';
import { useThemedValues } from '../Theming';


import Icon from '../../Components/Icon';
import { Svgs } from '../../StylingConstants';

import getStyles from './Styles/ToDoScreenStyles';

import { useLocalization, texts } from '../Localization';
import { deleteItem, subscribeToNoteData } from './API/Firebase';
import { useNavigation } from '@react-navigation/core';



const ToDoList = props => {

    console.log("ToDoList");
    const [noteList, setNoteList] = useState(null);
    const [isDeleteModeOn, setIsDeleteModeOn] = useState(false);
    const [isDoneList, setIsDoneList] = useState(false);

    const loc = useLocalization();
    const { styles } = useThemedValues(getStyles);

    useEffect(() => {
        console.log("useEffect")
        const off = subscribeToNoteData(noteList => {
            setNoteList(noteList)
        });
        return () => off();
            
        
    }, []);
    const navigation = useNavigation();

    const _onPress_Edit = item => {
        //Burada yaptığımız işlem AddNoteScreen'e item'in Id'sini göndermek.
        {
            isDeleteModeOn ? setIsDeleteModeOn(false) : 
            navigation.navigate("addnote-screen",{ itemKey: item.key})
        }
    }
    
    // Silmek için bu fonksiyonu kullanıyoruz.
    const _onPress_Delete = (item) => {
        // deleteItem firebase'den geliyor.
            deleteItem(item.key)
    }

    const _onLongPress_Delete = () => {
        setIsDeleteModeOn(true)
    }
    
    const _onPress_Done = (item) => {
        setIsDoneList(true)
    }

    const _renderToDoItem = ({ item }) => {
        console.log('rendertodoitem içi');
        return (
            isDoneList 
            ?
            null 
            : 
            <View style={styles.todoBox}>
                <TouchableOpacity style={styles.checkIconContainer} onPress = {() => _onPress_Done(item)}>
                    <Icon iconStyle={styles.checkIcon} svg={Svgs.Checkbox} />
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.titleContainer} 
                onLongPress={() => _onLongPress_Delete()}
                onPress={() => _onPress_Edit(item)}>
                    <Text style={styles.messageText}>{item.taskname}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteIconContainer} onPress={() => _onPress_Delete(item)} >
                    {
                        isDeleteModeOn ? <Icon iconStyle={styles.deleteIcon} svg={Svgs.DeleteIcon} /> : null
                    }
                </TouchableOpacity>
            </View>
        )
    };

    const _renderDoneItem = ({ item }) => {
        console.log('renderDone içi');
        return (
            isDoneList 
            ? 
                <View style={styles.doneBox}>
                <TouchableOpacity style={styles.checkedIconContainer} >
                    <Icon iconStyle={styles.checkedIcon} svg={Svgs.Checkedbox} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.doneTitleContainer}>
                    <Text style={styles.doneMessageText}>{item.taskname}</Text>
                </TouchableOpacity> 
                </View>
            :
                null   
        )
    }
    
    return (
        console.log("todoReturn"),
        <>
        
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                keyboardVerticalOffset={Metrics.navBarHeight * 1.6}
            >
                <View style={styles.flatListContainer}>
                    <View style={styles.todoBoxContainer}>
                        <FlatList
                            style={{ flexGrow: 0 }}
                            data={noteList}
                            renderItem={_renderToDoItem}
                            keyExtractor={item => item.key}
                            inverted
                        />
                    </View>
                </View>
                <View style={styles.completedTextContainer}>
                    <Text style={styles.completedText}>
                        {loc.t(texts.completed)}
                    </Text>
                </View>
                <View style={styles.flatListDoneContainer}>
                    <View style={styles.todoBoxContainer}>
                        <FlatList
                            style={{ flexGrow: 0 }}
                            data={noteList}
                            renderItem={_renderDoneItem}
                            keyExtractor={item => item.key}
                            inverted
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
        </>
    )
};

export default ToDoList;
