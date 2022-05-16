import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import RoundButton from '../../buttons/RoundButton'
import Perfume from '.././../../assets/png/perfume.png'
import ImageBg from '../../ImageBg'
import { colors } from '../../../utils/colors'
import Style from './Style'
import { bodySmall, subtitleLarge, subtitleSmall } from '../../../utils/fonts'
import Count from '../../Count'
export default function OrderItemCart() {
    return (
        <View style={{ width: '100%' }}>
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
                        <Count />
                        {/* <RoundButton /> */}
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})