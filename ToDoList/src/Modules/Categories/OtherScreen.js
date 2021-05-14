import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, } from "react-native";
import { useThemedValues } from "../Theming";
import getStyles from './styles/CategoriesScreenStyles'


const OtherScreen = props => {

    const { styles } = useThemedValues(getStyles);

    return (
        <View style={styles.main}>
            <Text>Diğer</Text>
        </View>
    );
}

export default OtherScreen;
