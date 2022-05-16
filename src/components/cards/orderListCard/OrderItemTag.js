import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import RoundButton from '../../buttons/RoundButton'
import Perfume from '.././../../assets/png/perfume.png'
import ImageBg from '../../ImageBg'
import { colors } from '../../../utils/colors'
import Style from './Style'
import { bodySmall, subtitleLarge, subtitleSmall } from '../../../utils/fonts'
import ActiveTag from '../../tags/ActiveTag'
import CancelTag from '../../tags/CancelTag'
import ProgressTag from '../../tags/ProgressTag'
import CompleteTag from '../../tags/CompleteTag'
export default function OrderItemTag({ onPress, screenName, item }) {
    return (
        // <TouchableOpacity style={{ width: '100%' }}
        //     onPress={onPress}
        //     activeOpacity={0.8}
        // >
        <TouchableOpacity style={Style.rootContainer}
            onPress={onPress}
            activeOpacity={0.8}
            disabled={screenName === 'DeliverDetail' ? true : false}
        >
            <View style={Style.firstContainer}>
                <ImageBg image={Perfume} />
            </View>
            <View style={Style.secondContainer}>
                <View>
                    <Text
                        // style={[subtitleSmall, { color: colors.neutral900 }]}>Shalimar Cologne Guerlain</Text>
                        style={[subtitleSmall, { color: colors.neutral900 }]}>{item?.title}</Text>
                    <View style={{}} />
                    <Text
                        numberOfLines={2}
                        style={[bodySmall, { color: colors.neutral700 }]}>
                        {item?.description}</Text>
                </View>
                <View style={Style.contentIconWrapper}>
                    <Text
                        style={[subtitleLarge, { color: colors.primary200 }]}
                    >${item?.price}</Text>

                    {item?.status === 'Active' ?
                        <ActiveTag
                            title={'Active'}
                        />
                        :
                        item?.status === 'Cancel' ?
                            <CancelTag
                                title={'Cancelled'}
                            />
                            :
                            item?.status === 'Progress' ?
                                <ProgressTag
                                    title={'In Progress'}
                                />
                                :
                                item?.status === 'Complete' ?
                                    <CompleteTag
                                        title={'Completed'}
                                    />
                                    :

                                    null
                    }
                    {/* {item.status === 'Active'}
                    <ActiveTag
                        title={'Active'}
                    />
                    :
                    {item.status === 'Cancel' ?
                        <CancelTag
                            title={'Cancel'} />
                        : null

                    } */}

                </View>
            </View>
            {/* </View> */}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

})