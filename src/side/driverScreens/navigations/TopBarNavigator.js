import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Active from '../screens/order/Active';
import Deliver from '../screens/order/Deliver';
import { colors } from '../../../utils/colors';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { caption } from '../../../utils/fonts';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Home from '../screens/home/Home';
import Cancel from '../screens/order/Cancel';
const Tab = createMaterialTopTabNavigator();
export default function TopBarNavigator() {
    let size = 30
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarAllowFontScaling: true,
                headerShown: false,
                tabBarShowLabel: true,

                tabBarStyle: {
                    backgroundColor: colors.neutral100,
                    elevation: 0,
                },

                tabBarIndicatorStyle: {
                    borderBottomColor: colors.primary200,
                    borderBottomWidth: 1,
                },
            }}
        >
            <Tab.Screen name="Active" component={Active}

                options={{
                    title: 'Active',

                    tabBarLabel: ({ focused, color, }) => (
                        // console.log('///', focused, color),
                        <View style={{
                            // backgroundColor: 'orange',
                            // width: widthPercentageToDP(50),
                        }}>

                            <Text style={{
                                fontFamily: focused ?
                                    'poppins.semibold' : 'poppins.regular',
                                fontSize: 16,
                                color: focused ? colors.primary200 : colors.neutral700,
                                textAlign: 'center',
                            }}>Active </Text>
                        </View>

                    ),

                }}


            />
            <Tab.Screen name="Deliver" component={Deliver}

                options={{

                    tabBarLabel: ({ focused, color, }) => (
                        <View style={{
                            // backgroundColor: 'yellow',
                            // width: widthPercentageToDP(50),

                        }}>

                            <Text style={{
                                fontFamily: focused ?
                                    'poppins.semibold' : 'poppins.regular',
                                fontSize: 16,
                                color: focused ? colors.primary200 : colors.neutral700,
                                textAlign: 'center'

                            }}>Delivered </Text>
                        </View>
                    ),
                }}
            />
            {/* <Tab.Screen name="Cancel" component={Cancel}

                options={{

                    tabBarLabel: ({ focused, color, }) => (
                        <View style={{
                            // backgroundColor: 'yellow',
                            // width: widthPercentageToDP(50),

                        }}>

                            <Text style={{
                                fontFamily: focused ?
                                    'poppins.semibold' : 'poppins.regular',
                                fontSize: 16,
                                color: focused ? colors.primary200 : colors.neutral700,
                                textAlign: 'center'

                            }}>Cancelled </Text>
                        </View>
                    ),
                }}
            /> */}
        </Tab.Navigator >
    )
}
const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     alignItems: 'center',
    //     alignSelf: 'stretch',
    //     justifyContent: 'center',
    //     backgroundColor: colors.neutral100,
    //     // backgroundColor: 'yellow',
    //     borderTopWidth: 2,
    // },
})