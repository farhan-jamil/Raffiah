import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import GlobalStyle from '../../GlobalStyle'
import LeftIconHeader from '../../../components/headers/LeftIconHeader'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import LabelInput from '../../../components/textInputs/LabelInput'
import ResetPasswordImage from '../../../assets/svg/ResetPassword.svg'
export default function ChangePassword({ navigation }) {
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <View style={GlobalStyle.rootContainer}>
            <LeftIconHeader
                title={'Change Password'}
                onPress={() => { navigation.goBack() }}
            />
            <ScrollView
                contentContainerStyle={GlobalStyle.scrollViewContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={GlobalStyle.screenFirstContainer}>
                    <View style={{ marginTop: hp(5), alignSelf: 'center' }} >
                        <ResetPasswordImage />
                    </View>
                    <View style={{ marginTop: hp(7) }} />
                    <LabelInput
                        label='Current Password'
                        placeholder='Enter Password'
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    // borderColor,
                    // errorText,
                    // editable

                    />
                    <View style={{ marginTop: hp(2) }} />
                    <LabelInput
                        label='Enter New Password'
                        placeholder='Enter new password'
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
                        placeholder='Re-enter your password'
                        value={confirmPassword}
                        onChangeText={(text) => setConfirmPassword(text)}
                        secureTextEntry={true}
                    // borderColor,
                    // errorText,
                    // editable

                    />

                </View>
                <View style={GlobalStyle.screenSecondContainer}>
                    <PrimaryButton
                        title='Update Password'
                        onPress={() => { navigation.navigate('Profile') }}
                    />
                </View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({})