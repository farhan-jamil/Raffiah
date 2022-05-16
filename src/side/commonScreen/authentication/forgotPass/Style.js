import React from 'react'
import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { colors } from '../../../../utils/colors'
export const imageWidth = 180
export default StyleSheet.create({
    imageContainer: {
        alignSelf: 'center',
        marginVertical: hp(4)
    },
    descriptionText: {
        textAlign: 'center', color: colors.neutral700,
        fontFamily: 'poppins.regular',
        fontSize: 16
    }
})