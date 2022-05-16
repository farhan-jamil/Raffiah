import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Perfume from '.././../../assets/png/perfume.png'
import { colors } from '../../../utils/colors'
import Cloud from '../../../assets/png/cloud.png'
import { bodySmall, subtitleLarge, subtitleSmall } from '../../../utils/fonts'
import ItemTag from '../../tags/ItemTag'
import TimeTag from '../../tags/TimeTag'
import DateTag from '../../tags/DateTag'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Divider } from 'react-native-paper'
export default function OrderItemInfo({ onPress, screenName }) {
    const title = 'Shalimar Cologne Guerlain'
    return (
        <TouchableOpacity style={styles.container}
            activeOpacity={0.9}
            onPress={onPress}
            disabled={screenName === 'DriverSide' ? true : false}
        >
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.firstContainer}>
                    <ImageBackground
                        source={Cloud}
                        imageStyle={{
                            borderRadius: 12,
                            borderBottomLeftRadius: 0,
                            borderTopRightRadius: 0,
                        }}
                        style={styles.bgImage}
                    >
                        <Image source={Perfume} style={styles.image} />
                    </ImageBackground>
                </View>
                <View style={styles.secondContainer}>

                    <View style={[styles.itemPriceWrapper,
                        // { backgroundColor: 'red' }
                    ]}>
                        <Text
                            style={[subtitleSmall,
                                { color: colors.neutral900 }]}>
                            {title.length > 20 ? title.substring(0, 20) + "..." : title}
                        </Text>
                        <Text
                            style={[subtitleLarge, { color: colors.primary200 }]}
                        >$12.58</Text>
                    </View>
                    <Text
                        numberOfLines={2}
                        style={[bodySmall, { color: colors.neutral700 }]}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula
                    </Text>
                    <View style={styles.tag}>
                        <ItemTag
                            backgroundColor={colors.primary50}
                            title={'2 items'}
                        />
                        <TimeTag
                            title={'12:00 PM'}
                        />
                        <DateTag
                            title={'12 Jan,2020'}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.thirdContainer}>

                <Divider style={{ backgroundColor: colors.neutral400, height:1 }} />
                <View style={{ marginTop: hp(1) }} />
                <View style={styles.contentWrapper}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Ionicons name='phone-portrait-outline' size={18} color={colors.primary200} />
                        <View style={{ marginRight: 5 }} />
                        <Text style={[bodySmall, {
                            color: colors.primary200,
                            fontFamily: 'poppins.medium',
                        }]}>Phone No</Text>
                    </View>
                    <Text style={[bodySmall, { color: colors.neutral900 }]}>123456789</Text>
                </View>
                <View style={styles.contentWrapper}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Ionicons name='location-outline' size={20} color={colors.primary200} />
                        <View style={{ marginRight: 5 }} />
                        <Text style={[bodySmall, {
                            color: colors.primary200,
                            fontFamily: 'poppins.medium',
                        }]}>Address</Text>
                    </View>
                    <Text style={[bodySmall, { color: colors.neutral900 }]}>Asia</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.neutral50,
        // backgroundColor: colors.neutral100,
        borderRadius: 10,
        elevation: 2,
        shadowColor: colors.neutral900
    },
    bgImage: {
        height: 110,
        width: '100%',
        elevation: 2,
        shadowColor: colors.neutral900,
        backgroundColor: colors.neutral50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    image: { width: 60, height: 80 },
    firstContainer: { flex: 0.4, borderRadius: 10 },
    secondContainer: {
        flex: 1,
        borderTopRightRadius: 10,
        padding: 8
    },
    thirdContainer: {
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        padding: 8
    },
    itemPriceWrapper: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    tag: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 12,
        //  backgroundColor: 'white'
    },
    contentWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})