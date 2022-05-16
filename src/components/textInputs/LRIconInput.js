import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { bodySmall,textInputLabel,textInputText } from '../../utils/fonts'
import { colors } from '../../utils/colors'
import Style from './Style'
export default function LRIconInput({
    label,
    placeholder,
    value,
    onChangeText,
    onPress,
}) {
    return (
        <View style={{}}>
            <Text style={[textInputLabel, { color: colors.neutral900 }]}>{label}</Text>
            <View style={Style.textInputWrapper}>
                <TouchableOpacity onPress={onPress}>
                    <AntDesign name='search1' color={colors.neutral900} size={24} />
                </TouchableOpacity>
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    placeholderTextColor={colors.neutral600}
                    style={[Style.input, textInputText]}
                />
                <TouchableOpacity onPress={onPress}>
                    <AntDesign name='search1' color={colors.neutral900} size={24} />
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({})