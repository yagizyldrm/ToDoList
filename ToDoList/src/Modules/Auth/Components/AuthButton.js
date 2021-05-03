import React from 'react';

import { Text, TouchableOpacity } from 'react-native';
import BorderedBox from '../../../Components/BorderedBox';
import getStyles from '../styles/AuthButtonStyles';
import { useThemedValues, colorNames } from '../../Theming';

const AuthButton = (props) => {
    const {colors, styles} = useThemedValues(getStyles);

    return (
        <BorderedBox 
        backgroundColor={colors[colorNames.auth.coloredButtonBackground]}
        borderColor={colors[colorNames.auth.inputBorder]}>
        <TouchableOpacity
            style={styles.touchable}
            onPress={props.onPress}
            disabled={props.disabled}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    </BorderedBox>
    );
};

export default AuthButton;
