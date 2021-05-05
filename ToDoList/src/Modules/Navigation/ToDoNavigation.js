import React from 'react';
import { Text, TouchableOpacity, View, Button } from 'react-native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import SettingsScreen from "../Settings/SettingsScreen";
import ToDoScreen from '../ToDo/ToDoScreen';
import AddNewNote from './Screens/AddNewNote';
import SettingsIcon from '../Settings/SettingsIcon';

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
                    title: loc.t(texts.toDoList),
                    headerStyle: {
                        backgroundColor: '#189ad3',
                    },
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: colors[colorNames.addNewNote.headerText],
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
                    headerTintColor:colors[colorNames.settings.tintColor],
                    headerTitleStyle:{
                        color:colors[colorNames.addNewNote.headerText]
                    
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
                    headerTintColor:colors[colorNames.settings.tintColor],
                    headerTitleStyle:{
                        color:colors[colorNames.addNewNote.headerText]
                    }
                }}
            />
        </ToDoStack.Navigator>
    );
};

export default ToDoNavigation;
