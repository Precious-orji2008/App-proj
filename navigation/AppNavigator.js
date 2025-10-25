import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Login} from '../screens/authentication/Login'
import {Menu} from '../components/Menu';
import {Dashboard} from '../screens/user/Dashboard'
import {Profile} from '../screens/user/Profile'
import {EditProfile} from '../screens/user/EditUser'
import {Settings} from '../screens/user/Settings'

const Stack = createNativeStackNavigator();

const AppNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Menu" component={Menu}/>
            <Stack.Screen name="Dashboard" component={Dashboard}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="EditProfile" component={EditProfile}/>
            <Stack.Screen name="Settings" component={Settings}/>
        </Stack.Navigator>
    )
    
}

export default AppNavigator;