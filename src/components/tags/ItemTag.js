import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { caption } from '../../utils/fonts'
import { colors } from '../../utils/colors'
import Style from './Style'

export default function ItemTag({ backgroundColor ,title}) {
    return (
        <View style={[Style.container, {
            backgroundColor: backgroundColor,
        }]}>
            <Text style={[caption, { color: colors.neutral900 }]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})