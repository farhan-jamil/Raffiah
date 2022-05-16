import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import GlobalStyle from '../../../GlobalStyle'
import LeftIconHeader from '../../../../components/headers/LeftIconHeader'
import OrderItemTag from '../../../../components/cards/orderListCard/OrderItemTag'
import DisableLeftIconInput from '../../../../components/textInputs/disabledInputs/DisableLeftIconInput'
import Invoice from '../../../../components/Invoice'
import PrimaryButton from '../../../../components/buttons/PrimaryButton'
import { colors } from '../../../../utils/colors'
import { titleSmall } from '../../../../utils/fonts'
export default function DeliverDetail({ navigation, route }) {
    const itemData = route?.params?.itemData
    console.log('itemData', itemData)
    const [address, setAddress] = useState('Rawalpindi Punjab')
    const [deliverDate, setDeliverDate] = useState('Wed, Dec 12')
    const [phoneNumber, setPhoneNumber] = useState('0300-1234567')
    return (
        <View style={GlobalStyle.rootContainer}>
            <LeftIconHeader
                title={'Order Detail'}
                onPress={() => { navigation.goBack() }}
            />
            <ScrollView>
                <View style={GlobalStyle.screenFirstContainer}>
                    {/* <ScrollView> */}
                    {/* <View style={{ paddingHorizontal: wp(4) }}> */}
                    <View style={{ marginTop: hp(2) }} />
                    <OrderItemTag screenName={'DeliverDetail'} item={itemData} />
                    <View style={{ marginTop: hp(5) }} />

                    <DisableLeftIconInput
                        label={'Address'}
                        value={address}
                        icon={<Ionicons name={'location-sharp'} size={20}
                            color={colors.primary200}
                        />}
                    />
                    <View style={{ marginTop: hp(2) }} />
                    <DisableLeftIconInput
                        label={'Phone Number'}
                        value={phoneNumber}
                        icon={<MaterialCommunityIcons name={'cellphone'} size={20}
                            color={colors.primary200}
                        />}
                    />
                    <View style={{ marginTop: hp(2) }} />
                    <DisableLeftIconInput
                        label={'Delivery Date'}
                        value={deliverDate}
                        icon={<MaterialCommunityIcons name={'calendar-blank'} size={20}
                            color={colors.primary200}
                        />}
                    />
                    <View style={{ marginTop: hp(2) }} />
                    <Text style={{
                        fontFamily: 'poppins.medium',
                        fontSize: 14, color: colors.neutral900
                    }}>Payment Type</Text>
                    <View style={{ marginTop: hp(1) }} />

                    <Invoice />
                    {/* </ScrollView> */}
                </View>
                <View style={GlobalStyle.screenSecondContainer}>
                    {itemData.status === 'Active' ?
                        < PrimaryButton
                            title={'Cancel Order'}
                        />
                        : null
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})