import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, } from "react-native";
import { useThemedValues } from "../Theming";
import getStyles from './styles/CategoriesScreenStyles'


const HomeScreen = props => {

    const { styles } = useThemedValues(getStyles);

    return (
        <View style={styles.main}>
            <Text>Ev</Text>
        </View>
    );
}

export default HomeScreen;

