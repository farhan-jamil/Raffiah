import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import PrimaryButton from '../buttons/PrimaryButton'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { subtitleLarge } from '../../utils/fonts'

export default function CheckoutCard({ onPress }) {
    return (
        <View style={{
            // backgroundColor: colors.neutral100,
            backgroundColor:colors.neutral50,
            elevation: 2,
            shadowColor: colors.neutral900,
            paddingHorizontal: wp(4),
            paddingVertical: hp(2)
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={[subtitleLarge, { color: colors.neutral900 }]}>Total</Text>
                <Text style={[subtitleLarge, { color: colors.primary200 }]}>$123</Text>
            </View>
            <View style={{ marginTop: hp(3) }} />
            <PrimaryButton title={'Checkout'}
                onPress={onPress}
            />
        </View>
    )
}

const styles = StyleSheet.create({})