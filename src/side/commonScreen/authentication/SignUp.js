import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../utils/colors'
import SimpleHeader from '../../../components/headers/SimpleHeader'
import LabelInput from '../../../components/textInputs/LabelInput'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import { RadioButton } from 'react-native-paper'
import BirthInput from '../../../components/textInputs/BirthInput'
import GlobalStyle from '../../GlobalStyle'
import UploadDp from '../../../components/UploadDp'
import { bodyLarge, bodySmall, subtitleSmall } from '../../../utils/fonts'
import Flower from '../../../assets/png/BgFlower.png'
import AppLogo from '../../../assets/svg/AppLogo.svg'
export default function SignUp({ navigation }) {
    const [radioValue, setRadioValue] = React.useState('first');

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [birthDate, setBirthDate] = useState()
    const [birthMonth, setBirthMonth] = useState('')
    const [birthYear, setBirthYear] = useState()
    return (
        <View style={{ flex: 1 }}>
            {/* <ScrollView
                // contentContainerStyle={GlobalStyle.scrollViewContainer}
                showsVerticalScrollIndicator={false}
            > */}


            <ImageBackground
                source={Flower}
                style={{
                    flex: 1, height: '100%',
                    width: '100%',
                    // position: 'relative',
                    // zIndex: -1,
                    // top: 0,
                    // left: 0 
                }}
            >
                <SimpleHeader
                    title='Sign Up'
                />
                <ScrollView
                    contentContainerStyle={GlobalStyle.scrollViewContainer}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{
                        flex: 1,
                        paddingHorizontal: wp(4),
                        background: 'transparent'
                        //  {backgroundColor: 'red', }
                    }}>
                        <View style={{
                            alignSelf: 'center',
                            // backgroundColor: 'red',
                            marginTop: wp(5)

                        }}>
                            <UploadDp
                                onPress={() => { console.warn('Upload Dp') }}
                            />
                        </View>
                        <View style={{ marginTop: hp(10) }} />
                        <Text style={{
                            color: colors.neutral900,
                            fontSize: 18, fontFamily: 'poppins.semibold',
                        }}>Sign Up</Text>
                        <View style={{ marginTop: hp(4) }} />

                        <LabelInput
                            label='First Name'
                            placeholder='Enter first name'
                            value={firstName}
                            onChangeText={(text) => setFirstName(text)}
                        // borderColor,
                        // errorText,
                        // editable

                        />
                        <View style={{ marginTop: hp(2) }} />
                        <LabelInput
                            label='Last Name'
                            placeholder='Enter last name'
                            value={lastName}
                            onChangeText={(text) => setLastName(text)}
                        // borderColor,
                        // errorText,
                        // editable

                        />
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
                        <View style={{ marginTop: hp(2) }} />
                        <LabelInput
                            label='Password'
                            placeholder='Enter strong password'
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true}
                        // borderColor,
                        // errorText,
                        // editable

                        />
                        <View style={{ marginTop: hp(2) }} />
                        <BirthInput
                            firstPlaceholder='Date'
                            secondPlaceholder='Month'
                            thirdPlaceholder='Year'
                            firstValue={birthDate}
                            secondValue={birthMonth}
                            thirdValue={birthYear}
                            onFirstChangeText={(text) => setBirthDate(text)}
                            onSecondChangeText={(text) => setBirthMonth(text)}
                            onThirdChangeText={(text) => setBirthYear(text)}
                            editable={true}
                        />
                        <View style={{ marginTop: hp(2) }} />

                        <RadioButton.Group
                            value={radioValue}
                            onValueChange={newValue => setRadioValue(newValue)}

                        >
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                            >
                                <TouchableOpacity style={styles.radioText}
                                    onPress={() => { setRadioValue('first') }}
                                >
                                    <RadioButton
                                        value="first"
                                        color={colors.primary200}
                                    />
                                    <Text style={[bodyLarge, { color: colors.neutral900 }]}>User</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.radioText}
                                    onPress={() => { setRadioValue('second') }}
                                >
                                    <RadioButton
                                        value="second"
                                        color={colors.primary200}
                                    />
                                    <Text style={[bodyLarge, { color: colors.neutral900 }]}>Driver</Text>
                                </TouchableOpacity>
                            </View>
                        </RadioButton.Group>
                        {/* <TouchableOpacity style={styles.radioText}
                            onPress={() => setChecked('first')}
                        >

                            <RadioButton
                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                            />
                            <Text style={[bodyLarge, { color: colors.neutral900 }]}>User</Text>
                        </TouchableOpacity>

                        <View style={styles.radioText}>
                            <RadioButton
                                // value="first"
                                // status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                            />
                            <Text style={[bodyLarge, { color: colors.neutral900 }]}>Driver</Text>
                        </View> */}

                    </View>
                </ScrollView>
                <View
                    // style={[GlobalStyle.authenticationSecondContainer,
                    // { zIndex: 1 }
                    style={{
                        // backgroundColor: 'green',
                        // backgroundColor: 'red',
                        paddingHorizontal: wp(4),
                        paddingVertical: hp(1)

                    }}>
                    <PrimaryButton
                        title='Sign Up'
                    />
                    {/* <View style={GlobalStyle.authenticationTextWrapperSecondCont}> */}
                    <View style={GlobalStyle.authenticationTextWrapperSecondCont}>
                        <Text style={[bodySmall, { color: colors.neutral900 }]}>Already have an account?</Text>
                        <TouchableOpacity
                            onPress={() => navigation.replace('SignIn')}
                        >
                            <Text style={[subtitleSmall, { color: colors.primary200 }]}> Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ImageBackground >
            {/* </ScrollView> */}
        </View >
    )
}

const styles = StyleSheet.create({
    radioText: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        // backgroundColor: 'yellow'
    }
})