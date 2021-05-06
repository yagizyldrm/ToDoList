import React from 'react';
import { TouchableOpacity, View, Text  } from 'react-native';

import { useThemedValues } from "../Theming";
import { useDispatchChangeLocale, useLocale,  useLocaleOptions, useLocalization } from "../Localization";
import { useNavigation } from '@react-navigation/core'; 

import ToDoList from './ToDoList';
import Icon from '../../Components/Icon';

import { Svgs } from '../../StylingConstants';

import getStyles from './Styles/ToDoScreenStyles';
import { getData } from './API/Firebase';


const ToDoScreen = props => {

     //firebase realtime database

    // Theming
    const { styles, colors } = useThemedValues(getStyles);

    // Localization
    const currentLocale = useLocale();
    const loc = useLocalization();
    const localeOptions = useLocaleOptions();
    const changeLocale = useDispatchChangeLocale();

    // Navigation
    const navigation = useNavigation();

    return (
        <>
            <View style={styles.container}>
                    <ToDoList />
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