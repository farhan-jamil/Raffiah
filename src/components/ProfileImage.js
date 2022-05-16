import { StyleSheet, View } from 'react-native'
import React from 'react'
import DefaultProfileImage from '../assets/svg/DefaultProfileImage.svg'
export default function ProfileImage({ }) {
    return (
        <View style={styles.container}
        >
            <DefaultProfileImage
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
})