import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { bodySmall, caption,textInputLabel,textInputText } from '../../utils/fonts'
import { colors, } from '../../utils/colors'
import Style from './Style'
export default function BirthInput({
    label = 'Date of Birth',
    firstPlaceholder,
    secondPlaceholder,
    thirdPlaceholder,
    firstValue,
    secondValue,
    thirdValue,
    onFirstChangeText,
    onSecondChangeText,
    onThirdChangeText,
    borderColor,
    errorText,
    editable
}) {
    return (
        <View style={{}}>
            <Text style={[textInputLabel, { color: colors.neutral900 }]}>{label}</Text>
            <View style={{
                flexDirection: "row", alignItems: 'center'
            }}>
                <View style={[Style.birthTextFieldInput, { backgroundColor: editable ? colors.neutral50 : colors.neutral250 }]}>
                    <TextInput
                        placeholder={firstPlaceholder}
                        value={firstValue}
                        onChangeText={onFirstChangeText}
                        keyboardType='numeric'
                        editable={editable}
                        style={[textInputText,
                            { color: editable ? colors.neutral900 : colors.neutral700 }
                        ]}
                    />
                </View>
                <View style={{ marginLeft: 8 }} />
                <View style={[Style.birthTextFieldInput, { backgroundColor: editable ? colors.neutral50 : colors.neutral250 }]}>
                    <TextInput
                        placeholder={secondPlaceholder}
                        value={secondValue}
                        onChangeText={onSecondChangeText}
                        editable={editable}
                        style={[textInputText,
                            { color: editable ? colors.neutral900 : colors.neutral700 }
                        ]}
                    />
                </View>
                <View style={{ marginLeft: 8 }} />
                <View style={[Style.birthTextFieldInput, { backgroundColor: editable ? colors.neutral50 : colors.neutral250 }]}>
                    <TextInput
                        placeholder={thirdPlaceholder}
                        value={thirdValue}
                        onChangeText={onThirdChangeText}
                        keyboardType='numeric'
                        editable={editable}
                        style={[textInputText,
                            { color: editable ? colors.neutral900 : colors.neutral700 }
                        ]}
                    />
                </View>
            </View>
            {/* {
                errorText === '' ? null : (
                    <Text style={[caption, { color: colors.error500 }]}>{errorText}</Text>
                )
            } */}
        </View>
    )
}

const styles = StyleSheet.create({
  
})