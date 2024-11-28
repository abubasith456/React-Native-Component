import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CheckInOutScreen from './CheckInOutScreen';
import AttendanceHistory from './HistoryScreem';

const Stack = createStackNavigator();

export default function HomeScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Attendance">
                <Stack.Screen name="Attendance" component={CheckInOutScreen} />
                <Stack.Screen name="Attendance History" component={AttendanceHistory} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
