import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import RoundButton from '../../buttons/RoundButton'
import Perfume from '.././../../assets/png/perfume.png'
import ImageBg from '../../ImageBg'
import { colors } from '../../../utils/colors'
import Style from './Style'
import { bodySmall, subtitleLarge, subtitleSmall } from '../../../utils/fonts'

export default function OrderListCard({ screenName, onPress }) {
    // console.log('screenName', screenName)
    return (
        <TouchableOpacity
            style={{ width: screenName === 'ListingItems' || screenName === 'SearchList' ? '100%' : wp(88) }}
            activeOpacity={0.9}
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
                    </View>
                    <View style={Style.contentIconWrapper}>
                        <Text
                            style={[subtitleLarge, { color: colors.primary200 }]}
                        >$12.58</Text>
                        <RoundButton />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

})