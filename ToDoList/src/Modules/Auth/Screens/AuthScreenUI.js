import React, { useState } from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Keyboard, Image } from 'react-native';
import getStyles from '../styles/AuthScreenStyles';
import { Images } from '../../../StylingConstants/';
import AuthInput from '../Components/AuthInput';
import AuthButton from '../Components/AuthButton';
import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';
import { useThemedStyles } from '../../Theming';
import { useLocale, useLocalization, texts } from '../../Localization';

const AuthScreen = () => {

    const [isLogin, setIsLogin] = useState(true);

    const styles = useThemedStyles(getStyles);
    const loc = useLocalization();

    const locale = useLocale();
    const loginUppercase = loc.t(texts.login).toLocaleUpperCase(locale);
    const signupUppercase = loc.t(texts.signUp).toLocaleUpperCase(locale);

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.keyboardAvoiding}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                keyboardVerticalOffset={0}>
                <TouchableOpacity
                    style={styles.container}
                    activeOpacity={1}
                    onPress={Keyboard.dismiss}>
                    <View style={styles.appLogoContainer}>
                        <View style={styles.authLogoContainer}>
                            <Icon svg={Svgs.AuthScreenLogo} iconStyle={styles.icon} />
                        </View>
                    </View>
                    <View style={styles.appNameContainer}>
                        <Text style={styles.appNameText}>TODO</Text>
                    </View>
                    <View style={styles.inputsContainer}>
                        {
                            isLogin ?
                                null
                                :
                                <View style={styles.inputContainer}>
                                    <AuthInput
                                        placeholder={loc.t(texts.username)} />
                                </View>
                        }
                        <View style={styles.inputContainer}>
                            <AuthInput
                                placeholder={loc.t(texts.eMail)} />
                        </View>
                        <View style={styles.inputContainer}>
                            <AuthInput
                                placeholder={loc.t(texts.password)}
                            />
                        </View>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <AuthButton
                            onPress={isLogin ? () => { } : () => { }}
                            disabled={false}
                            text={isLogin ? loginUppercase : signupUppercase} />
                        <TouchableOpacity style={styles.signupTouchable} onPress={() => setIsLogin(!isLogin)}>
                            <Text style={styles.signupText}>
                            {isLogin ? loc.t(texts.signUp) : loc.t(texts.login)}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default AuthScreen