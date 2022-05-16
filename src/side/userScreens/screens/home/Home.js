import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Badge } from 'react-native-paper';
import GlobalStyle from '../../../GlobalStyle'
import RightIconHeader from '../../../../components/headers/RightIconHeader'
import { colors } from '../../../../utils/colors'
import { bodyLarge, bodySmall, caption, subtitleLarge, subtitleSmall, titleSmall } from '../../../../utils/fonts'
import ProductCard from '../../../../components/cards/ProductCard'
import OrderListCard from '../../../../components/cards/orderListCard/OrderListCard'
import FavouriteProductCard from '../../../../components/cards/FavouriteProductCard';
export default function Home({ navigation }) {
    return (
        <View style={GlobalStyle.rootContainer}>
            <RightIconHeader
                title={'Home'}
                icon={
                    <View style={{}}>
                        <Ionicons name='notifications' size={24} color={colors.primary200} />
                        <Badge size={16} style={[caption, {
                            position: 'absolute', right: -4, top: -6,
                        }]}>3</Badge>
                    </View>
                }
                onPress={() => navigation.navigate('Notification')}
            />

            <ScrollView
                // style={{ backgroundColor: 'yellow' }}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ paddingHorizontal: wp(4), marginTop: hp(2) }}>
                    <View style={styles.textWrapper} >
                        <Text style={[titleSmall, { color: colors.neutral900 }]}>New Products</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Product')}
                            activeOpacity={0.5}
                        >
                            <Text style={styles.seeAllText}>See all</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <View style={{ paddingVertical: hp(3) }}> */}
                <View style={{}}>
                    <FlatList
                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                        horizontal={true}
                        // onEndReached={() => {
                        //     console.log('end reached')
                        // }}
                        // is na item ke right side pay adding adding ke and last item kay right side pay add naoi ke
                        ItemSeparatorComponent={() => <View style={{ width: wp(4) }} />}
                        // is nuy startitem and last item pay padding add ke
                        contentContainerStyle={styles.flatContentContainer}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) =>
                        (
                            <ProductCard
                                onPress={() => { navigation.navigate('ProductDescription') }}
                            />
                        )}
                    />
                </View>
                <View style={{ paddingHorizontal: wp(4) }}>
                    <View style={styles.textWrapper}>
                        <Text style={[titleSmall, { color: colors.neutral900 }]}>Most Purchased</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Product')}
                            activeOpacity={0.5}
                        >
                            <Text style={styles.seeAllText}>See all</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{}}>
                    {/* <View style={{ marginTop: hp(5) }} /> */}
                    <FlatList
                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                        horizontal={true}
                        onEndReached={() => {
                            console.log('end reached')
                        }}
                        // is na item ke right side pay adding adding ke and last item kay right side pay add naoi ke
                        ItemSeparatorComponent={() => <View style={{ width: wp(3) }} />}
                        // is nuy startitem and last item pay padding add ke
                        contentContainerStyle={styles.flatContentContainer}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) =>
                        (
                            <OrderListCard
                                onPress={() => { navigation.navigate('ProductDescription') }}
                            />
                        )}
                    />
                </View>
                <View style={{ paddingHorizontal: wp(4) }}>
                    <View style={styles.textWrapper} >
                        <Text style={[titleSmall, { color: colors.neutral900 }]}>Favourites</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Favourite')}
                            activeOpacity={0.5}
                        >
                            <Text style={styles.seeAllText}>See all</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <View style={{ paddingVertical: hp(3) }}> */}
                <View style={{}}>
                    <FlatList
                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                        horizontal={true}
                        // onEndReached={() => {
                        //     console.log('end reached')
                        // }}
                        // is na item ke right side pay adding adding ke and last item kay right side pay add naoi ke
                        ItemSeparatorComponent={() => <View style={{ width: wp(4) }} />}
                        // is nuy startitem and last item pay padding add ke
                        contentContainerStyle={styles.flatContentContainer}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) =>
                        (
                            <FavouriteProductCard
                                onPress={() => { navigation.navigate('ProductDescription') }}
                            />
                        )}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    textWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    flatContentContainer: {
        paddingHorizontal: wp(4),
        paddingTop: hp(1),
        paddingBottom: hp(3),
    },
    seeAllText: {
        fontSize: 12,
        color: colors.primary200, fontFamily: 'poppins.regular',
    }

})