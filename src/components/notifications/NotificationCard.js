import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { colors } from '../../utils/colors'
import NotificationImage from './NotificationImage'
import { SwipeListView } from 'react-native-swipe-list-view';
import { bodySmall, caption, subtitleLarge } from '../../utils/fonts'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function NotificationCard() {
    const [dataA, setData] = useState([
        // {
        //     key: 1,
        //     title: 'First slide',
        //     Description: 'asdjasbjbdmasbdjsabdmasbjdasbjdsabmc ajsbcjsabduasbamsc masbcjsabjasbdjasbjdbasjdbjasbdjasbjdbjasbdjsada'
        // },
        // {
        //     key: 2,
        //     title: 'First slide',
        //     Description: 'asdjasbjbdmasbdjsabdmasbjdasbjdsabmc ajsbcjsabduasbamsc masbcjsabjasbdjasbjdbasjdbjasbdjasbjdbjasbdjsada'
        // },
        {
            key: 3,
            title: 'First slide',
            name: 'Casey Mills',
            Description: 'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna'
        },
        {
            key: 4,
            title: 'First slide',
            name: 'Estelle Jones',
            Description: 'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna'
        },
        {
            key: 5,
            title: 'First slide',
            name: 'Tammy Rogers',
            Description: 'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna'
        },
        {
            key: 6,
            title: 'First slide',
            name: 'Jeff Palmer',
            Description: 'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna'
        },
        {
            key: 7,
            title: 'First slide',
            name: 'Ervin Arnold',
            Description: 'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna'
        },
        {
            key: 8,
            title: 'First slide',
            name: 'Kelli French',
            Description: 'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna'
        },
        {
            key: 9,
            title: 'First slide',
            Description: 'Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna'
        },
    ])
    return (
        // for elevetaion of card we have to give margin directly to card any other place noting workin
        //   padding also not working
        <View style={{ flex: 1, backgroundColor: colors.neutral100 }}>
            < SwipeListView
                data={dataA}
                rightOpenValue={-80}
                stopRightSwipe={-80}
                // style={{ flex: 1,backgroundColor:'pink' }}
                contentContainerStyle={{ flexGrow: 1 }}
                ItemSeparatorComponent={() => <View style={{}} />}
                showsVerticalScrollIndicator={false}
                disableRightSwipe={true}
                renderHiddenItem={(data, rowMap) => (
                    <View style={styles.backContainer}
                    >
                        <TouchableOpacity style={styles.deleteIcon}
                            activeOpacity={0.8}
                        >
                            <MaterialCommunityIcons
                                name='delete'
                                color={colors.error500}
                                size={40}
                            />
                        </TouchableOpacity>
                    </View>

                )}
                renderItem={(data, rowMap) => (

                    <View style={styles.frontContainer}>
                        <View style={styles.frontFirstContainer}>
                            <NotificationImage />
                        </View>
                        <View style={styles.frontSecondContainer}>
                            <View style={styles.titletextWrapper}>
                                <Text style={[subtitleLarge, { color: colors.primary200 }]}>{data.item.name}</Text>
                                <Text style={[caption, { color: colors.neutral700 }]}>2:29 PM</Text>
                            </View>
                            <Text style={[bodySmall, {
                                color: colors.neutral900,
                                paddingTop: wp(1)
                            }]} >{data.item.Description}
                            </Text>
                        </View>
                    </View>

                )
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    frontContainer: {
        // backgroundColor: 'pink',
        backgroundColor: colors.neutral50,
        // backgroundColor: colors.neutral100,
        borderRadius: 10,
        marginHorizontal: wp(4),
        marginVertical: hp(1),
        padding: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        // shadowColor: colors.neutral900,
        // elevation: 3,
        flexDirection: 'row',
    },
    deleteIcon: {
        height: '100%',
        alignItems: 'center', justifyContent: 'center',
        paddingHorizontal: 10
    },
    backContainer: {
        flex: 1,
        backgroundColor: colors.error50,
        borderRadius: 10,
        marginHorizontal: wp(4),
        marginVertical: hp(1),
        padding: 12,
        // shadowColor: colors.neutral900,
        // elevation:3,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    frontFirstContainer: {
        flex: 0.3,
        alignItems: 'center'
    },
    frontSecondContainer: {
        flex: 1,
    },
    titletextWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})