import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import GlobalStyle from '../../../GlobalStyle'
import SimpleHeader from '../../../../components/headers/SimpleHeader'
import OrderItemCart from '../../../../components/cards/orderListCard/OrderItemCart'
import CheckoutCard from '../../../../components/cards/CheckoutCard'
export default function Cart({ navigation }) {
    return (
        <View style={GlobalStyle.rootContainer}>
            <SimpleHeader title={'Cart'} />
            <View style={{
                flex: 1
                // backgroundColor: 'yellow' 
            }}>
                <FlatList
                    data={[1, 2, 3, 4, 4, 4]}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() =>
                        <View style={{
                            height: hp('2%'),
                        }} />}
                    contentContainerStyle={{
                        flexGrow: 1,
                        paddingVertical: hp(2),
                        paddingHorizontal: wp(4)
                    }}
                    renderItem={({ item }) => <OrderItemCart />}
                />
            </View>
            <View style={[{}]}>
                <CheckoutCard
                    onPress={() => { navigation.navigate('Checkout') }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})