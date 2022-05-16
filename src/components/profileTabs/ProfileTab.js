import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import { bodyLarge } from '../../utils/fonts'
import { Divider } from 'react-native-paper'
import Style from './Style'
export default function ProfileTab({ icon, title, onPress }) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
        >
            <View style={Style.container}>
                <View style={[Style.leftIconbackground, { backgroundColor: colors.error200 }]}>
                    {icon}

                </View>
                <View style={{ marginLeft: 8 }} />
                <Text style={[bodyLarge, { color: colors.neutral900 }]}>{title}</Text>

            </View>
            {/* <Divider style={{ backgroundColor: colors.neutral700, height: 1 }} /> */}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})