import React from 'react';
import { Text, TouchableOpacity, View, Button } from 'react-native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import SettingsScreen from "./Screens/SettingsScreen";
import { colorNames, useThemedColors } from '../Theming';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const ToDoScreen = props => {
    const navigation = useNavigation();
    return (
        <>
            <View style={{
                flex:1,
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('settings-screen')}>
                    <Text>Deneme</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                alignItems: 'flex-end',
                justifyContent: 'flex-end'
                }}>
                <Button
                    title='ekle'
                    style={{
                        color:"#000000",
                        width:20,
                        height: 20,
                    }}
                />
            </View>
        </>
    );
}

const ToDoStack = createStackNavigator();

const ToDoNavigation = () => {

    const colors = useThemedColors();

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
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Icon"
                            color="#000000"
                        />
                    ),
                }}
            />
            <ToDoStack.Screen
                name="settings-screen"
                component={SettingsScreen} />
        </ToDoStack.Navigator>
    );
};

export default ToDoNavigation;
