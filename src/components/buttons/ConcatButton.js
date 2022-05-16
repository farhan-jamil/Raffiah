import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import { colors } from '../../utils/colors'

export default function ConcatButton({
    primaryButtonOnPress,
    secondaryButtonOnPress
}) {
    return (
        <View style={{
            flexDirection: 'row',
            elevation: 2,
            shadowColor: colors.neutral900,
            backgroundColor: colors.neutral100,
            paddingHorizontal: wp(4),
            paddingVertical: hp(2)
        }}>
            <View style={{
                flex: 1,
                // backgroundColor: 'orange'
            }}>
                <PrimaryButton
                    title={'Accept'}
                    onPress={primaryButtonOnPress}
                />
            </View>
            <View style={{ marginHorizontal: wp(5) }} />
            <View style={{
                flex: 1,
                //  backgroundColor: 'pink' 
            }}>
                <SecondaryButton
                    title={'Reject'}
                    onPress={secondaryButtonOnPress}
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({})