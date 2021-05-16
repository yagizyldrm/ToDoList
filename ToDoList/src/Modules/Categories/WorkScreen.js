import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, } from "react-native";
import { useThemedValues } from "../Theming";
import getStyles from './styles/CategoriesScreenStyles'
import Icon from '../../Components/Icon';
import { Svgs } from '../../StylingConstants';



const WorkScreen = props => {

    const { styles } = useThemedValues(getStyles);

    return (
        <View style={styles.container}>
            <View style={styles.drawerIconsContainer} >
                <Icon iconStyle={styles.drawerIcons} svg={Svgs.ComingSoon} />
            </View>
        </View>
    );
}

export default WorkScreen;