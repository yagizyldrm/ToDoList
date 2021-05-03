import React from 'react';
import { TouchableOpacity, View  } from 'react-native';

import { useThemedValues } from "../../Theming";
import { useDispatchChangeLocale, useLocale,  useLocaleOptions, useLocalization } from "../../Localization";
import { useNavigation } from '@react-navigation/core'; 

import ToDoList from '../Components/ToDoList';
import Icon from '../../../Components/Icon';

import { Svgs } from '../../../StylingConstants';

import getStyles from './Styles/ToDoScreenStyles';


const ToDoScreen = props => {

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