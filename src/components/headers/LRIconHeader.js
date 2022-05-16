import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { titleLarge, titleSmall } from '../../utils/fonts'
import Style from './Style'
import { colors } from '../../utils/colors'
export default function LRIconHeader({ title, leftonPress, rightIcon, rightIcononPress }) {
    return (
        <View style={Style.headerContainer}>
            <TouchableOpacity style={Style.leftWrapper}
                onPress={leftonPress}
                activeOpacity={0.8}
            >
                <MaterialIcons name="arrow-back-ios" size={24} color={colors.primary200} />
            </TouchableOpacity>
            <View style={Style.centerWrapper}>
                <Text style={[Style.headerText, { color: colors.primary200 }]}>{title}</Text>
            </View>
            <TouchableOpacity style={Style.rightWrapper}
                onPress={rightIcononPress}
                activeOpacity={0.8}
            >
                {rightIcon}
                {/* <MaterialIcons name="arrow-back-ios" size={24} color={colors.primary200} /> */}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

})