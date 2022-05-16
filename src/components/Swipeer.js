import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Swiper from 'react-native-swiper'
import { colors } from '../utils/colors'
import SwiperModal from './SwiperModal'
import AntDesign from 'react-native-vector-icons/AntDesign'
export default function Swipeer({ imagerArray, onPress, status }) {
    return (
        <>
            <Swiper
                containerStyle={{
                    marginTop: hp(1),
                    height: hp(30),
                    // marginHorizontal: wp(4),
                    // paddingHorizontal: wp(4)
                }}
                // style={{ backgroundColor: 'orange', height: 100 }}
                showsButtons={false}
                // loop={true}
                // autoplay={true}
                paginationStyle={{
                    bottom: hp(1),
                }}
                dot={
                    <View style={{
                        backgroundColor: colors.neutral700,
                        width: 8, height: 8, borderRadius: 8 / 2, margin: 3,
                        elevation: 5, shadowColor: colors.neutral900
                    }} />
                }
                activeDot={
                    <View style={{
                        backgroundColor: colors.neutral50,
                        width: 8, height: 8, margin: 3,
                        borderRadius: 8 / 2,
                        elevation: 5,
                        shadowColor: colors.neutral900
                    }} />
                }
            // paginationStyle={{
            //     bottom: 10, left: null, right: 10,
            //     backgroundColor: 'red'
            // }}
            >

                {imagerArray.map(img => (
                    <TouchableOpacity onPress={onPress}
                        activeOpacity={0.8}
                        key={img.id}
                    >
                        <Image

                            source={{ uri: img.imageUri }}
                            // source={img.image}
                            style={{ width: '100%', height: '100%' }}
                        // style={{ width: wp(100), height: hp(30) }}
                        // resizeMode='stretch'
                        />
                        <AntDesign name='hearto' size={24} color={colors.neutral700} style={{ position: 'absolute', top: hp(1), right: wp(2) }} />
                    </TouchableOpacity>

                ))
                }
            </Swiper>
            <SwiperModal
                status={status}
                onPress={onPress}
            />
        </>
    )
}

const styles = StyleSheet.create({})