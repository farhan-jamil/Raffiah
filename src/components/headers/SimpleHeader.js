import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { titleLarge, titleSmall } from '../../utils/fonts'
import { colors } from '../../utils/colors'
import Style from './Style'

export default function SimpleHeader({ title }) {
    return (
        <View style={styles.headerContainer}>
            <Text style={[Style.headerText,{ color: colors.primary200 }]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        elevation: 2,
        // backgroundColor: 'white',
        backgroundColor: colors.neutral100,
        shadowColor: colors.neutral900,
        zIndex: 1,
    }
})