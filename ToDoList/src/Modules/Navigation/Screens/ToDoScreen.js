import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, TouchableOpacity, View, Button, SafeAreaView } from 'react-native';

import ToDoList from '../Components/ToDoList';
import AddNewNote from '../Screens/AddNewNote';

import styles from './Styles/ToDoScreenStyles';

import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';

const ToDoScreen = props => {

    const navigation = useNavigation();

    return (
        <>
            <View style={styles.container}>
                <View>
                    <ToDoList />
                </View>
            </View> 
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('addnote-screen')}>
                <View style={styles.iconContainer} >
                    <Icon iconStyle={styles.icon} svg={Svgs.PlusButton} />
                </View>
            </TouchableOpacity>
        </>
    );
};

export default ToDoScreen;