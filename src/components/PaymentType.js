import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'

export default function PaymentType({ icon, onPress, }) {
    console.log('PaymentType onPress', onPress.id)
    return (
        <TouchableOpacity style={{
            paddingHorizontal: 8,
            borderRadius: 8,
            backgroundColor: colors.neutral50,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 2,
            shadowColor: colors.neutral900
        }}
            activeOpacity={0.8}
            onPress={onPress}
        >
            {icon}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})