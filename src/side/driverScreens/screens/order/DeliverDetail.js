import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import GlobalStyle from '../../../GlobalStyle'
import LeftIconHeader from '../../../../components/headers/LeftIconHeader'
import OrderItemTag from '../../../../components/cards/orderListCard/OrderItemTag'
import DisableLeftIconInput from '../../../../components/textInputs/disabledInputs/DisableLeftIconInput'
import Invoice from '../../../../components/Invoice'
import PrimaryButton from '../../../../components/buttons/PrimaryButton'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../../../../utils/colors'
export default function DeliverDetail({ navigation, route }) {
    const [address, setAddress] = useState('Rawalpindi Punjab')
    const [deliverDate, setDeliverDate] = useState('Wed, Dec 12')
    const screenName = route?.params?.screenName
    const itemData = route?.params?.itemData
    return (
        <View style={GlobalStyle.rootContainer}>
            <LeftIconHeader
                title={'Order Detail'}
                onPress={() => { navigation.goBack() }}
            />

            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flex: 1, paddingHorizontal: wp(4) }}
                >
                    {/* <View style={{ paddingHorizontal: wp(4) }}> */}
                    <View style={GlobalStyle.driverSideMarginTop} />
                    <OrderItemTag screenName={'DeliverDetail'} item={itemData} />
                    <View style={{ marginTop: hp(5) }} />

                    <DisableLeftIconInput
                        label={'Address'}
                        value={address}
                        icon={<Ionicons name={'location-sharp'} size={24}
                            color={colors.primary200}
                        />}
                    />
                    <View style={{ marginTop: hp(2) }} />
                    <DisableLeftIconInput
                        label={'Delivery Date'}
                        value={deliverDate}
                        icon={<MaterialCommunityIcons name={'calendar-blank'} size={24}
                            color={colors.primary200}
                        />}
                    />
                    <View style={{ marginTop: hp(2) }} />

                    <Invoice />
                </ScrollView>
            </View>
            <View style={GlobalStyle.screenSecondContainer}>
                <PrimaryButton
                    title={screenName === 'Active' ? 'Cancel Order' : 'Delivered'}
                    onPress={() => {
                        screenName === 'Active' ?
                            navigation.navigate('Order')
                            :
                            navigation.navigate('Order')
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})