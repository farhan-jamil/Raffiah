import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalStyle from '../../../GlobalStyle'
import SimpleHeader from '../../../../components/headers/SimpleHeader'
import NotificationCard from '../../../../components/notifications/NotificationCard'
export default function Notification() {
  return (
    <View style={GlobalStyle.rootContainer}>
      <SimpleHeader
        title={'Notification'}
      />
      {/* <View style={GlobalStyle.driverSideMarginTop}> */}
        <NotificationCard />
      {/* </View> */}
    </View>
  )
}

const styles = StyleSheet.create({})