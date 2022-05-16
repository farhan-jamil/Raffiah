import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../utils/colors'

export default StyleSheet.create({
    container: {
        backgroundColor: colors.neutral50,
        // paddingVertical: 8,
        // paddingHorizontal: 16,
        padding: 4,
        paddingHorizontal: 8,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    statusTagContainer: {
        backgroundColor: colors.neutral50,
        paddingVertical: 4,
        paddingHorizontal: 8,
        // padding: 4,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'

    }
})