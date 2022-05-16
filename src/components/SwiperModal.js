import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native'
import React from 'react'
import { heightPercentageToDP, heightPercentageToDP as hp, widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Swiper from 'react-native-swiper'
import { colors } from '../utils/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
export default function Swipeer({ status, onPress }) {
    const images = [
        {
            id: 1,
            image: require('../assets/png/bitmap.png'),
            imageUri: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 2,
            image: require('../assets/png/bitmap-1.png'),
            imageUri: 'data:image/jpeg;base64,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'
        },
        // {
        //     id: 3,
        //     image: require('../../../../assets/png/bitmap-2.png')
        // },
        // {
        //     id: 4,
        //     image: require('../../../../assets/png/bitmap-3.png')
        // }
    ]
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={status}
            onRequestClose={onPress}
        >
            <View
                style={{
                    flex: 1,
                    // height: hp(100),
                    backgroundColor: '#00000088',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 200,
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    // position: 'absolute',
                }}>
                <View
                    style={{
                        position: 'absolute', top: 10, right: 10, zIndex: 1
                        // flexDirection: 'row',
                        // width: '90%',
                        // justifyContent: 'flex-end',
                    }}>
                    <TouchableOpacity
                        onPress={onPress}
                        style={{
                            // height: 30,
                            // width: 30,
                            // alignItems: 'center',
                            // justifyContent: 'center',
                            // backgroundColor: 'yellow'
                        }}>
                        <AntDesign color={'red'} size={25} name="closecircle" />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        height: hp(80),
                        width: wp(100),
                        // backgroundColor:"red",
                        alignItems: 'center',
                        justifyContent: 'center',
                        // backgroundColor: 'red',
                        // borderRadius: 25,
                    }}>
                    <Swiper
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
                    >
                        {images.map(img => (

                            <Image
                                // source={img.image}
                                source={{ uri: img.imageUri }}
                                style={{
                                    flex: 1,

                                    height: '100%', width: '100%',
                                }}
                                // resizeMode="contain"
                                // resizeMode='stretch'
                                // resizeMode='cover'
                                resizeMode='contain'
                            />
                        ))}
                    </Swiper>
                </View>
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({})