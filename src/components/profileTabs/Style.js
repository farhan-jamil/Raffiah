import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'green',
        // backgroundColor: colors.neutral100,
        paddingHorizontal: wp(4),
        paddingVertical: hp(2),
        // elevation: 5,
        // shadowColor: colors.neutral900
    },
    leftIconbackground: {
        width: 30, height: 30,
        backgroundColor: colors.primary200,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
})