import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import GlobalStyle from '../../../GlobalStyle'
import RightIconInput from '../../../../components/textInputs/RightIconInput'
import { colors } from '../../../../utils/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Entypo from 'react-native-vector-icons/Entypo'
import RightIconHeader from '../../../../components/headers/RightIconHeader'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { bodyLarge, subtitleLarge, titleSmall } from '../../../../utils/fonts'
import OrderListCard from '../../../../components/cards/orderListCard/OrderListCard'
export default function Search({ navigation }) {
    const [search, setSearch] = useState('')
    return (
        <View style={GlobalStyle.rootContainer}>
            <RightIconHeader
                title={'Search'}
                icon={<Entypo name='sound-mix'
                    size={24} color={colors.primary200}
                    style={{ transform: [{ rotate: "90deg" }] }}
                />}
                onPress={() => navigation.navigate('Filter')}
            />
            <View style={GlobalStyle.screenFirstContainer}>
                <RightIconInput
                    placeholder={'Search...'}
                    value={search}
                    onChangeText={setSearch}
                    icon={<AntDesign name='search1' color={colors.neutral700} size={24}
                    />}
                    clearButtonMode='always'
                />
                <View style={{ marginTop: heightPercentageToDP(2), }} />
                <View style={styles.searchItemContentWrapper}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SearchList')}
                        activeOpacity={0.8}
                    >
                        <Text style={[bodyLarge, {
                            color: colors.neutral900,

                        }]}>Nike Sport Shoes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                    >
                        <AntDesign name='closecircle' color={colors.neutral700} size={20} />
                    </TouchableOpacity>
                </View>
                <View style={styles.searchItemContentWrapper}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SearchList')}
                        activeOpacity={0.8}
                    >
                        <Text style={[bodyLarge, {
                            color: colors.neutral900,

                        }]}>Nike Sport Shoe</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                    >
                        <AntDesign name='closecircle' color={colors.neutral700} size={20} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: hp(2) }}>
                    {/* <View style={{ paddingHorizontal: wp(4) }}> */}

                    <Text style={[titleSmall, { color: colors.neutral900 }]}>Most Purchased</Text>

                    {/* </View> */}
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
                                    onPress={() => navigation.navigate('ProductDescription')}
                                />
                            )}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flatContentContainer: {
        // paddingHorizontal: wp(4),
        paddingTop: hp(1),
        paddingBottom: hp(3),
    },
    searchItemContentWrapper: {
        flexDirection: 'row', alignItems: 'center',
        justifyContent: 'space-between',

    }
})