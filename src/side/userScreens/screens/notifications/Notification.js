import { StyleSheet, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import GlobalStyle from '../../../GlobalStyle'
import LeftIconHeader from '../../../../components/headers/LeftIconHeader'
import NotificationCard from '../../../../components/notifications/NotificationCard'
export default function Notification({ navigation }) {
    return (
        <View style={GlobalStyle.rootContainer}>
            <LeftIconHeader
                title={'Notification'}
                onPress={() => { navigation.goBack() }}
            />
            <NotificationCard />
        </View >
    )
}

const styles = StyleSheet.create({})