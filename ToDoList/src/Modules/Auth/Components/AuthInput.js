import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import getStyles from '../styles/AuthInputStyles'
import BorderedBox from '../../../Components/BorderedBox'
import { useThemedValues, colorNames } from '../../Theming';

const AuthInput = props => {

  const [text, onChangeText] = useState("");
  const {styles, colors} = useThemedValues(getStyles);

  return (
    <BorderedBox borderColor={colors[colorNames.auth.inputBorder]}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder={props.placeholder}
          placeholderTextColor={colors[colorNames.auth.inputPlaceholder]}
        />
      </View>
    </BorderedBox>
  );
};

export default AuthInput;

