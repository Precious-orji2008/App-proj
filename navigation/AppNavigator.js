import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Login} from '../screens/authentication/Login'
import {Dashboard} from '../screens/user/Landlord/Dashboard'
import {Profile} from '../screens/user/Landlord/Profile'
import {EditProfile} from '../screens/user/Landlord/EditUser'
import { Settings } from "../screens/user/Landlord/Settings";
import { MyProperty } from "../screens/user/Landlord/My Property";
import { PropertyDetails } from "../screens/user/Landlord/PropertyDetails";
import { TenantDashboard } from "../screens/user/Tenant/TenantDashboard";
import { TenantProfile } from "../screens/user/Tenant/TenantProfile";
import { TenantSettings } from "../screens/user/Tenant/TenantSettings";
import { TenantEditProfile } from "../screens/user/Tenant/TenantEditUser";
import { TenantProperty } from "../screens/user/Tenant/TenantProperty";

const Stack = createNativeStackNavigator();

const AppNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Dashboard" component={Dashboard}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="EditProfile" component={EditProfile}/>
            <Stack.Screen name="Settings" component={Settings}/>
            <Stack.Screen name="MyProperty" component={MyProperty}/>
            <Stack.Screen name="PropertyDetails" component={PropertyDetails}/>
            <Stack.Screen name="TenantDashboard" component={TenantDashboard}/>
            <Stack.Screen name="TenantProfile" component={TenantProfile}/>
            <Stack.Screen name="TenantSettings" component={TenantSettings}/>
            <Stack.Screen name="TenantEditProfile" component={TenantEditProfile}/>
            <Stack.Screen name="TenantProperty" component={TenantProperty}/>
        </Stack.Navigator>
    )
    
}

export default AppNavigator;