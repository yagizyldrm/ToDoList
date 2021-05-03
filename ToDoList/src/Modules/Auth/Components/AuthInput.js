import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import styles from '../styles/AuthInputStyles'
import BorderedBox from '../../../Components/BorderedBox'

const AuthInput = props => {

  const [text, onChangeText] = useState("");

  return (

    <BorderedBox>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder={props.placeholder}
        />
      </View>
    </BorderedBox>
  );
};

export default AuthInput;

