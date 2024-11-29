import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CheckInOutScreen from './CheckInOutScreen';
import AttendanceHistory from './HistoryScreem';
import { Button } from 'react-native';

const Stack = createStackNavigator();

export default function AttendanceMain() {
    return (
        <Stack.Navigator initialRouteName="Attendance">
            <Stack.Screen name="Attendance" component={CheckInOutScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Attendance History" component={AttendanceHistory} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    );
}
