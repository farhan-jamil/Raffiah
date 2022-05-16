import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import FirstImage from '../../../assets/svg/Ob_One.svg'
import SecondImage from '../../../assets/svg/Ob_Two.svg'
import ThreeImage from '../../../assets/svg/Ob_Three.svg'
import { colors } from '../../../utils/colors'
const SkipButton = ({ ...props }) => {
    return (

        < TouchableOpacity   {...props} style={{ marginLeft: 16 }}>
            < Text style={[{ color: colors.primary200 }]} >Skip</Text >
        </TouchableOpacity >
    )
}
const NextButton = ({ ...props }) => {
    return (
        < TouchableOpacity   {...props} style={{ marginRight: 16 }}>
            < Text style={[{ color: colors.primary200 }]} >Next</Text >
        </TouchableOpacity >
    )
}
const DoneButton = ({ ...props }) => {
    return (
        < TouchableOpacity   {...props} style={{ marginRight: 16 }}>
            < Text style={[{ color: colors.primary200 }]}>Get Started</Text >
        </TouchableOpacity >
    )
}
const Dots = ({ selected }) => {
    return (
        <View style={{
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: selected ? colors.primary200 : colors.neutral400,
            marginRight: 8
        }} />

    )
}


export default function OnboardingScreen({ navigation }) {
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
        <Onboarding
            pages={data}
            onSkip={() => navigation.navigate('SignIn')}
            onDone={() => navigation.navigate('SignIn')}
            SkipButtonComponent={SkipButton}
            NextButtonComponent={NextButton}
            DoneButtonComponent={DoneButton}
            // DotComponent={Dots}
            DotComponent={Dots}
            bottomBarColor={colors.neutral100}
        />
    )
}

const styles = StyleSheet.create({})