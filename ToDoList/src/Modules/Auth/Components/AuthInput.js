import React, { useState } from 'react';
import { SafeAreaView, TextInput, View } from 'react-native';
import styles from '../styles/AuthInputStyles'


const AuthInput = props => {

    const [text, onChangeText] = useState("");

    return (
          <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder={props.placeholder}
        />
        </View>
    );
  };

export default AuthInput;

