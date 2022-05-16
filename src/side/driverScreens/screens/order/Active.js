import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import GlobalStyle from '../../../GlobalStyle'
import OrderItemInfo from '../../../../components/cards/orderListCard/OrderItemInfo'

export default function Active({ navigation }) {
    const dumyData = [
        {
            id: 1,
            title: 'Shalimar Cologne Guerlain',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula',
            price: 20,
            status: 'Active'
        },
        {
            id: 2,
            title: 'Shalimar Cologne Guerlain',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula',
            price: 20,
            status: 'Active'
        },
    ]
    return (
        <View style={GlobalStyle.rootContainer}>
            {/* <View style={{ paddingHorizontal: wp(4) }}> */}
            <View style={{ flex: 1 }}>
                <FlatList
                    contentContainerStyle={styles.contentContainer}
                    ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                    showsVerticalScrollIndicator={false}
                    data={dumyData}
                    renderItem={({ item }) => (
                        <OrderItemInfo
                            onPress={() => {
                                navigation.navigate('DeliverDetail',
                                    { screenName: 'Active', itemData: item }
                                )
                            }}
                        />
                    )}
                />
            </View>
            {/* <OrderItemInfo />
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: hp(1),
        paddingHorizontal: wp(4)
    },
    itemSeparator: {
        height: hp(1.5)
    },
})