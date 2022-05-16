import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import GlobalStyle from '../../../GlobalStyle'
import LeftIconHeader from '../../../../components/headers/LeftIconHeader'
import OrderItemInfo from '../../../../components/cards/orderListCard/OrderItemInfo'
import { colors } from '../../../../utils/colors'
import { titleSmall } from '../../../../utils/fonts'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import ItemPriceandTotalCard from '../../../../components/cards/ItemPriceandTotalCard'
import ConcatButton from '../../../../components/buttons/ConcatButton'

export default function OrderDetail({ navigation }) {
    return (
        <View style={[GlobalStyle.rootContainer]}>
            <LeftIconHeader
                title='Order Detail'
                onPress={() => navigation.goBack()}
            />
            {/* <View style={{ paddingHorizontal: wp(4) }}> */}
            <View style={GlobalStyle.screenFirstContainer}>
                < View style={{ marginTop: hp(2) }}>
                    {/* <View style={{ paddingHorizontal: wp(4), marginTop: hp(2) }}> */}
                    <Text style={[titleSmall,
                        { color: colors.neutral900 }]}>
                        Items
                    </Text>
                </View>
                < View style={{ marginTop: hp(2) }} />
                <ItemPriceandTotalCard />
                < View style={{ marginTop: hp(2) }} />
                <OrderItemInfo
                    onPress={() => { navigation.navigate('OrderDetail') }}
                    screenName={'DriverSide'}
                />

            </View>
            <View style={{}}>
                <ConcatButton
                    primaryButtonOnPress={() => { navigation.goBack() }}
                    secondaryButtonOnPress={() => { navigation.goBack() }}
                />
            </View >
        </View >
    )
}

const styles = StyleSheet.create({
    firstHalf: {
        flex: 1,
        // backgroundColor: 'pink'
    },
    secondHalf: {
        flex: 0.5,
        // backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    },
    thirdHalf: {
        flex: 0.5,
        // backgroundColor: 'pink',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },

})