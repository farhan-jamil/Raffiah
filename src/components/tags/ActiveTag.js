import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { caption } from '../../utils/fonts'
import { colors } from '../../utils/colors'
import Style from './Style'

export default function ActiveTag({ title }) {
    return (
        <View style={[Style.statusTagContainer, { backgroundColor: colors.primary200 }]}>
            <Text style={[caption, { color: colors.neutral50 }]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})