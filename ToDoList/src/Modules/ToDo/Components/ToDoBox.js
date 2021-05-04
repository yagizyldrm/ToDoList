import React from 'react';
import { TextInput } from 'react-native';
import getStyles from '../Styles/ToDoBoxStyles';

const ToDoBox = props => {
    
    const {todotext} = props.todoData;

    return (
        <TextInput>{props.todotext}</TextInput>
    )
};

export default ToDoBox;
