import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, TouchableOpacity, View, Button, SafeAreaView } from 'react-native';

import ToDoList from '../Components/ToDoList';

import styles from './Styles/ToDoScreenStyles';


const ToDoScreen = props => {
    
    const navigation = useNavigation();

    return (
        <>
            <View style={styles.container}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('settings-screen')}> 
                    <Text>Burdan settingse</Text>
                    </TouchableOpacity>
                    <ToDoList />
                </View>
            </View>
            <View
                style={styles.addButton}>
                <Button
                    title='ekle'

                />
            </View>
        </>
    );
};

export default ToDoScreen;