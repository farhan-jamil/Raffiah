import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../../commonScreen/SplashScreen';
import OnBoarding from '../../commonScreen/onBoarding/OnBoarding'
import TestBoarding from '../../commonScreen/onBoarding/TestBoarding'
import SignIn from '../../commonScreen/authentication/SignIn'
import SignUp from '../../commonScreen/authentication/SignUp'
import VerifyEmail from '../../commonScreen/authentication/forgotPass/VerifyEmail'
import ConfirmCode from '../../commonScreen/authentication/forgotPass/ConfirmCode'
import ResetPassword from '../../commonScreen/authentication/forgotPass/ResetPassword'
// import Home from '../screens/home/Home'
import Product from '../screens/product/Product'
import ProductDescription from '../screens/product/ProductDescription'
import EditProfile from '../../commonScreen/profile/EditProfile'
import ChangePassword from '../../commonScreen/profile/ChangePassword'
import Notification from '../../userScreens/screens/notifications/Notification'
import BottomTabNavigator from './BottomTabNavigator';

import CheckoutItemDetail from '../../userScreens/screens/checkout/CheckoutItemDetail'
import Checkout from '../../userScreens/screens/checkout/Checkout'
import DeliverDetail from '../screens/product/DeliverDetail';
import Filter from '../screens/search/Filter';
import SearchList from '../screens/search/SearchList';
import ListingItems from '../screens/search/ListingItems';
import BidingItems from '../screens/biding/BidingItems';
import BidingDescription from '../screens/biding/BidingDescription';
import BidingProductDescription from '../screens/biding/BidingProductDescription';
import Favourite from '../screens/favourite/Favourite';
const Stack = createStackNavigator();

export default function UserStackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}

        >
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            {/* <Stack.Screen name="OnBoarding" component={OnBoarding} /> */}
            <Stack.Screen name="TestBoarding" component={TestBoarding} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />

            <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
            <Stack.Screen name="ConfirmCode" component={ConfirmCode} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />

            <Stack.Screen name="Home" component={BottomTabNavigator} />
            <Stack.Screen name="Favourite" component={Favourite} />
            {/* <Stack.Screen name="Home" component={BottomTabNavigator} /> */}
            <Stack.Screen name="Product" component={Product} />
            <Stack.Screen name="ProductDescription" component={ProductDescription} />

            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Checkout" component={Checkout} />
            <Stack.Screen name="CheckoutItemDetail" component={CheckoutItemDetail} />
            <Stack.Screen name="DeliverDetail" component={DeliverDetail} />
            <Stack.Screen name="SearchList" component={SearchList} />
            <Stack.Screen name="Filter" component={Filter} />
            <Stack.Screen name="ListingItems" component={ListingItems} />
            <Stack.Screen name="BidingItems" component={BidingItems} />
            <Stack.Screen name="BidingProductDescription" component={BidingProductDescription} />
            <Stack.Screen name="BidingDescription" component={BidingDescription} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})