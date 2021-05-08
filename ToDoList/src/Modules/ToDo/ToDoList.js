import React, { useEffect, useState } from 'react';
import { FlatList, KeyboardAvoidingView, Text, Platform, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Metrics } from '../../StylingConstants';
import { useThemedValues } from '../Theming';


import Icon from '../../Components/Icon';
import { Svgs } from '../../StylingConstants';

import getStyles from './Styles/ToDoScreenStyles';

import { useLocalization, texts } from '../Localization';
import { subscribeToNoteData } from './API/Firebase';



const ToDoList = props => {

    console.log("ToDoList");
    const [noteList, setNoteList] = useState(null);
    const loc = useLocalization();
    const { styles } = useThemedValues(getStyles);

    useEffect(() => {
        console.log("useEffect")
        const off = subscribeToNoteData(noteList => {
            setNoteList(noteList)
        });
        return () => off();
            
        
    }, []);

    const _onPress_Edit = item => {
        //Burada yaptığımız işlem AddNoteScreen'e item'in Id'sini göndermek.
        props.navigation.navigate("addnote-screen",{ itemKey: item.key})
    }




    const _renderToDoItem = ({ item }) => {
        console.log('rendertodoitem içi');
        return (
            <View style={styles.todoBox}>
                <TouchableOpacity style={styles.checkIconContainer} >
                    <Icon iconStyle={styles.checkIcon} svg={Svgs.Checkbox} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.titleContainer} onPress={() => _onPress_Edit(item)}>
                    <Text style={styles.messageText}>{item.taskname}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteIconContainer} >
                    <Icon iconStyle={styles.deleteIcon} svg={Svgs.DeleteIcon} />
                </TouchableOpacity>
            </View>
        )
    };

    const _renderDoneItem = ({ item }) => {
        console.log('renderDone içi');
        return (
            <View style={styles.doneBox}>
                <TouchableOpacity style={styles.checkedIconContainer} >
                    <Icon iconStyle={styles.checkedIcon} svg={Svgs.Checkedbox} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.doneTitleContainer}>
                    <Text style={styles.doneMessageText}>{item.taskname}</Text>
                </TouchableOpacity>
            </View>
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
