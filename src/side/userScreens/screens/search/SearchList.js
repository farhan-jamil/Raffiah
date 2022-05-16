import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalStyle from '../../../GlobalStyle'
import LeftIconHeader from '../../../../components/headers/LeftIconHeader'
import Entypo from 'react-native-vector-icons/Entypo'
import { colors } from '../../../../utils/colors'
import { FlatList } from 'react-native-gesture-handler'
import OrderListCard from '../../../../components/cards/orderListCard/OrderListCard'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
export default function SearchList({ navigation }) {
    return (
        <View style={GlobalStyle.rootContainer}>
            <LeftIconHeader
                title={'Search List'}
                onPress={() => navigation.goBack('')}
            />
            {/* <LRIconHeader
                leftonPress={() => navigation.goBack()}
                title={'Search List'}
                rightIcon={<Entypo name='sound-mix'
                    size={24} color={colors.primary200}
                    style={{ transform: [{ rotate: "90deg" }] }}
                />}
                rightIcononPress={() => navigation.navigate('Filter')}
            /> */}
            <View style={{ flex: 1 }}>
                <FlatList
                    data={[1, 2, 3,]}
                    contentContainerStyle={{ paddingVertical: hp(2), paddingHorizontal: wp(4) }}
                    ItemSeparatorComponent={() => <View style={{ height: hp(2) }} />}
                    renderItem={({ item }) => (
                        <OrderListCard
                            screenName={'SearchList'}
                            onPress={() => { navigation.navigate('ProductDescription') }}

                        />
                    )}
                    keyExtractor={item => item.toString()}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})