import { StyleSheet, View, ScrollView, Text } from 'react-native'
import React, { useState } from 'react'
import GlobalStyle from '../../../GlobalStyle'
import PrimaryButton from '../../../../components/buttons/PrimaryButton'
import LabelInput from '../../../../components/textInputs/LabelInput'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import LeftIconHeader from '../../../../components/headers/LeftIconHeader'
import ForgotPassThree from '../../../../assets/svg/ForgotPassThree.svg'
import { bodySmall } from '../../../../utils/fonts'
import { colors } from '../../../../utils/colors'
import Style from './Style'
export default function ResetPassword({ navigation }) {
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    return (
        <View style={GlobalStyle.rootContainer}>
            <LeftIconHeader
                title='Forgot Password'
                onPress={() => { navigation.goBack() }}
            />
            <ScrollView
                contentContainerStyle={GlobalStyle.scrollViewContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={GlobalStyle.forgetScreens1stContainer}>
                    <View style={Style.imageContainer}>

                        <ForgotPassThree
                            width={200}
                            height={200}
                        />
                    </View>
                    <Text style={Style.descriptionText}>
                        Please Enter Your New Password
                    </Text>
                    <View style={{ marginTop: hp(2) }} />
                    <LabelInput
                        label='Enter New Password'
                        placeholder='Enter New Password'
                        value={newPassword}
                        onChangeText={(text) => setNewPassword(text)}
                        secureTextEntry={true}
                    // borderColor,
                    // errorText,
                    // editable

                    />
                    <View style={{ marginTop: hp(2) }} />
                    <LabelInput
                        label='Confirm Password'
                        placeholder='Re-enter your Password'
                        value={confirmPassword}
                        onChangeText={(text) => setConfirmPassword(text)}
                        secureTextEntry={true}
                    // borderColor,
                    // errorText,
                    // editable

                    />
                </View>
                <View style={GlobalStyle.forgetScreens2ndContainer}>
                    <PrimaryButton
                        title='Update'
                        onPress={() => { navigation.replace('SignIn') }}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})