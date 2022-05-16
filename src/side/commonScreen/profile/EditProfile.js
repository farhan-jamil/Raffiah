import { StyleSheet, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import GlobalStyle from '../../GlobalStyle'
import LeftIconHeader from '../../../components/headers/LeftIconHeader'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import UploadDp from '../../../components/UploadDp'
import LabelInput from '../../../components/textInputs/LabelInput'
import BirthInput from '../../../components/textInputs/BirthInput'
import DisableLabelInput from '../../../components/textInputs/disabledInputs/DisableLabelInput'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import ProfileImg from '../../../assets/png/person.jpg'
import { colors } from '../../../utils/colors'
export default function EditProfile({ navigation }) {
    const [firstName, setFirstName] = useState('John')
    const [lastName, setLastName] = useState('Alex')
    const [email, setEmail] = useState('John@yahoo.com')
    const [birthDate, setBirthDate] = useState('20')
    const [birthMonth, setBirthMonth] = useState('March')
    const [birthYear, setBirthYear] = useState('2000')
    return (
        <View style={GlobalStyle.rootContainer}>
            <LeftIconHeader title="Edit Profile"
                onPress={() => { navigation.goBack() }}
            />
            <ScrollView
                contentContainerStyle={GlobalStyle.scrollViewContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={GlobalStyle.screenFirstContainer}>
                    <View style={{ marginTop: hp(5) }} />
                    <TouchableOpacity
                        style={styles.uploadImageContainer}
                        activeOpacity={0.8}
                    >
                        <ImageBackground
                            source={ProfileImg}
                            style={styles.imgBgStyle}
                            imageStyle={{ borderRadius: 80 / 2, opacity: 0.7, }}
                        >
                            <FontAwesome name="camera"
                                size={24} color={colors.neutral50}
                            />

                        </ImageBackground>
                    </TouchableOpacity>
                    {/* <UploadDp /> */}
                    <View style={{ marginTop: hp(2) }} />
                    <LabelInput
                        label='First Name'
                        // placeholder='Enter first name'
                        value={firstName}
                        onChangeText={(text) => setFirstName(text)}
                    // borderColor,
                    // errorText,
                    // editable

                    />
                    <View style={{ marginTop: hp(2) }} />
                    <LabelInput
                        label='Last Name'
                        // placeholder='Enter last name'
                        value={lastName}
                        onChangeText={(text) => setLastName(text)}
                    // borderColor,
                    // errorText,
                    // editable

                    />
                    <View style={{ marginTop: hp(2) }} />
                    <DisableLabelInput
                        label='Email Address'
                        // placeholder='Enter email address'
                        value={email}
                    />

                    <View style={{ marginTop: hp(2) }} />
                    <BirthInput
                        editable={true}
                        // firstPlaceholder='Date'
                        // secondPlaceholder='Month'
                        // thirdPlaceholder='Year'
                        firstValue={birthDate}
                        secondValue={birthMonth}
                        thirdValue={birthYear}
                        onFirstChangeText={(text) => setBirthDate(text)}
                        onSecondChangeText={(text) => setBirthMonth(text)}
                        onThirdChangeText={(text) => setBirthYear(text)}
                    />
                </View>
                <View style={GlobalStyle.screenSecondContainer}>
                    <PrimaryButton
                        title='Update Profile'
                        // onPress={() => { console.warn('Update Profile') }}
                        onPress={() => { navigation.navigate('Profile') }}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    uploadImageContainer: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        elevation: 3,
        shadowColor: colors.neutral900,
        alignSelf: 'center',
        backgroundColor: colors.neutral50
    },
    imgBgStyle: {
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    }

})