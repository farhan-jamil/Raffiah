import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import GlobalStyle from '../../../GlobalStyle'
import SimpleHeader from '../../../../components/headers/SimpleHeader'
import { colors } from '../../../../utils/colors'
import OrderItemInfo from '../../../../components/cards/orderListCard/OrderItemInfo'
import { titleSmall } from '../../../../utils/fonts'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default function Home({ navigation }) {
    const flatList = useRef();
    const moveToTop = () => flatList.current.scrollToIndex({ index: 0 })
    const [positionY, setPositionY] = useState(0)
    const handleScroll = (event) => {
        // const positionX = event.nativeEvent.contentOffset.x;
        setPositionY(parseInt(event.nativeEvent.contentOffset.y))
        // if (parseInt(positionY) > 200) {
        //     console.log(parseInt(positionY));
        // }
    };
    return (
        <View style={GlobalStyle.rootContainer}>
            <SimpleHeader
                title={'Home'}
            />
            <View style={{ flex: 1 }} >
                <FlatList
                    ref={flatList}
                    data={[1]}
                    onScroll={handleScroll}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.contentContainer}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View>
                            < View style={GlobalStyle.driverSideMarginTop} />
                            {/* <View style={{ paddingHorizontal: wp(4), marginTop: hp(2) }}> */}
                            <Text style={[titleSmall,
                                { color: colors.neutral900 }]}>
                                New Orders
                            </Text>
                            {/* </View> */}
                            <View style={{}}>
                                <FlatList
                                    keyExtractor={(item, index) => index.toString()}
                                    // contentContainerStyle={styles.contentContainer}
                                    ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                                    showsVerticalScrollIndicator={false}
                                    data={[1, 2, 3]}
                                    renderItem={({ item }) => (
                                        <OrderItemInfo
                                            onPress={() => { navigation.navigate('OrderDetail') }}
                                        />
                                    )}
                                />
                                <View style={{ marginTop: hp(2) }} />
                                {/* <View style={{ paddingHorizontal: wp(4), marginTop: hp(2) }}> */}
                                <Text style={[titleSmall,
                                    { color: colors.neutral900 }]}>
                                    Orders
                                </Text>

                                <View style={{}}>
                                    <FlatList
                                        keyExtractor={(item, index) => index.toString()}
                                        // contentContainerStyle={styles.contentContainer}
                                        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                                        showsVerticalScrollIndicator={false}
                                        data={[1, 2, 3]}
                                        renderItem={({ item }) => (
                                            // <View style={{ marginVertical: hp(1) }}>
                                            <OrderItemInfo
                                                onPress={() => { navigation.navigate('OrderDetail') }}
                                            />
                                            // </View>
                                        )}
                                    />
                                </View>
                            </View>

                        </View>
                    )}
                />
            </View>
            {/* {parseInt(positionY) > 200 &&
                <TouchableOpacity style={styles.moveToTopArrow}
                    onPress={moveToTop}
                >
                    <MaterialIcons name='keyboard-arrow-up' size={40}
                        color={colors.neutral50} />
                </TouchableOpacity>
            } */}
        </View >
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
    moveToTopArrow: {
        width: 40, height: 40, borderRadius: 40 / 2,
        backgroundColor: colors.primary200,
        opacity: 0.8,
        elevation: 5,
        shadowColor: colors.neutral900,
        position: 'absolute',
        bottom: 10, right: 10,
        alignItems: 'center', justifyContent: 'center'
    }
})