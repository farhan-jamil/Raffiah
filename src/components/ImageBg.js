import { StyleSheet, Image, ImageBackground } from 'react-native'
import React from 'react'
import Cloud from '../assets/png/cloud.png'
import { colors } from '../utils/colors'
export default function ImageBg({ image }) {
    return (
        <ImageBackground
            source={Cloud}
            imageStyle={{
                borderTopLeftRadius:12,
                borderBottomLeftRadius:12 ,
                // borderTopRightRadius:12,
                // borderRadius: 12,

            }}
            style={styles.image}
        >
            <Image source={image} style={{ width: 100, height: 100 }} />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 134,
        width: '100%',
        elevation: 2,
        shadowColor: colors.neutral900,
        backgroundColor: colors.neutral50,
        // borderRadius: 12,
        borderTopLeftRadius:12,
        borderBottomLeftRadius:12 ,
        justifyContent: 'center',
        alignItems: 'center'
    }
})