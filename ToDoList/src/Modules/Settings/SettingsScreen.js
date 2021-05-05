import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux"
import { userSelector } from "../Auth/Redux/UserRedux"
import { useDispatchChangeTheme,  useTheme,   useThemeOption,   useThemedValues } from "../Theming";
import { useDispatchChangeLocale, useLocale,  useLocaleOptions, useLocalization, texts } from "../Localization";
import OptionsMenu from "../Navigation/Components/OptionsMenu";


import getStyles from "./Styles/SettingsScreenStyles";
import { userReducer } from "../Auth";


const SettingsScreen = props => {

    const currentTheme = useTheme();
    const changeTheme = useDispatchChangeTheme();
    const themeOptions = useThemeOption();
    const { styles, colors } = useThemedValues(getStyles);

    const currentLocale = useLocale();
    const loc = useLocalization();
    const localeOptions = useLocaleOptions();
    const changeLocale = useDispatchChangeLocale();

    const _onSelect_Theme = (key) => {
        changeTheme(key);
    }
    const _onSelect_Locale = (key) =>{
        changeLocale(key);
    }

    const user = useSelector(userSelector);

    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <Text style={styles.text1}>
                    {user.displayName}
                </Text>
                <Text style={styles.text2}>
                    {user.email}
                </Text>
                <View style={styles.optionContainer}>
                    <OptionsMenu
                        options={themeOptions}
                        menuTitle={loc.t(texts.colorTheme)}
                        onSelect={_onSelect_Theme}
                        selectedOptionKey={currentTheme}
                    />
                    <OptionsMenu
                        options={localeOptions}
                        menuTitle={loc.t(texts.language)}
                        onSelect={_onSelect_Locale}
                        selectedOptionKey={currentLocale}
                    />
                    
                </View>
                <TouchableOpacity style={styles.signOutTouchable}>
                    <Text style={styles.toucableText}>{loc.t(texts.signOut)}</Text>
                </TouchableOpacity>

            </SafeAreaView>

        </View>
    );
}

export default SettingsScreen;