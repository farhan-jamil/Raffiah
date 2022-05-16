import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { colors } from '../../utils/colors'
import { bodySmall, textInputLabel, textInputText } from '../../utils/fonts'

export default function Input({
    title,
    placeholder, value, onChangeText, editable, onPress }) {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 4,
            paddingHorizontal: 8,
            elevation: 2,
            shadowColor: colors.neutral900,
            backgroundColor: colors.neutral50,
            borderRadius: 5,
            // backgroundColor: 'green'
        }}>
            <View style={{
                flex: 0.7,
                // backgroundColor: 'yellow'
            }}>
                <Text style={[textInputLabel,
                    { color: colors.neutral900 }]}>{title}</Text>
            </View>
            <View style={{
                flex: 0.8,
                // backgroundColor: 'pink'
            }}>
                {/* <Text>Delivery address</Text> */}
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={onPress}
                >
                    < TextInput
                        placeholder={placeholder}
                        placeholderTextColor={colors.neutral600}
                        value={value}
                        onChangeText={onChangeText}
                        editable={editable}
                        style={[textInputText, {
                            paddingHorizontal: 8,
                            color: colors.neutral900,
                            textAlign: 'right'

                        }]}
                    />
                </TouchableOpacity>

            </View>
            <View style={{
                // flex: 0.2,
                // paddingLeft: wp(2),
                // backgroundColor: 'blue',
                alignItems: 'flex-end'
            }}>
                <FontAwesome5 name='pen' size={20}
                    color={colors.primary200} />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({})