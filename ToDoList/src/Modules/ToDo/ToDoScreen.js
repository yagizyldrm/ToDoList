import React, { useRef } from 'react';
import { TouchableOpacity, View, Text, DrawerLayoutAndroid } from 'react-native';

import { useDispatchChangeLocale, useLocale, useLocaleOptions, useLocalization, texts } from "../Localization";
import { useNavigation } from '@react-navigation/core';
import { colorNames, useThemedValues } from "../Theming";



import ToDoList from './ToDoList';
import Icon from '../../Components/Icon';

import { Fonts, Metrics, Svgs } from '../../StylingConstants';

import getStyles from './Styles/ToDoScreenStyles';
import { getData } from './API/Firebase';
import { useSelector } from 'react-redux';
import { userSelector } from '../Auth';



const ToDoScreen = props => {


    const drawer = useRef(null);
    const user = useSelector(userSelector);
    const { styles,colors } = useThemedValues(getStyles);

    // Localization
    const currentLocale = useLocale();
    const loc = useLocalization();
    const localeOptions = useLocaleOptions();
    const changeLocale = useDispatchChangeLocale();

    // Navigation
    const navigation = useNavigation();




    const _onPress_Add = () => {
        props.navigation.navigate("addnote-screen")
    }

    //Drawer
    const navigationView = () => {
        return (
            <>
                <View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.appName}>
                            TODO
                        </Text>
                        <Text style={styles.userName}>
                            {user.displayName}
                        </Text>
                        <Text style={styles.email}>
                            {user.email}
                        </Text>
                    </View>
                    <View style={styles.categoriesContainer}>
                        <View style={styles.categoryTitleContainer}>
                            <Text style={styles.categoryText}>{loc.t(texts.categories)}</Text>
                        </View>
                        <TouchableOpacity style={styles.touchableContainer} onPress={() => props.navigation.navigate("home-screen")}>
                            <View style={styles.drawerIconsContainer} >
                                <Icon iconStyle={styles.drawerIcons} svg={Svgs.HomeIcon} />
                            </View>
                            <Text style={styles.categoryText}>{loc.t(texts.home)}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchableContainer} onPress={() => props.navigation.navigate("work-screen")}>
                            <View style={styles.drawerIconsContainer} >
                                <Icon iconStyle={styles.drawerIcons} svg={Svgs.WorkIcon} />
                            </View>
                            <Text style={styles.categoryText}>{loc.t(texts.work)}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchableContainer} onPress={() => props.navigation.navigate("other-screen")}>
                            <View style={styles.drawerIconsContainer} >
                                <Icon iconStyle={styles.drawerIcons} svg={Svgs.OtherIcon} />
                            </View>
                            <Text style={styles.categoryText}>{loc.t(texts.other)}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            
                
            </>
        );
    }

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={styles.drawerWidth}
            renderNavigationView={navigationView}
            drawerBackgroundColor="rgba(0,0,0,0)"
        >
            <View style={styles.container}>
                    <ToDoList />
                    <View style={{ flexDirection: "row", justifyContent: "space-between", height: Metrics.width * 0.22, marginHorizontal: Metrics.width * 0.05, backgroundColor: colors[colorNames.settings.background] }}>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Text style={{ color: colors[colorNames.addNewNote.text], marginVertical: 10, fontFamily: Fonts.type.bold, fontSize: Fonts.size(20) }}>{loc.t(texts.welcome) + " " + user.displayName}</Text>
                            <Text style={{ color: colors[colorNames.addNewNote.text], marginBottom: 20, fontFamily: Fonts.type.regular, fontSize: Fonts.size(15) }}>{loc.t(texts.noteMessage)}</Text>
                        </View>
                        <TouchableOpacity style={styles.addButton} onPress={_onPress_Add}>
                            <View style={styles.iconContainer} >
                                <Icon iconStyle={styles.icon} svg={Svgs.PlusButton} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
        </DrawerLayoutAndroid>
    );
};

export default ToDoScreen;