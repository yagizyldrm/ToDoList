import React from 'react';
import { View } from 'react-native';

import styles from './styles/BorderedBoxStyles';

const BorderedBox = (props) => {

    let containerStyle = {
        ...styles.container,
        backgroundColor: props.backgroundColor,
        height: props.tall ? styles.tallHeight.height : styles.normalHeight.height,
        borderColor: props.borderColor,
    };

    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    );
};

export default BorderedBox;
