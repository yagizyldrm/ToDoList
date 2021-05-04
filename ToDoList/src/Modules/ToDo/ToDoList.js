import React from 'react';
import { FlatList, KeyboardAvoidingView, Text, Platform, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Metrics } from '../../StylingConstants';
import { useThemedValues } from '../Theming';
import DummyData from './DummyData';

import Icon from '../../Components/Icon';
import { Svgs } from '../../StylingConstants';

import getStyles from './Styles/ToDoScreenStyles'

const ToDoList = props => {
    console.log('todolist içi');

    const { styles } = useThemedValues(getStyles);

    const _renderToDoItem = ({item , index}) => {
        console.log('rendertodoitem içi');
        return (
            <View style={styles.todoBox}>
                <TouchableOpacity style={styles.checkIconContainer} >
                    <Icon iconStyle={styles.checkIcon} svg={Svgs.Checkbox} />
                </TouchableOpacity>
                <Text style={styles.messageText}>{item.message}</Text>
            </View>
        )
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
            style={{ flex:1 }}
            behavior={ Platform.OS === 'ios' ? 'padding' : null }
            keyboardVerticalOffset={ Metrics.navBarHeight * 1.6 }
            >
                <View style={styles.flatListContainer}>
                    <View style={styles.todoBoxContainer}>
                        <FlatList 
                            style={{flexGrow:0}}
                            data={DummyData}
                            renderItem={_renderToDoItem}
                            keyExtractor={(item) => item.id}
                            inverted
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
};

export default ToDoList;
