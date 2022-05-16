import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import OrderDetail from '../screens/order/OrderDetail';
import DeliverDetail from '../screens/order/DeliverDetail';
import BottomTabNavigator from './BottomTabNavigator';
import SignIn from '../../commonScreen/authentication/SignIn';
import SignUp from '../../commonScreen/authentication/SignUp';
import VerifyEmail from '../../commonScreen/authentication/forgotPass/VerifyEmail';
import ConfirmCode from '../../commonScreen/authentication/forgotPass/ConfirmCode';
import ResetPassword from '../../commonScreen/authentication/forgotPass/ResetPassword';
import EditProfile from '../../commonScreen/profile/EditProfile';
import ChangePassword from '../../commonScreen/profile/ChangePassword';
const Stack = createStackNavigator();

export default function DriverStackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >   
        
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />

            <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
            <Stack.Screen name="ConfirmCode" component={ConfirmCode} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            {/* <Stack.Screen name="Home" component={BottomTabNavigator} /> */}
            <Stack.Screen name="Home" component={BottomTabNavigator} />
            <Stack.Screen name="OrderDetail" component={OrderDetail} />
            <Stack.Screen name="DeliverDetail" component={DeliverDetail} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})