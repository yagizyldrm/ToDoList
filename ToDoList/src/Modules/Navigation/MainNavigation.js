import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ToDoNavigation from './ToDoNavigation';
import AuthNavigation from './AuthNavigation';

const MainNavigation = (props) => {
  
    const isLoggedInUser = false;
   
    return (
        <NavigationContainer>
            {
                isLoggedInUser ?
                <ToDoNavigation />
                :
                <AuthNavigation />
            }
        </NavigationContainer>
    );
};

export default MainNavigation;

