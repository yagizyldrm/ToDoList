import React from 'react';
import { FlatList, KeyboardAvoidingView, Platform, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Metrics } from '../../StylingConstants';
import { useThemedValues } from '../Theming';
import ToDoBox from './Components/ToDoBox';
import DummyData from './DummyData';

import getStyles from './Styles/ToDoScreenStyles'

const ToDoList = props => {

    const { styles } = useThemedValues(getStyles);

    const _renderToDoItem = ({item}) => {
        return (
            <ToDoBox todoData={item}/>
        )
    };

    return (
        <SafeAreaView>
            <KeyboardAvoidingView
            style={{ flex:1 }}
            behavior={ Platform.OS === 'ios' ? 'padding' : null }
            keyboardVerticalOffset={ Metrics.navBarHeight * 1.6 }
            >
                <TouchableOpacity style={styles.container}>
                    <View style={styles.todoBoxContainer}>
                        <FlatList 
                            style={{flexGrow:0}}
                            contentContainerStyle={{backgroundColor: 'pink'}}
                            data={DummyData}
                            renderItem={_renderToDoItem}
                            keyExtractor={(item, index) => index}
                            inverted
                        />
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
};

export default ToDoList;
