import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '../Components/Icon';
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
        color: 'black',
    }
})

const SettingsIcon = props => {
    const styles = useThemedStyles(getStyles);

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('settings-screen')}>
            <Icon iconStyle={styles.icon} svg={Svgs.SettingsIcon} />
        </TouchableOpacity>
    )
}

export default SettingsIcon;