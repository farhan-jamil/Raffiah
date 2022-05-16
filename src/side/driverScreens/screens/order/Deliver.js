import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import GlobalStyle from '../../../GlobalStyle'
import OrderItemInfo from '../../../../components/cards/orderListCard/OrderItemInfo'

export default function Deliver({ navigation }) {
    const dumyData = [
        {
            id: 1,
            title: 'Shalimar Cologne Guerlain',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula',
            price: 20,
            status: 'Complete'
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
                    data={[1,2,3,4]}
                    renderItem={({ item }) => (
                        <OrderItemInfo
                            onPress={() => { navigation.navigate('DeliverDetail',{itemData: dumyData[0]}) }}
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