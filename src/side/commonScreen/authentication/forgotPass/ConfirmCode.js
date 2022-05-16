import { StyleSheet, View, ScrollView, Text } from 'react-native'
import React, { useState } from 'react'
import GlobalStyle from '../../../GlobalStyle'
import PrimaryButton from '../../../../components/buttons/PrimaryButton'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import LeftIconHeader from '../../../../components/headers/LeftIconHeader'
import ForgotPassTwo from '../../../../assets/svg/ForgotPassTwo.svg'
import { bodyLarge, bodySmall } from '../../../../utils/fonts'
import { colors } from '../../../../utils/colors'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Style from './Style'
export default function ResetPassword({ navigation }) {
    const CELL_COUNT = 4;
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    return (
        <View style={GlobalStyle.rootContainer}>
            <LeftIconHeader
                 title='Forgot Password'
                onPress={() => { navigation.goBack() }}
            />
            <ScrollView
                contentContainerStyle={GlobalStyle.scrollViewContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={GlobalStyle.forgetScreens1stContainer}>
                    <View style={Style.imageContainer}>

                        <ForgotPassTwo
                            width={200}
                            height={200}
                        />
                    </View>
                    <Text style={Style.descriptionText}>
                        Enter 4 digits code  that you received on your
                        email.
                    </Text>
                    <View style={{ marginTop: hp(2) }} />
                    <CodeField
                        ref={ref}
                        {...props}
                        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell,
                                    bodyLarge, { color: colors.neutral900 }
                                ]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        )}
                    />
                </View>
                {/* <View style={[GlobalStyle.authenticationSecondContainer,{backgroundColor:'green'}]}> */}
                <View style={GlobalStyle.forgetScreens2ndContainer}>

                    <PrimaryButton
                        title='Verify'
                        onPress={() => { navigation.navigate('ResetPassword') }}
                    // onPress={() => { console.warn('Verify') }}
                    />
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    codeFieldRoot: {
        // backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    cell: {
        width: 60,
        height: 60,
        borderRadius: 10,
        textAlign: 'center',
        lineHeight: hp(6.5),
        elevation: 3,
        shadowColor: colors.neutral900,
        backgroundColor: colors.neutral50,
        // backgroundColor: colors.neutral100,
    },
    focusCell: {
        borderColor: colors.primary200,
        // borderColor: '#000',
    },
});