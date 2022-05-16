import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import Person from '../../assets/png/person.jpg'
import { colors } from '../../utils/colors'
export default function NotificationImage() {
    return (
        <View style={{
            width: 60, height: 60,
            borderRadius: 60 / 2,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 2,
            shadowColor: colors.neutral900

        }}>
            <Image
                source={Person}
                style={{
                    width: 60, height: 60,
                    borderRadius: 60 / 2,
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})