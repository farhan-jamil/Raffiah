import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import PrimaryButton from '../../buttons/PrimaryButton'
import { colors } from '../../../utils/colors'
import { subtitleLarge, subtitleSmall } from '../../../utils/fonts'
import LinearGradient from 'react-native-linear-gradient';
import PrimarySmallButton from '../../buttons/PrimarySmallButton'
export default function TotalAndButtonsCard({ leftonPress, rightonPress }) {
    return (
        <View style={{
            elevation: 2,
            shadowColor: 'black',
            backgroundColor: colors.neutral50,
            // backgroundColor: colors.neutral100,
            // backgroundColor: 'white',
            paddingHorizontal: wp(4),
            paddingVertical: hp(2),
            // opacity: 0.9,
        }} >
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{
                        color: colors.neutral900,
                        fontFamily: 'poppins.medium',
                        fontSize: 14
                    }}>Total</Text>
                    <Text style={{
                        color: colors.primary200,
                        fontFamily: 'poppins.regular',
                        fontSize: 14
                    }}>$100</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <PrimarySmallButton
                        title={'Buy Now'}
                        onPress={leftonPress}
                    />

                    <View style={{ marginRight: wp(2) }} />
                    <PrimarySmallButton
                        title={'Add to Cart'}
                        onPress={rightonPress}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 10,
        elevation: 2,
        shadowColor: colors.neutral900,
    },
    // container: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     paddingVertical: 14,
    //     paddingHorizontal: 16,
    //     borderRadius: 10,
    // },
})