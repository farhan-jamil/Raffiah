import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import GlobalStyle from '../../../GlobalStyle'
import SimpleHeader from '../../../../components/headers/SimpleHeader'
import OrderItemTag from '../../../../components/cards/orderListCard/OrderItemTag'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
export default function Order({ navigation }) {
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
            price: 50,
            status: 'Cancel'
        },
        {
            id: 3,
            title: 'Shalimar Cologne Guerlain',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula',
            price: 50,
            status: 'Cancel'
        },
        {
            id: 4,
            title: 'Shalimar Cologne Guerlain',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula',
            price: 10,
            status: 'Complete'
        },
        {
            id: 5,
            title: 'Shalimar Cologne Guerlain',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula',
            price: 30,
            status: 'Progress'
        },
    ]
    return (
        <View style={GlobalStyle.rootContainer}>
            <SimpleHeader
                title="Orders"
            />
            {/* <View style={{ flex: 1, backgroundColor: 'grey' }}> */}
            <FlatList
                data={dumyData}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{
                    paddingHorizontal: wp(4),
                    paddingVertical: hp(2),
                    // backgroundColor: 'red',
                    // flex: 1
                }}
                ItemSeparatorComponent={() => <View style={{ height: hp(2) }} />}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={{}}>
                        <OrderItemTag
                            item={item}
                            onPress={() => { navigation.navigate('DeliverDetail',{itemData:item}) }}
                        />

                    </View>
                )}
            />
            {/* </View> */}
        </View>
    )
}

const styles = StyleSheet.create({})