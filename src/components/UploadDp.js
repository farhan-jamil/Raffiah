import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { colors } from '../utils/colors'
import DefaultProfileImage from '../assets/svg/DefaultProfileImage.svg'
export default function UploadDp({ onPress }) {
    return (
        <TouchableOpacity style={styles.container}
            onPress={onPress}
            activeOpacity={0.5}
        >
            <View>
                <View style={{
                    backgroundColor: colors.neutral100,
                    elevation: 3,
                    shadowColor: colors.neutral900,
                    width: 97,
                    height: 99,
                    borderRadius: 99 / 2,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <DefaultProfileImage
                    />
                </View>
                {/* <View style={styles.captureImage}>
                    <FontAwesome name='camera' size={16} color={colors.neutral50} />
                </View> */}
            </View>

        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    container: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    captureImage: {
        width: 30, height: 30,
        borderRadius: 30 / 2,
        backgroundColor: colors.primary200,
        position: 'absolute',
        bottom: -10, right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        shadowColor: colors.neutral900,
    }
})