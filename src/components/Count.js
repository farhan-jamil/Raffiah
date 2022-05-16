import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import Entypo from 'react-native-vector-icons/Entypo'
import { subtitleLarge } from '../utils/fonts'
export default function Count() {
    return (

        <View style={[styles.container]}>
            <TouchableOpacity>
                <Entypo name='minus' size={20} color={colors.neutral900} />
            </TouchableOpacity>
            <View style={{ marginRight: 12 }} />
            <Text style={[subtitleLarge, { color: colors.success500 }]}>1</Text>
            <View style={{ marginRight: 12 }} />
            <TouchableOpacity>
                <Entypo name='plus' size={20} color={colors.neutral900} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.success500,
        flexDirection: 'row',
        padding: 4,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,

    }
})