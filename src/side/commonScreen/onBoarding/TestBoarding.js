import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FirstImage from '../../../assets/svg/Ob_One.svg'
import SecondImage from '../../../assets/svg/Ob_Two.svg'
import ThreeImage from '../../../assets/svg/Ob_Three.svg'
import { colors } from '../../../utils/colors'
import Swiper from 'react-native-swiper';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import PrimaryButton from '../../../components/buttons/PrimaryButton';

export default function TestBoarding({ navigation }) {
    const data = [
        {
            image: <FirstImage />,
            backgroundColor: colors.neutral100,
            title: 'View all kinds products and branded products',
            subtitle: 'You can see all products with sizes, colors and related item with different styles'
        },
        {
            image: <SecondImage />,
            backgroundColor: colors.neutral100,
            title: 'Find all the products for your essentials',
            subtitle: 'Upload the image and this app will find the similar item that you want!'
        },
        {
            image: <ThreeImage />,
            backgroundColor: colors.neutral100,
            title: 'Easy Method of Payment',
            subtitle: 'Easy payment method for customers to order more products'
        },

    ]

    return (
        <View style={{
            flex: 1,
            // backgroundColor: 'pink',
            backgroundColor: colors.neutral100,
            paddingHorizontal: wp(4)
        }}>
            <View style={{
                flex: 1,
                // backgroundColor: 'green',
            }}>
                <Swiper
                    showsButtons={false}
                    loop={true}
                    autoplay={true}
                    // automaticallyAdjustContentInsets={true}
                    dot={<View style={styles.inactiveDot} />}
                    activeDot={< View style={styles.activeDot} />}
                // paginationStyle={{
                //     position: 'absolute',
                //     bottom: hp(25)
                // }}
                // containerStyle={{
                //     flex: 1, height: hp(100),
                //     // backgroundColor: 'blue'
                // }}
                >
                    {
                        data.map((item, index) => {
                            return (
                                <View
                                    key={index}
                                    style={{
                                        flex: 1,
                                        // backgroundColor: 'yellow',
                                        // paddingHorizontal: wp(4)
                                    }}
                                >
                                    <View style={styles.imageContainer}>
                                        {item.image}
                                    </View>
                                    <View style={{ flex: 0.7, }}>
                                        {/* backgroundColor: 'pink', */}
                                        <Text style={styles.title}>{item.title}</Text>
                                        <Text style={styles.subtitle}>{item.subtitle}</Text>
                                    </View>


                                </View>
                            )
                        })
                    }
                </Swiper>
            </View>
            <View style={{
                flex: 0.2
                // ,backgroundColor:'yellow'
            }}>
                <View style={{ paddingVertical: hp(2) }}>
                    <PrimaryButton
                        onPress={() => navigation.navigate('SignIn')}
                        title="Let's Get Started"
                    />
                </View>

            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    inactiveDot: {
        backgroundColor: colors.neutral700, width: 8,
        height: 8, borderRadius: 4, margin: 3
    },
    activeDot: {
        backgroundColor: colors.primary200,
        width: 12, height: 8, borderRadius: 4,
        margin: 3
    },
    imageContainer: {
        flex: 1,
        // backgroundColor: 'orange',
        alignItems: 'center', justifyContent: 'center',
    },
    title: {
        fontSize: 24, fontFamily: 'poppins.medium',
        color: colors.primary200, textAlign: 'center'
    },
    subtitle: {
        marginTop: hp(3),
        fontSize: 18,
        fontFamily: 'poppins.regular',
        color: colors.neutral700, textAlign: 'center'
    }
})