import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { caption } from '../../../utils/fonts';
import { colors } from '../../../utils/colors';

import OrderHistoryPrimary from '../../../assets/svg/OrderHistoryPrimary.svg';
import OrderHistorySecondary from '../../../assets/svg/OrderHistorySecondary.svg';

import HistoryPrimary from '../../../assets/svg/HistoryPrimary.svg';
import HistorySecondary from '../../../assets/svg/HistorySecondary.svg';

import HomePrimary from '../../../assets/svg/HomePrimary.svg';
import HomeSecondary from '../../../assets/svg/HomeSecondary.svg';

import ProfilePrimary from '../../../assets/svg/ProfilePrimary.svg';
import ProfileSecondary from '../../../assets/svg/ProfileSecondary.svg';

import NotificationPrimary from '../../../assets/svg/NotificationPrimary.svg';
import NotificationSecondary from '../../../assets/svg/NotificationSecondary.svg';
import Home from '../screens/home/Home';
import Order from '../screens/order/Order';
import Profile from '../../commonScreen/Profile';
import Notification from '../screens/notification/Notification';
import GlobalStyle from '../../GlobalStyle';
const Tab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  const size = 24
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          backgroundColor: colors.neutral100
        }
      }}
    >
      <Tab.Screen name="Home2" component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={[GlobalStyle.bottomTabContainer,
            {
              borderTopColor: focused ? colors.primary200 : colors.neutral100,
            }]}>
              <View style={GlobalStyle.bottomTabImageContainer}>
                {
                  focused ?
                    <HomePrimary width={size} height={size} />
                    :
                    <HomeSecondary width={size} height={size} />
                }
              </View>
              <Text style={[GlobalStyle.bottomTabtextStyle, {

                color: focused ? colors.primary200 : colors.neutral700,
                fontFamily: focused ? 'poppins.semibold' : 'poppins.regular',
              }]}>Home</Text>
            </View>
          )
        }}
      />
      <Tab.Screen name="Order" component={Order}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={[GlobalStyle.bottomTabContainer,
            {
              borderTopColor: focused ? colors.primary200 : colors.neutral100,

            }]}>
              <View style={{ marginTop: 1 }} />
              <View style={GlobalStyle.bottomTabImageContainer}>
                {
                  focused ?
                    <HistoryPrimary width={size} height={size} />
                    :
                    <HistorySecondary width={size} height={size} />
                }
              </View>
              <Text style={[GlobalStyle.bottomTabtextStyle, {
                color: focused ? colors.primary200 : colors.neutral700,
                fontFamily: focused ? 'poppins.semibold' : 'poppins.regular',
              }]}>Order History</Text>
            </View>
          )
        }}
      />
      <Tab.Screen name="Notification" component={Notification}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={[GlobalStyle.bottomTabContainer,
            { borderTopColor: focused ? colors.primary200 : colors.neutral100, }]}>
              <View style={GlobalStyle.bottomTabImageContainer}>
                {
                  focused ?
                    <NotificationPrimary width={size} height={size} />
                    :
                    <NotificationSecondary width={size} height={size} />
                }
              </View>
              <Text style={[GlobalStyle.bottomTabtextStyle, {
                color: focused ? colors.primary200 : colors.neutral700,
                fontFamily: focused ? 'poppins.semibold' : 'poppins.regular',
              }]}>Notification</Text>
            </View>
          )
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={[GlobalStyle.bottomTabContainer,
            { borderTopColor: focused ? colors.primary200 : colors.neutral100, }]}>
              <View style={GlobalStyle.bottomTabImageContainer}>
                <AntDesign name="user" size={24}
                  color={focused ? colors.primary200 : colors.neutral700}
                />
                {/* {
                  focused ?
                    <ProfilePrimary width={size} height={size} />
                    :
                    <ProfileSecondary width={size} height={size} />
                } */}
              </View>

              <Text style={[GlobalStyle.bottomTabtextStyle, {
                color: focused ? colors.primary200 : colors.neutral700,
                fontFamily: focused ? 'poppins.semibold' : 'poppins.regular',
              }]}>Profile</Text>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   alignSelf: 'stretch',
  //   justifyContent: 'center',
  //   backgroundColor: colors.neutral100,
  //   // backgroundColor: 'yellow',
  //   borderTopWidth: 1.5,
  // },
  // imageContainer: {
  //   width: 24, height: 24,
  //   //  backgroundColor: 'pink' 
  // },
  // textStyle: {
  //   marginTop: 1,
  //   fontSize: 10,
  // }
})