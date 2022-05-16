import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalStyle from '../../../GlobalStyle'
import LeftIconHeader from '../../../../components/headers/LeftIconHeader'
import SecondaryButton from '../../../../components/buttons/SecondaryButton'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { colors } from '../../../../utils/colors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default function ({ navigation }) {
    return (
        <View style={GlobalStyle.rootContainer}>
            <LeftIconHeader
                title={'Filter'}
                onPress={() => navigation.goBack()}
            />
            <View style={GlobalStyle.screenFirstContainer}>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp(2) }}>
                    <View style={{ flex: 1 }}>
                        <SecondaryButton
                            title={'All Listing'}
                            onPress={() => { navigation.navigate('ListingItems') }}
                        />
                    </View>
                    <View style={{ marginHorizontal: wp(4) }} />
                    <View style={{ flex: 1 }}>
                        <SecondaryButton
                            title={'Bidings'}
                            onPress={() => { navigation.navigate('BidingItems') }}
                        />
                    </View>
                </View>
                {/* <View style={{ backgroundColor: colors.neutral100, elevation: 5, padding: wp(4) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                        <Text>Condition</Text>
                        <View style={{
                            width: 30, height: 30,
                            borderRadius: 30 / 2, backgroundColor: colors.neutral50,
                            elevation: 5, shadowColor: colors.neutral900,
                            alignItems: 'center', justifyContent: 'center'
                        }}><MaterialIcons name='keyboard-arrow-right'
                            size={24} color={colors.primary200} />
                        </View>
                    </View>
                </View> */}

            </View>
        </View>
    )
}

const styles = StyleSheet.create({})