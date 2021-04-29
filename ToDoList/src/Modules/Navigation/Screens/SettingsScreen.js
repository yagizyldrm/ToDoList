import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./Styles/SettingsScreenStyles";
import OptionsMenu1 from "../Components/OptionsMenu1";
import OptionsMenu2 from "../Components/OptionsMenu2";



const SettingsScreen = props => {

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.text1}>
                    Yağız Yıldırım
                </Text>
                <Text style={styles.text2}>
                    yagizyildirim@yandex.com
                </Text>
                <View style={styles.optionContainer}>
                    <OptionsMenu1 />
                    <OptionsMenu2 />
                </View>
               <TouchableOpacity style={styles.signOutTouchable}>
                   <Text style={styles.toucableText}>Çıkış Yap</Text>
               </TouchableOpacity>
            
            </SafeAreaView>
            
        </View>
    );
}

export default SettingsScreen;