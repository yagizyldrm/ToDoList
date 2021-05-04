import React from 'react';
import { FlatList, KeyboardAvoidingView, Text, Platform, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Metrics } from '../../StylingConstants';
import { useThemedValues } from '../Theming';
import ToDoBox from './Components/ToDoBox';
import DummyData from './DummyData';

import getStyles from './Styles/ToDoScreenStyles'

const ToDoList = props => {
    console.log('todolist içi');

    const { styles } = useThemedValues(getStyles);

    const _renderToDoItem = ({item , index}) => {
        console.log('rendertodoitem içi');
        return (
            <Text>{item.message}</Text>
        )
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
            style={{ flex:1 }}
            behavior={ Platform.OS === 'ios' ? 'padding' : null }
            keyboardVerticalOffset={ Metrics.navBarHeight * 1.6 }
            >
                <TouchableOpacity style={styles.flatListContainer}>
                    <View style={styles.todoBoxContainer}>
                        <FlatList 
                            style={{flexGrow:0}}
                            contentContainerStyle={{backgroundColor: 'pink'}}
                            data={DummyData}
                            renderItem={_renderToDoItem}
                            keyExtractor={(item) => item.id}
                            inverted
                        />
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
};

export default ToDoList;
