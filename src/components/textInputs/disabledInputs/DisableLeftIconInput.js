import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { bodySmall, textInputLabel, textInputText } from '../../../utils/fonts'
import { colors } from '../../../utils/colors'
import Style from '../Style'
export default function DisableLeftIconInput({
    label,
    value,
    icon
}) {
    return (
        <View style={{}}>
            <Text style={[textInputLabel, { color: colors.neutral900 }]}>{label}</Text>
            <View style={Style.textInputWrapper}>
                {/* <TouchableOpacity onPress={onPress}> */}
                {icon}
                {/* <AntDesign name='search1' color={colors.neutral900} size={24} /> */}
                {/* </TouchableOpacity> */}
                <TextInput
                    value={value}
                    editable={false}
                    style={[Style.input, textInputText, { color: colors.neutral900 }]}
                />
            </View>
        </View >
    )
}

const styles = StyleSheet.create({})