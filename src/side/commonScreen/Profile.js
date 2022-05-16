import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import GlobalStyle from '../GlobalStyle'
import SimpleHeader from '../../components/headers/SimpleHeader'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import ProfileImg from '../../assets/png/person.jpg'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../../utils/colors'

import ProfileTabIcon from '../../components/profileTabs/ProfileTabIcon'
import ProfileTab from '../../components/profileTabs/ProfileTab'
import { bodyLarge, subtitleLarge } from '../../utils/fonts'
export default function Profile({ navigation }) {

    return (
        // <View style={[GlobalStyle.rootContainer, { backgroundColor: 'white' }]}>
        <View style={GlobalStyle.rootContainer}>
            <SimpleHeader
                title={'Profile'}
            />

            <View style={{ marginTop: hp(5), paddingLeft: wp(4) }} >
                <View style={{ flexDirection: 'row' }}>
                    <View
                        style={{
                            width: 80,
                            height: 80,
                            borderRadius: 80 / 2,
                            elevation: 3,
                            shadowColor: colors.neutral900

                        }}
                    >
                        <Image
                            source={ProfileImg}
                            style={{
                                width: 80,
                                height: 80,
                                borderRadius: 80 / 2,

                            }}
                        />
                    </View>
                    <View style={{ marginLeft: wp(4), justifyContent: 'center' }}>
                        <Text style={[subtitleLarge, { color: colors.neutral900 }]}>John Alex</Text>
                        <Text style={[bodyLarge, { color: colors.neutral700 }]}>User</Text>
                    </View>
                </View>
                {/* <ProfileImage /> */}
            </View>
            <View style={{ marginTop: hp(5) }} />
            <ProfileTabIcon
                icon={<FontAwesome5 name='pen' size={16} color={colors.neutral50} />}
                title={'Edit Profile'}
                // onPress={() => { console.warn('clicked') }}
                onPress={() => { navigation.navigate('EditProfile') }}
            />
            <ProfileTabIcon
                icon={<MaterialIcons name='vpn-key' size={16} color={colors.neutral50} />}
                title={'Change Password'}
                onPress={() => { navigation.navigate('ChangePassword') }}
            // onPress={() => { console.warn('clicked') }}
            />
            <View style={{ marginTop: hp(1) }} />
            <ProfileTab
                icon={<AntDesign name='logout' size={16}
                    style={{ transform: [{ rotate: '270deg' }] }}
                    color={colors.error500}
                />}
                title={'Logout'}

                onPress={() => { navigation.replace('SignIn') }}
            />


        </View >
    )
}

const styles = StyleSheet.create({})