import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ToDoNavigation from './ToDoNavigation';


const MainNavigation = (props) => {
    return (
        <NavigationContainer>
            <ToDoNavigation />
        </NavigationContainer>
    );
};

export default MainNavigation;
