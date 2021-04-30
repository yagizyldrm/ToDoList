import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import SettingsScreen from "./Screens/SettingsScreen";
import ToDoScreen from './Screens/ToDoScreen';
// import SettingsIcon from './SettingsIcon';


const ToDoStack = createStackNavigator();

const ToDoNavigation = () => {

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
                    // headerRight: SettingsIcon,
                }}
            />
            <ToDoStack.Screen
                name="settings-screen"
                component={SettingsScreen}
                options={{
                    title: "Settings",
                    headerStyle: {
                        backgroundColor: '#189ad3',
                    },
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: 'white',
                    }
                }}
            />
        </ToDoStack.Navigator>
    );
};

export default ToDoNavigation;
