import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import RoundButton from '../../buttons/RoundButton'
import Perfume from '.././../../assets/png/perfume.png'
import ImageBg from '../../ImageBg'
import { colors } from '../../../utils/colors'
import Style from './Style'
import { bodySmall, subtitleLarge, subtitleSmall } from '../../../utils/fonts'

export default function OrderBidingListCard({ onPress }) {

    return (
        <TouchableOpacity
            style={{ width: '100%' }}
            activeOpacity={0.8}
            onPress={onPress}
        >
            <View style={Style.rootContainer}>
                <View style={Style.firstContainer}>
                    <ImageBg image={Perfume} />
                </View>
                <View style={Style.secondContainer}>
                    <View>
                        <Text
                            style={[subtitleSmall, { color: colors.neutral900 }]}>Shalimar Cologne Guerlain</Text>

                        <View style={{}} />
                        <Text
                            numberOfLines={2}
                            style={[bodySmall, { color: colors.neutral700 }]}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[bodySmall, { color: colors.neutral700 }]}>
                                5 Bids -
                            </Text>
                            <Text style={[bodySmall, { color: colors.neutral700 }]}>
                                3d 3h
                            </Text>
                        </View>
                        <Text style={[bodySmall, { color: colors.neutral700 }]}>Philadelphia,New York</Text>
                    </View>
                    <View style={Style.contentIconWrapper}>
                        <Text
                            style={[subtitleLarge, { color: colors.primary200 }]}
                        >$12.58</Text>
                        <RoundButton />
                    </View>
                </View>
            </View >
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
//     rootContainer: {
//         flexDirection: 'row',
//         borderRadius: 12,
//         backgroundColor: '#F5F5F8',
//         elevation: 5,
//         shadowColor: colors.neutral900,
//     },
//     firstContainer: {
//         flex: 1
//     },
//     secondContainer: {
//         flex: 2,
//         justifyContent: 'space-between',
//         padding: 12
//     },
//     contentIconWrapper: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between'
//     }
})