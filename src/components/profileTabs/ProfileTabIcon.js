import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { colors } from '../../utils/colors'
import { bodyLarge } from '../../utils/fonts'
import { Divider } from 'react-native-paper'
import Style from './Style'
export default function ProfileTabIcon({ icon, title, onPress }) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
        >
            <View style={[Style.container, { justifyContent: 'space-between' }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <View style={Style.leftIconbackground}>
                        {icon}
                    </View>
                    <View style={{ marginLeft: 8 }} />
                    <Text style={[bodyLarge, { color: colors.neutral900 }]}>{title}</Text>
                </View>
                <MaterialIcons name='arrow-forward-ios' size={20} color={colors.primary200} />
            </View>
            {/* <Divider style={{ backgroundColor: colors.neutral700, }} /> */}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})