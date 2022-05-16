import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../utils/colors';
import { subtitleLarge } from '../../utils/fonts';
import Style from './Style';
export default function PrimarySmallButton({ title, onPress }) {
    return (
        <TouchableOpacity
            style={{
                elevation: 2,
                shadowColor: colors.neutral900,

            }}
            onPress={onPress}
            activeOpacity={0.9}
        >
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={[colors.secondary200, colors.primary200]}
                // style={styles.linearGradient
                style={Style.container}
            >

                <Text style={{ fontSize: 16, fontFamily: 'poppins.medium', color: colors.neutral50 }}>
                    {title}
                </Text>
            </LinearGradient>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 10,
    },
})