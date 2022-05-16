import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { Divider } from 'react-native-paper'
import { bodySmall, subtitleSmall } from '../utils/fonts'
import PrimaryButton from './buttons/PrimaryButton'
export default function InvoiceWithButton({ onPress }) {
    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <Text style={styles.leftText}>Sub Total</Text>
                <Text style={styles.rightText}>$123</Text>
            </View>
            <View style={{ marginTop: 8 }} />
            <View style={styles.textWrapper}>
                <Text style={styles.leftText}>Shipping</Text>
                <Text style={styles.rightText}>$30</Text>
            </View>
            <View style={{ marginTop: 8 }} />
            <View style={styles.textWrapper}>
                <Text style={styles.leftText}>Sale Tax</Text>
                <Text style={styles.rightText}>$5.70</Text>
            </View>
            <View style={{ marginTop: 8 }} />
            <Divider
                style={{ backgroundColor: colors.neutral600, height: 1 }}
            />
            <View style={{ marginTop: 8 }} />
            <View style={styles.textWrapper}>
                <Text style={[styles.leftText, { color: colors.neutral900 }]}>Total Payment</Text>
                <Text style={[styles.rightText, { color: colors.primary200 }]}>$160</Text>
            </View>
            <View style={{ marginTop: 16 }} />
            <PrimaryButton
                title="Place Order"
                onPress={onPress}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        elevation: 2,
        shadowColor: colors.neutral900,
        backgroundColor: colors.neutral50,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 5,
    },
    textWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    leftText: {
        fontFamily: 'poppins.medium',
        fontSize: 14
    },
    rightText: {
        fontFamily: 'poppins.regular',
        fontSize: 14,
        color: colors.neutral900
    },

})