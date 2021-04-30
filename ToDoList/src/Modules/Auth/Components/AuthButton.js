import React from 'react';

import { Text, TouchableOpacity } from 'react-native';
import BorderedBox from '../../../Components/BorderedBox';
import styles from '../styles/AuthButtonStyles';

const AuthButton = (props) => {

    return (
        <BorderedBox
        borderColor='#71c7ec'
        backgroundColor='white'
        >
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
