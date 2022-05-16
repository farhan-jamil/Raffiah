import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 10,
        elevation: 2,
        shadowColor: colors.neutral900,
    },
    roundButton: {
        backgroundColor: colors.neutral50,
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        alignItems: 'center', justifyContent: 'center',
        elevation: 2,
        shadowColor: colors.neutral900,
    }

})