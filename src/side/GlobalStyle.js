import { StyleSheet } from 'react-native'
import { colors } from '../utils/colors'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
export default StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: colors.neutral100
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    authenticationFirstContainer: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    authenticationSecondContainer: {
        flex: 0.2,
        // backgroundColor: 'red',
        paddingHorizontal: wp(4),
        paddingVertical: hp(2)
    },
    authenticationTextWrapperSecondCont: {
        marginTop: hp(1),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    screenFirstContainer: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    screenSecondContainer: {
        flex: 0.1,
        paddingHorizontal: wp(4),
        paddingVertical: hp(2)
    },
    driverSideMarginTop: {
        marginTop: hp(2)
    },
    forgetScreens1stContainer: {
        flex: 1,
        paddingHorizontal: wp(4),
        // backgroundColor: 'yellow'
    },
    forgetScreens2ndContainer: {
        // backgroundColor: 'green',
        flex: 1.3,
        paddingHorizontal: wp(4),
        paddingVertical: hp(2)
    },
    bottomTabContainer: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: colors.neutral100,
        // backgroundColor: 'yellow',
        borderTopWidth: 1.5,
    },
    bottomTabImageContainer: {
        width: 24, height: 24,
        //  backgroundColor: 'pink' 
    },
    bottomTabtextStyle: {
        marginTop: 1,
        fontSize: 10,
    }

})