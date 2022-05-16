import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import SplashImage from '../../assets/png/Splash.png'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
export default function SplashScreen({ navigation }) {
    setTimeout(() => {
        // navigation.replace('OnBoarding')
        navigation.replace('TestBoarding')
    }, 2000)
    return (
        <View style={{
            flex: 1,

        }}>
            <Image
                source={SplashImage}
                style={{
                    // width: '100%', height: '100%',flex:1
                    width: widthPercentageToDP(100), height: heightPercentageToDP(100), flex: 1
                }}
            // resizeMode="stretch"
            // resizeMode="contain"
            // resizeMode="cover"
            // resizeMode='center'

            />
        </View>
    )
}

const styles = StyleSheet.create({})