import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../../utils/colors'
import Style from './Style'
export default function RButton() {
    return (
        <View style={Style.roundButton}>
            <MaterialIcons
                name='arrow-forward-ios'
                size={18} color={colors.primary200} />
        </View>
    )
}

const styles = StyleSheet.create({})