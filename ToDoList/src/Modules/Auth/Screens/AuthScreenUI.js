import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Keyboard, Image } from 'react-native';
import styles from '../styles/AuthScreenStyles'
import { Images } from '../../../StylingConstants/'
import AuthInput from '../Components/AuthInput'
import AuthButton from '../Components/AuthButton'

const AuthScreen = () => {

    const isLogin = false;

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.keyboardAvoiding}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                keyboardVerticalOffset={0}>
                <TouchableOpacity
                    style={styles.container}
                    activeOpacity={1}
                    onPress={Keyboard.dismiss}
                >
                    <View style={styles.appLogoContainer}>
                        <Image source={Images.appLogo} style={styles.image} />
                    </View>
                    <View style={styles.inputsContainer}>
                        {
                            isLogin ?
                                null
                                :

                                <AuthInput
                                    placeholder=' kullanıcı adı'
                                />}
                        <AuthInput
                            placeholder=' e-mail' />
                        <AuthInput
                            placeholder=' şifre' />
                    </View>
                    <View style={styles.buttonsContainer}>
                    <AuthButton
                            onPress={isLogin ? ()=>{} : ()=>{}}
                            disabled={false}
                            text={isLogin ? 'GİRİŞ YAP' : 'çıkış'} />    

                            
                        <TouchableOpacity style={styles.signupTouchable} onPress={() =>{} }>
                            <Text style={styles.signupText}>
                                KAYIT OL
                            </Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default AuthScreen