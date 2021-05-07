import React, { useState } from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Keyboard, Image } from 'react-native';
import getStyles from '../styles/AuthScreenStyles';
import AuthInput from '../Components/AuthInput';
import AuthButton from '../Components/AuthButton';
import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';
import { useThemedStyles } from '../../Theming';
import { useLocale, useLocalization, texts } from '../../Localization';
import { customUppercase } from '../../../Utils/LocaleUpperCase'

const AuthScreen = props => {

    const [isLogin, setIsLogin] = useState(true);

    const styles = useThemedStyles(getStyles);
    const loc = useLocalization();

    const locale = useLocale();
    const loginUppercase = customUppercase(loc.t(texts.login), locale);
    const signupUppercase = customUppercase(loc.t(texts.signUp), locale);


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
                                        placeholder={loc.t(texts.username)}
                                        value={props.nameValue}
                                        onChangeText={props.onChangeText_Name}
                                        autoCapitalize={'words'} />
                                </View>
                        }
                        <View style={styles.inputContainer}>
                            <AuthInput
                                placeholder={loc.t(texts.eMail)}
                                value={props.emailValue}
                                onChangeText={props.onChangeText_Email}
                                autoCapitalize={'none'} />
                        </View>
                        <View style={styles.inputContainer}>
                            <AuthInput
                                placeholder={loc.t(texts.password)}
                                value={props.passwordValue}
                                onChangeText={props.onChangeText_Password}
                                autoCapitalize={'none'}
                                secureTextEntry={true}
                            />
                        </View>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <AuthButton
                            onPress={isLogin ? props.onPress_SignIn : props.onPress_SignUp}
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