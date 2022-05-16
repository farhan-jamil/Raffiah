import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../utils/colors'
import SimpleHeader from '../../../components/headers/SimpleHeader'
import LabelInput from '../../../components/textInputs/LabelInput'
import { heightPercentageToDP, heightPercentageToDP as hp, widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import { bodySmall, subtitleSmall, titleLarge } from '../../../utils/fonts'
import GlobalStyle from '../../GlobalStyle'
import Flower from '../../../assets/png/BgFlower.png'
import AppLogo from '../../../assets/svg/AppLogo.svg'
export default function SignIn({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style={{ flex: 1 }}>

            <ScrollView
                contentContainerStyle={GlobalStyle.scrollViewContainer}
                showsVerticalScrollIndicator={false}
            >
                <ImageBackground
                    source={Flower}
                    style={{ flex: 1, }}
                >
                    <SimpleHeader
                        title='Sign In'
                    />
                    <View style={{ paddingHorizontal: wp(4) }}>
                        <View style={{
                            alignSelf: 'center',
                            // backgroundColor: 'red',
                            marginTop: widthPercentageToDP(5)
                            // width: widthPercentageToDP(60), height: heightPercentageToDP(40)
                        }}>
                            <AppLogo
                                width={110}
                                height={110}
                            />
                        </View>
                        <View style={{ marginTop: hp(10) }} />
                        <Text style={{
                            color: colors.neutral900,
                            fontSize: 18, fontFamily: 'poppins.semibold',
                        }}>Sign In</Text>
                         {/* }}>Welcome back</Text> */}
                        <View style={{ marginTop: hp(4) }} />
                        <LabelInput
                            label='Email Address'
                            placeholder='Enter email address'
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        // borderColor,
                        // errorText,
                        />
                        <View style={{ marginTop: hp(2) }} />
                        <LabelInput
                            label='Password'
                            placeholder='Enter your password'
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true}
                        // borderColor,
                        // errorText,
                        />
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('VerifyEmail') }}
                            activeOpacity={0.8}
                        >
                            <Text style={[subtitleSmall, styles.forgot]}>Forgot password?</Text>
                        </TouchableOpacity>
                        <View style={{ marginTop: hp(7) }}>
                            <PrimaryButton
                                title='Sign In'
                                // onPress={() => { console.warn('Sign In') }}
                                onPress={() => { navigation.replace('Home') }}
                            />
                            <View style={GlobalStyle.authenticationTextWrapperSecondCont}>
                                <Text style={[bodySmall, { color: colors.neutral900 }]}>Don't have an account?</Text>
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    // onPress={() => { console.warn('Sign Up') }}
                                    onPress={() => navigation.navigate('SignUp')}
                                >
                                    <Text style={[subtitleSmall, { color: colors.primary200 }]}> Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </ImageBackground >
            </ScrollView>
            {/* <ScrollView
                contentContainerStyle={GlobalStyle.scrollViewContainer}
            >
                <View style={GlobalStyle.authenticationFirstContainer}>
                    <View style={{ marginTop: hp(15) }} />
                    <Text style={[titleLarge,
                        { color: colors.neutral900 }]}>Welcome back</Text>
                    <View style={{ marginTop: hp(10) }} />
                    <LabelInput
                        label='Email Address'
                        placeholder='Enter email address'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    // borderColor,
                    // errorText,
                    // editable

                    />
                    <View style={{ marginTop: hp(2) }} />
                    <LabelInput
                        label='Password'
                        placeholder='Enter your password'
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    // borderColor,
                    // errorText,
                    // editable

                    />
                    <Text style={[subtitleSmall, styles.forgot]}>Forgot password?</Text>
                </View>
                <View style={GlobalStyle.authenticationSecondContainer}>
                    <PrimaryButton
                        title='Sign In'
                        // onPress={() => { console.warn('Sign In') }}
                        onPress={() => { navigation.navigate('Home') }}
                    />
                    <TouchableOpacity style={GlobalStyle.authenticationTextWrapperSecondCont}
                        activeOpacity={0.5}
                        // onPress={() => { console.warn('Sign Up') }}
                        onPress={() => navigation.navigate('SignUp')}
                    >
                        <Text style={[bodySmall, { color: colors.neutral900 }]}>Don't have an account?</Text>
                        <Text style={[subtitleSmall, { color: colors.primary200 }]}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView> */}
        </View >
    )
}

const styles = StyleSheet.create({

    forgot: {
        textAlign: 'right', marginTop: hp(2),
        color: colors.neutral900
    },

})