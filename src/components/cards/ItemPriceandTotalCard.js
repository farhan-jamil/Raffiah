import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import { bodySmall, subtitleLarge, } from '../../utils/fonts'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function ItemPriceandTotalCard() {
    return (
        <View style={{
            // backgroundColor: colors.primary50,
            backgroundColor:colors.neutral50,
            borderRadius: 8,
            elevation: 2,
            shadowColor: colors.neutral900,
        }}>
            <View style={{
                backgroundColor: colors.neutral50, padding: 12,
                borderTopRightRadius: 8, borderTopLeftRadius: 8
            }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.firstHalf}>
                        <Text style={[bodySmall, { color: colors.neutral700 }]}>Item Name</Text>

                    </View>
                    <View style={styles.secondHalf}>
                        <Text style={[bodySmall, { color: colors.neutral700 }]}>Quantity</Text>
                    </View>
                    <View style={styles.thirdHalf}>
                        <Text style={[bodySmall, { color: colors.neutral700 }]}>Price</Text>
                    </View>
                </View>
                <FlatList
                    data={[1]}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: 'row', paddingVertical: hp(1) }}>
                            <View style={styles.firstHalf}>
                                <Text style={[subtitleLarge, { color: colors.neutral900 }]}>Item Name</Text>

                            </View>
                            <View style={styles.secondHalf}>
                                <Text style={[subtitleLarge,
                                    { color: colors.primary200 }]}>2</Text>
                            </View>
                            <View style={styles.thirdHalf}>
                                <Text style={[subtitleLarge,
                                    { color: colors.primary200 }]}>$1200</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
            <View style={{
                backgroundColor: colors.primary50, alignItems: 'center',
                justifyContent: 'space-between', flexDirection: 'row',
                padding: 12, borderBottomRightRadius: 8,
                borderBottomLeftRadius: 8
            }}>
                <Text style={[subtitleLarge, { color: colors.neutral50 }]}>Total</Text>
                <Text style={[subtitleLarge, { color: colors.primary200 }]}>$124</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    firstHalf: {
        flex: 1,
        // backgroundColor: 'pink'
    },
    secondHalf: {
        flex: 0.5,
        // backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    },
    thirdHalf: {
        flex: 0.5,
        // backgroundColor: 'pink',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },

})