import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home'
import Cart from '../screens/cart/Cart'
import Profile from '../../commonScreen/Profile'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { caption } from '../../../utils/fonts';
import { colors } from '../../../utils/colors';
import Search from '../screens/search/Search';
import Order from '../screens/order/Order';
import HomePrimary from '../../../assets/svg/HomePrimary.svg';
import HomeSecondary from '../../../assets/svg/HomeSecondary.svg';
import SearchPrimary from '../../../assets/svg/SearchPrimary.svg';
import SearchSecondary from '../../../assets/svg/SearchSecondary.svg';
import CartPrimary from '../../../assets/svg/CartPrimary.svg';
import CartSecondary from '../../../assets/svg/CartSecondary.svg';
import OrderCartPrimary from '../../../assets/svg/OrderCartPrimary.svg';
import OrderCartSecondary from '../../../assets/svg/OrderCartSecondary.svg';
import ProfilePrimary from '../../../assets/svg/ProfilePrimary.svg';
import ProfileSecondary from '../../../assets/svg/ProfileSecondary.svg';
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
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen name="BottomHome" component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={[GlobalStyle.bottomTabContainer,
            { borderTopColor: focused ? colors.primary200 : colors.neutral100, }]}>
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
      <Tab.Screen name="Search" component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={[GlobalStyle.bottomTabContainer,
            { borderTopColor: focused ? colors.primary200 : colors.neutral100, }]}>
              <View style={GlobalStyle.bottomTabImageContainer}>
                {
                  focused ?
                    <SearchPrimary width={size} height={size} />
                    :
                    <SearchSecondary width={size} height={size} />
                }
              </View>
              <Text style={[GlobalStyle.bottomTabtextStyle, {
                color: focused ? colors.primary200 : colors.neutral700,
                fontFamily: focused ? 'poppins.semibold' : 'poppins.regular',
              }]}>Search</Text>
            </View>
          )
        }}
      />
      <Tab.Screen name="Cart" component={Cart}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={[GlobalStyle.bottomTabContainer,
            { borderTopColor: focused ? colors.primary200 : colors.neutral100, }]}>
              <View style={GlobalStyle.bottomTabImageContainer}>
                {
                  focused ?
                    <CartPrimary width={size} height={size} />
                    :
                    <CartSecondary width={size} height={size} />
                }
              </View>
              <Text style={[GlobalStyle.bottomTabtextStyle, {
                color: focused ? colors.primary200 : colors.neutral700,
                fontFamily: focused ? 'poppins.semibold' : 'poppins.regular',
              }]}>Cart</Text>
            </View>
          )
        }}
      />
      <Tab.Screen name="Order" component={Order}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={[GlobalStyle.bottomTabContainer,
            { borderTopColor: focused ? colors.primary200 : colors.neutral100, }]}>
              <View style={GlobalStyle.bottomTabImageContainer}>
                {
                  focused ?
                    <OrderCartPrimary width={size} height={size} />
                    :
                    <OrderCartSecondary width={size} height={size} />
                }
              </View>
              <Text style={[GlobalStyle.bottomTabtextStyle, {
                color: focused ? colors.primary200 : colors.neutral700,
                fontFamily: focused ? 'poppins.semibold' : 'poppins.regular',
              }]}>Order</Text>
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
{/* <Tab.Screen name="BottomHome" component={Home}
options={{
  tabBarIcon: ({ focused, color, size }) => (
    <View style={[styles.container,
    { borderTopColor: focused ? colors.primary200 : colors.neutral100, }]}>

      <AntDesign name="home" size={24}
        color={focused ? colors.primary200 : colors.neutral700}
      />
      <Text style={[caption, {
        color: focused ? colors.primary200 : colors.neutral700
      }]}>Home</Text>
    </View>
  )
}}
/>
<Tab.Screen name="Search" component={Search}
options={{
  tabBarIcon: ({ focused, color, size }) => (
    <View style={[styles.container,
    { borderTopColor: focused ? colors.primary200 : colors.neutral100, }]}>
      <AntDesign name="search1" size={24}
        color={focused ? colors.primary200 : colors.neutral700}
      />
      <Text style={[caption, {
        color: focused ? colors.primary200 : colors.neutral700
      }]}>Search</Text>
    </View>
  )
}}
/>
<Tab.Screen name="Cart" component={Cart}
options={{
  tabBarIcon: ({ focused, color, size }) => (
    <View style={[styles.container,
    { borderTopColor: focused ? colors.primary200 : colors.neutral100, }]}>
      <AntDesign name="shoppingcart" size={24}
        color={focused ? colors.primary200 : colors.neutral700}
      />
      <Text style={[caption, {
        color: focused ? colors.primary200 : colors.neutral700
      }]}>Cart</Text>
    </View>
  )
}}
/>
<Tab.Screen name="Order" component={Order}
options={{
  tabBarIcon: ({ focused, color, size }) => (
    <View style={[styles.container,
    { borderTopColor: focused ? colors.primary200 : colors.neutral100, }]}>
      <AntDesign name="shoppingcart" size={24}
        color={focused ? colors.primary200 : colors.neutral700}
      />
      <Text style={[caption, {
        color: focused ? colors.primary200 : colors.neutral700
      }]}>Order</Text>
    </View>
  )
}}
/>
<Tab.Screen name="Profile" component={Profile}
options={{
  tabBarIcon: ({ focused, color, size }) => (
    <View style={[styles.container,
    { borderTopColor: focused ? colors.primary200 : colors.neutral100, }]}>
      <AntDesign name="user" size={24}
        color={focused ? colors.primary200 : colors.neutral700}
      />
      <Text style={[caption, {
        color: focused ? colors.primary200 : colors.neutral700
      }]}>Profile</Text>
    </View>
  )
}}
/> */}