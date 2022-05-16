import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { caption } from '../../utils/fonts'
import { colors } from '../../utils/colors'
import Style from './Style'
import Entypo from 'react-native-vector-icons/Entypo'

export default function DateTag({ title }) {
    return (
        <View style={[Style.container, { backgroundColor: colors.info50 }]}>
            <Entypo name="calendar" size={18} color={'#FEAD08'} />
            <View style={{ marginRight: 3 }} />
            <Text style={[caption, { color: colors.neutral900 }]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})