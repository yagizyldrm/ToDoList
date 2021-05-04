import React from 'react';
import { TextInput, View, Text } from 'react-native';
import getStyles from '../Styles/ToDoBoxStyles';

const ToDoBox = props => {
  
    console.log('todobox içi');
    
    const {message} = props;

    return (
        <Text>{message}</Text> 
    )
};

export default ToDoBox;
