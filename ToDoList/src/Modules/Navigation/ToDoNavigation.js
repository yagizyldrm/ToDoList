import React from 'react';
import { Text, TouchableOpacity, View, Button } from 'react-native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import SettingsScreen from "./Screens/SettingsScreen";
import ToDoScreen from './Screens/ToDoScreen';
import AddNewNote from './Screens/AddNewNote';
import SettingsIcon from './SettingsIcon';

import { texts, useLocalization } from "../Localization";
import { colorNames, useThemedValues } from "../Theming";

import getStyles from "../Navigation/Screens/Styles/AddNewNoteStyles";

const ToDoStack = createStackNavigator();

const ToDoNavigation = () => {
    const { styles, colors } = useThemedValues(getStyles);
    const loc = useLocalization();
    console.log('todoNavigation');
    return (
        <ToDoStack.Navigator>
            <ToDoStack.Screen
                name="todo-screen"
                component={ToDoScreen}
                options={{
                    title: "ToDo List",
                    headerStyle: {
                        backgroundColor: '#189ad3',
                    },
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white',
                    },
                    headerRight: SettingsIcon,
                }}
            />
            <ToDoStack.Screen
                name="settings-screen"
                component={SettingsScreen}
                options={{
                    title:loc.t(texts.settings),
                    headerStyle:{
                        backgroundColor:colors[colorNames.addNewNote.border]
                    },
                    headerTitleAlign:"center",
                    headerTitleStyle:{
                        color:colors[colorNames.addNewNote.text]
                    }
                }}
            />
            <ToDoStack.Screen 
                name="addnote-screen"
                component={AddNewNote}
                options={{
                    title:loc.t(texts.addNewNote),
                    headerStyle:{
                        backgroundColor:colors[colorNames.addNewNote.border]
                    },
                    headerTitleAlign:"center",
                    headerTitleStyle:{
                        color:colors[colorNames.addNewNote.headerText]
                    }
                }}
            />
        </ToDoStack.Navigator>
    );
};

export default ToDoNavigation;
