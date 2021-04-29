import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from "../Screens/Styles/OptionsMenuStyles";


const OptionsMenu1 = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.MenuTitle}>Renk Teması</Text>
            <View style={{flexDirection:"column",marginVertical:10}}>
            <TouchableOpacity style={styles.optionTouchable}>
                <View style={styles.iconContainer}>
                </View>
                <Text style={styles.optionTitleText}>Aydınlık</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionTouchable}>
                <View style={styles.iconContainer}>
                </View>
                <Text style={styles.optionTitleText}>Karanlık</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default OptionsMenu1;