import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import GlobalStyle from '../../../GlobalStyle'
import LeftIconHeader from '../../../../components/headers/LeftIconHeader'
import { bodyLarge, titleSmall } from '../../../../utils/fonts'
import { colors } from '../../../../utils/colors'
import ProductCard from '../../../../components/cards/ProductCard'

export default function Product({ navigation }) {
    return (
        <View style={GlobalStyle.rootContainer}>
            <LeftIconHeader
                title={'New Product'}
                onPress={() => { navigation.goBack() }}
            />

            <View style={{ flex: 1 }}>
                {/* <View style={{ marginTop: hp(3), paddingHorizontal: wp(4) }} >
                    <Text style={[titleSmall, { color: colors.primary200 }]}>Top Products</Text>
                </View> */}

                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7, 8]}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    contentContainerStyle={{
                        paddingVertical: wp(0.5),
                        paddingHorizontal: wp(4),
                    }}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <>
                            <View style={{ paddingVertical: wp(3), }}>
                                <ProductCard
                                    onPress={() => { navigation.navigate('ProductDescription') }}
                                />
                            </View>
                        </>
                    )}
                />
            </View >
        </View >
    )
}

const styles = StyleSheet.create({})