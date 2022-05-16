import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { caption } from '../../utils/fonts'
import { colors } from '../../utils/colors'
import Style from './Style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function TimeTag({ title }) {
    return (
        <View style={[Style.container, { backgroundColor: colors.info200 }]}>
            <MaterialCommunityIcons name="clock" size={20} color={colors.info500} />

            <View style={{ marginRight: 3 }} />
            <Text style={[caption, { color: colors.neutral900 }]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})