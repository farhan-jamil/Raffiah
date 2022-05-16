import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { titleSmall } from '../../utils/fonts'
import Style from './Style'
import { colors } from '../../utils/colors'
export default function RightIconHeader({ title, icon, onPress }) {
    return (
        <View style={Style.headerContainer}>
            <View style={Style.leftWrapper}>

            </View>
            <View style={Style.centerWrapper}>
                <Text style={[Style.headerText, { color: colors.primary200 }]}>{title}</Text>
            </View>
            <TouchableOpacity style={Style.rightWrapper}
                onPress={onPress}
                activeOpacity={0.5}
            >
                {icon}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

})