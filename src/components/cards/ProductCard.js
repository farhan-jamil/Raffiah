import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import CloudPng from '../../assets/png/cloud.png'
import AntDesign from 'react-native-vector-icons/AntDesign'
import RoundButton from '../buttons/RoundButton'
import { bodySmall, caption, subtitleLarge,subtitleSmall } from '../../utils/fonts'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function ProductCard({ onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.9}
        >
            <ImageBackground
                source={CloudPng}
                imageStyle={{ borderRadius: 10 }}
                style={styles.imageBg}>
                <View style={styles.firstContentWrapper}>
                    <Text style={[caption, { color: colors.primary200 }]}>
                        New
                    </Text>
                    <AntDesign name='hearto' size={24} color={colors.neutral600} />
                </View>
                <View style={{ alignSelf: 'center', marginVertical: 8 }}>
                    <Image
                        source={require('../../assets/png/tShirt.png')}
                        style={styles.image} />
                </View>
                {/* <View style={styles.secondContentWrapper}> */}

                <View >
                    <Text numberOfLines={1}
                        style={[subtitleSmall,
                            { color: colors.neutral900 }]}>
                        Graphic Shirts</Text>
                    <Text
                        numberOfLines={1}
                        style={[bodySmall,
                            { color: colors.neutral200 }]}>
                        Lorem ipsum dolor sit amet</Text>

                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center', marginTop: 4
                }}>
                    <Text
                        style={[subtitleLarge,
                            { color: colors.primary200 }]}>
                        $12.58 </Text>
                    <RoundButton />
                </View>

                {/* </View> */}
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imageBg: {
        borderRadius: 10,
        padding: 16,
        elevation: 2, shadowColor: 'black',
        width: wp(43)
        // width: widthPercentageToDP('100%') / 2.2,
        // alignSelf: 'baseline'
    },
    firstContentWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: {
        width: 90,
        height: 90
    },
    secondContentWrapper: {
        // marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})
// import { StyleSheet, Text, View, ImageBackground } from 'react-native'
// import React from 'react'
// import { colors } from '../../utils/colors'
// import Cloud from '../../assets/png/cloud.png'
// export default function Card() {
//     return (
//         <View style={{
//             flex: 1, backgroundColor: 'green'
//         }}>
//             <View style={{ height: 200, width: 200, backgroundColor: 'red' }}>
//                 <ImageBackground
//                     style={{
//                         backgroundColor: 'blue',
//                         // flex: 1
//                     }}
//                     imageStyle={{
//                         height: 100, width: 100,
//                         // position: 'absolute', bottom: 0
//                     }}
//                     source={require('../../assets/png/cloud.png')}
//                     resizeMode='contain'
//                 >
//                     <Text>Card</Text>
//                 </ImageBackground>
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({})