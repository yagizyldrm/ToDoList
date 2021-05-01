import React from 'react';
import { Text, TouchableOpacity, View, Button } from 'react-native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import SettingsScreen from "./Screens/SettingsScreen";
<<<<<<< HEAD
import { colorNames, useThemedColors } from '../Theming';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
=======
import ToDoScreen from './Screens/ToDoScreen';
import SettingsIcon from './SettingsIcon';
>>>>>>> 61a9d66179fed503d1602840280b7f7119074223

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
<<<<<<< HEAD

    const colors = useThemedColors();

=======
    console.log('todoNavigation');
>>>>>>> 61a9d66179fed503d1602840280b7f7119074223
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
<<<<<<< HEAD
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Icon"
                            color="#000000"
                        />
                    ),
=======
                    headerRight: SettingsIcon,
>>>>>>> 61a9d66179fed503d1602840280b7f7119074223
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
