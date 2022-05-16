import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import GlobalStyle from '../../../GlobalStyle'
import PrimaryButton from '../../../../components/buttons/PrimaryButton'
import LabelInput from '../../../../components/textInputs/LabelInput'
import SimpleHeader from '../../../../components/headers/SimpleHeader'
import ForgotPassOne from '../../../../assets/svg/ForgotPassOne.svg'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { bodySmall } from '../../../../utils/fonts'
import { colors } from '../../../../utils/colors'
import Style from './Style'
export default function VerifyEmail({ navigation }) {
    const [email, setEmail] = useState('')
    return (
        <View style={GlobalStyle.rootContainer}>
            <SimpleHeader
                title='Forgot Password'
            />
            <ScrollView
                contentContainerStyle={GlobalStyle.scrollViewContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={GlobalStyle.forgetScreens1stContainer}>
                    <View style={Style.imageContainer}>

                        <ForgotPassOne
                            width={200}
                            height={200}
                        />
                    </View>
                    <View style={{ marginTop: hp(2) }} />
                    {/* <Text style={[bodySmall, { textAlign: 'center', color: colors.neutral700 }]}> */}
                    <Text style={Style.descriptionText}>
                        Enter your email for the verification process.
                        We will send 4 digits code to your email.
                    </Text>
                    <View style={{ marginTop: hp(2) }} />
                    <LabelInput
                        label='Email Address'
                        placeholder='Enter email address'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    // borderColor,
                    // errorText,
                    // editable

                    />
                </View>
                <View style={GlobalStyle.forgetScreens2ndContainer}>
                    <PrimaryButton
                        title='Send'
                        // onPress={() => { console.warn('Verify Email') }}
                        onPress={() => { navigation.navigate('ConfirmCode') }}
                    />
                </View>
            </ScrollView >
        </View >
    )
}

const styles = StyleSheet.create({})