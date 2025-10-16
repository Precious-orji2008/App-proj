import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Login} from '../screens/authentication/Login'
import {Menu} from '../components/Menu';
import {Dashboard} from '../screens/user/Dashboard'

const Stack = createNativeStackNavigator();

const AppNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Menu" component={Menu}/>
            <Stack.Screen name="Dashboard" component={Dashboard}/>
        </Stack.Navigator>
    )
    
}

export default AppNavigator;