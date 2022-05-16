import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { bodySmall, caption,textInputLabel,textInputText } from '../../utils/fonts'
import { colors } from '../../utils/colors'
import Style from './Style'
export default function InputMultiLine({
    placeholder,
    value,
    onChangeText,
}) {
    return (
        <View style={[Style.textInputWrapper]}>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={colors.neutral600}
                style={[Style.input, textInputText,{textAlignVertical:'top'}]}
                multiline={true}
                numberOfLines={6}
            />
        </View>
    )
}

const styles = StyleSheet.create({})