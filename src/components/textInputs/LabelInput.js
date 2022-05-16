import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { bodySmall, caption,textInputLabel, textInputText } from '../../utils/fonts'
import { colors } from '../../utils/colors'
import Style from './Style'
export default function LabelInput({
    label,
    placeholder,
    value,
    onChangeText,
    borderColor,
    errorText,
    editable,
    secureTextEntry
}) {
    return (
        <View style={{}}>
            <Text style={[textInputLabel, { color: colors.neutral900 }]}>{label}</Text>
            <View style={[Style.textInputWrapper]}>
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    editable={editable}
                    placeholderTextColor={colors.neutral600}
                    style={[Style.input, textInputText]}
                    secureTextEntry={secureTextEntry}
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