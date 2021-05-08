import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from '../../Components/Icon';
import { useThemedStyles } from '../Theming/CustomHooks/ThemingHooks';
import { Metrics, Svgs } from '../../StylingConstants';

const getStyles = Color => StyleSheet.create({
    iconContainer: {
        width: Metrics.width * 0.06,
        height: undefined,
        aspectRatio: 1,
        marginRight: Metrics.marginHorizontal,
    },
    icon: {
        color: 'white',
    },
    iconCon: {
    justifyContent: 'center',
    alignItems:'center',
    marginLeft: 40,
    }
})

const SideBarIcon = props => {
    const styles = useThemedStyles(getStyles);

    const navigation = useNavigation();
    return (
        <View style={styles.iconCon}>
        <TouchableOpacity style={styles.iconContainer}>
            <Icon iconStyle={styles.icon} svg={Svgs.MenuIcon} />
        </TouchableOpacity>
        </View>
    )
}

export default SideBarIcon;