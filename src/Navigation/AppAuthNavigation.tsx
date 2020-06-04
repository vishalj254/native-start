import React from 'react';
import { View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import AppTabNavigation from './AppTabNavigation';



export default function AppAuthNavigation(){
    const Auth=createStackNavigator();
    return(
           <Auth.Navigator headerMode={'none'}>
                <Auth.Screen  name={'AppTab'} component={AppTabNavigation}/>
            </Auth.Navigator>
  
    )
}