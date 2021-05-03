import React, { useState } from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Keyboard, Image } from 'react-native';
import styles from '../styles/AuthScreenStyles';
import { Images } from '../../../StylingConstants/';
import AuthInput from '../Components/AuthInput';
import AuthButton from '../Components/AuthButton';
import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';

const AuthScreen = () => {

    const [isLogin, setIsLogin] = useState(true);

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
                            <Icon svg={Svgs.AuthScreenLogo} iconStyle={{ color: 'purple' }} />
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
                                <View >
                                    <AuthInput
                                        placeholder=' kullanıcı adı' />
                                </View>
                        }
                        <View >
                            <AuthInput
                                placeholder=' e-mail' />
                        </View>
                        <View >
                            <AuthInput
                                placeholder='şifre'
                            />
                        </View>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <AuthButton
                            onPress={isLogin ? () => { } : () => { }}
                            disabled={false}
                            text={isLogin ? 'GİRİŞ YAP' : 'KAYIT OL'} />
                        <TouchableOpacity style={styles.signupTouchable} onPress={() => setIsLogin(!isLogin)}>
                            <Text style={styles.signupText}>
                            {isLogin ? 'Kayıt Ol' : 'Giriş Yap'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default AuthScreen


/*
<View style={styles.appLogoContainer}>
    <Image source={Images.appLogo} style={styles.image} />
</View>
*/