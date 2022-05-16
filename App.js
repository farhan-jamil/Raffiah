import { StyleSheet, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import UserStackNavigator from './src/side/userScreens/navigations/UserStackNavigator';
import DriverStackNavigator from './src/side/driverScreens/navigations/DriverStackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      {/* <DriverStackNavigator /> */}
      <UserStackNavigator />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})