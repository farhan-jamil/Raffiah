import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopBarNavigator from '../../navigations/TopBarNavigator'
import GlobalStyle from '../../../GlobalStyle'
import SimpleHeader from '../../../../components/headers/SimpleHeader'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { colors } from '../../../../utils/colors'
export default function Order() {
    return (
        <View style={GlobalStyle.rootContainer}>
            <SimpleHeader
                title={'Order History'}
            />
            <View style={GlobalStyle.driverSideMarginTop} />
            {/* <View style={{ backgroundColor: 'red', width: '100%', flexDirection: 'row' }}>
                <View style={styles.selectedContainer}>
                    <Text style={{ color: colors.neutral900 }}>Active</Text>
                </View>
                <View style={[styles.selectedContainer, { backgroundColor: 'green' }]}>
                    <Text style={{ color: colors.neutral900 }}>Delivered</Text>
                </View>
            </View> */}
            <TopBarNavigator />
        </View>
    )
}

const styles = StyleSheet.create({
    selectedContainer: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        padding:12
    }

})