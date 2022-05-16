import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors';
import { subtitleLarge } from '../../utils/fonts';
import Style from './Style';
export default function SecondaryButton({ title, onPress }) {
    return (
        <TouchableOpacity style={[Style.container, styles.extendStyle]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Text style={[subtitleLarge, { color: colors.primary200 }]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    extendStyle: {
        backgroundColor: colors.neutral100,
        borderWidth: 1,
        borderColor: colors.primary200

    }

})