import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import GlobalStyle from '../../../GlobalStyle'
import LeftIconHeader from '../../../../components/headers/LeftIconHeader'
import OrderBidingListCard from '../../../../components/cards/orderListCard/OrderBidingListCard'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function BidingItems({ navigation }) {
    return (
        <View style={GlobalStyle.rootContainer}>
            <LeftIconHeader
                title={'Biding List'}
                onPress={() => navigation.goBack()}
            />
            <View style={{ flex: 1 }}>
                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7]}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingVertical: hp(2), paddingHorizontal: wp(4) }}
                    ItemSeparatorComponent={() =>
                        <View style={{ height: hp(2) }} />}
                    renderItem={({ item }) =>
                    (
                        // <View>
                        <OrderBidingListCard
                            onPress={() => navigation.navigate('BidingProductDescription')}
                        />
                        // {/* </View> */}
                    )
                    }
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({})