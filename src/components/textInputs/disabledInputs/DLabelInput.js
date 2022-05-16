import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { bodySmall, caption,textInputLabel,textInputText } from '../../../utils/fonts'
import { colors } from '../../../utils/colors'
import Style from '../Style'
export default function LabelInput({
    label,
    placeholder,
    value,
}) {
    return (
        <View style={{}}>
            <Text style={[textInputLabel, { color: colors.neutral900 }]}>{label}</Text>
            <View style={[Style.textInputWrapper]}>
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    editable={false}
                    placeholderTextColor={colors.neutral600}
                    style={[Style.input, textInputText]}
                />
            </View>
            {/* {
                errorText === '' ? null : (
                    <Text style={[caption, { color: colors.error500 }]}>{errorText}</Text>
                )
            } */}
        </View>
    )
}

const styles = StyleSheet.create({})