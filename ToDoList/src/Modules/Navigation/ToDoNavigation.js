import React from 'react';
import { Text, TouchableOpacity, View, Button } from 'react-native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import SettingsScreen from "../Settings/SettingsScreen";
import ToDoScreen from '../ToDo/ToDoScreen';
import AddNewNote from './Screens/AddNewNote';
import SettingsIcon from '../Settings/SettingsIcon';
import SideBarIcon from '../SideBarMenu/SideBarIcon';

import { texts, useLocalization } from "../Localization";
import { colorNames, useThemedValues } from "../Theming";

import getStyles from "../Navigation/Screens/Styles/AddNewNoteStyles";
import { Fonts } from '../../StylingConstants';

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
                        backgroundColor: colors[colorNames.todo.headerBlue],
                    },
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: colors[colorNames.addNewNote.headerText],
                        fontFamily:Fonts.type.medium
                    },
                    headerRight: SettingsIcon,
                    headerLeft: SideBarIcon,
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
                        color:colors[colorNames.addNewNote.headerText],
                        fontFamily:Fonts.type.medium
                    
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
                        color:colors[colorNames.addNewNote.headerText],
                        fontFamily:Fonts.type.medium
                    }
                }}
            />
        </ToDoStack.Navigator>
    );
};

export default ToDoNavigation;
