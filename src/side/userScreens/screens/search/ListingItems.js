import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import GlobalStyle from '../../../GlobalStyle'
import LeftIconHeader from '../../../../components/headers/LeftIconHeader'
import OrderListCard from '../../../../components/cards/orderListCard/OrderListCard'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function ListingItems({ navigation }) {
    return (
        <View style={GlobalStyle.rootContainer}>
            <LeftIconHeader
                title={'All Listing'}
                onPress={() => navigation.goBack()}
            />
            <View style={{ flex: 1 }}>
                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7]}
                    contentContainerStyle={{ paddingVertical: hp(2), paddingHorizontal: wp(4) }}
                    ItemSeparatorComponent={() =>
                        <View style={{ height: hp(2) }} />}
                    renderItem={({ item }) =>
                    (
                        // <View>
                        <OrderListCard screenName={'ListingItems'}
                            onPress={() => navigation.navigate('ProductDescription')}
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