import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import Logistic from '../../../../assets/svg/Logistics.svg'
import PayPal from '../../../../assets/svg/Paypal.svg'
import MasterCard from '../../../../assets/svg/Mastercard.svg'

import { colors } from '../../../../utils/colors'
import { titleSmall } from '../../../../utils/fonts'

import GlobalStyle from '../../../GlobalStyle'
import InvoiceWithButton from '../../../../components/InvoiceWithButton'
import Input from '../../../../components/textInputs/Input'
import PaymentType from '../../../../components/PaymentType'
import LeftIconHeader from '../../../../components/headers/LeftIconHeader'
import { ScrollView } from 'react-native-gesture-handler';
export default function Checkout({ navigation }) {
    const [contactInfo, setContactInfo] = useState('')
    const [address, setAddress] = useState('')
    const [deliveryTime, setDeliveryTime] = useState()
    const [date, setDate] = useState(new Date(1598051730000));
    const [paymentMethod, setPaymentMethod] = useState('')
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDeliveryTime(moment(currentDate).format("h:mm a"));
        // console.log('currentDate', moment(currentDate).format("h:mm a"))
    };

    const showTimepicker = () => {
        setShow(true);
    };

    return (
        <View style={[GlobalStyle.rootContainer, 
        // { backgroundColor: 'yellow' }
        ]}>
            <LeftIconHeader
                title='Checkout'
                onPress={() => { navigation.goBack() }}
            />
            <ScrollView style={{ 
                // backgroundColor: 'green'
             }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: hp(3)
                }}
            >
                <View style={[GlobalStyle.screenFirstContainer,
                    //  { backgroundColor: 'red' }
                ]}>
                    <View style={{ marginTop: hp(2) }}>
                        <Text style={[titleSmall,
                            { color: colors.neutral900 }]}>Payment</Text>
                        <View style={{ marginTop: hp(1) }} />
                        <Input
                            title='Contact Info'
                            placeholder='Enter Contact Info'
                            value={contactInfo}
                            onChangeText={(text) => setContactInfo(text)}

                        />
                        <View style={{ marginTop: hp(1) }} />
                        <Input
                            title='Delivery address'
                            placeholder='Enter your Address'
                            value={address}
                            onChangeText={(text) => setAddress(text)}

                        />
                        <View style={{ marginTop: hp(1) }} />
                        <Input
                            title='Delivery time'
                            placeholder='Select your Time'
                            editable={false}
                            value={deliveryTime}
                            onPress={showTimepicker}
                        />

                    </View>
                    <View style={{ marginTop: hp(2) }} />
                    <Text style={[titleSmall,
                        { color: colors.neutral900 }]}>Payment Type</Text>
                    <View style={{ marginTop: hp(1) }} />
                    <View style={styles.paymentCard}>
                        <PaymentType
                            icon={
                                <Logistic
                                    width={80}
                                    height={80}
                                />}
                            onPress={() => setPaymentMethod('logistic')}
                        />
                        <PaymentType
                            icon={
                                <PayPal
                                    width={80}
                                    height={80}
                                />}
                            onPress={() => setPaymentMethod('paypal')}
                        />
                        <PaymentType
                            icon={
                                <MasterCard
                                    width={80}
                                    height={80}
                                />}
                            onPress={() => setPaymentMethod('mastercard')}
                        />

                    </View>
                    <View style={{ marginTop: hp(2) }} >
                        <InvoiceWithButton
                            onPress={() => { navigation.navigate('CheckoutItemDetail') }}
                        />
                    </View>
                </View>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        // value={date}
                        mode={'time'}
                        // is24Hour={true}
                        onChange={onChange}
                    />
                )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    paymentCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.neutral50,
        paddingVertical: 16,
        justifyContent: 'space-around',
        elevation: 2,
        shadowColor: colors.neutral900,
        borderRadius: 5,
    }
})