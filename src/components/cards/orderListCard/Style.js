import { StyleSheet } from 'react-native'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { colors } from '../../../utils/colors'


export default StyleSheet.create({
    rootContainer: {
        flexDirection: 'row',
        borderRadius: 12,
        backgroundColor: colors.neutral50,
        // backgroundColor: colors.neutral100,
        elevation: 2,
        shadowColor: colors.neutral900,
    },
    firstContainer: {
        flex: 1,
    },
    secondContainer: {
        flex: 2,
        padding: 12,
    },
    contentIconWrapper: {
        flexDirection: 'row',
        marginTop: heightPercentageToDP(3),
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})