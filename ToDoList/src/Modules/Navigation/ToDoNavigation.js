import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import SettingsScreen from "./Screens/SettingsScreen";

const ToDoScreen = props => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('settings-screen')}>
                <Text>Deneme</Text>
            </TouchableOpacity>
        </View>
    );
}

const ToDoStack = createStackNavigator();

const ToDoNavigation = () => {
    return (
        <ToDoStack.Navigator>
            <ToDoStack.Screen
                name="todo-screen"
                component={ToDoScreen} />
            <ToDoStack.Screen
                name="settings-screen"
                component={SettingsScreen} />
        </ToDoStack.Navigator>
    );
};

export default ToDoNavigation;
