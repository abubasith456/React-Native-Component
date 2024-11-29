import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFormattedTimestamp } from '../../../utils/SystemUtil';

const officeLocations = [
    { name: 'Office A', latitude: 37.7749, longitude: -122.4194 },
    { name: 'Office B', latitude: 34.0522, longitude: -118.2437 },
    { name: 'Office C', latitude: 37.785834, longitude: -122.406417 },
];

const CheckInOutScreen = ({ navigation }: any) => {
    const [clockInTime, setClockInTime] = useState("");
    const [clockOutTime, setClockOutTime] = useState("");
    const [elapsedTime, setElapsedTime] = useState(0); // Timer in seconds
    const [isCheckedIn, setIsCheckedIn] = useState(false); // Check-in status
    const timerRef = useRef<NodeJS.Timeout | null>(null); // Reference to timer interval

    useEffect(() => {
        // Clear timer on component unmount
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    {/* Validate the Employee location */ }
    const validateLocation = async () => {
        const currentLocation = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = currentLocation.coords;

        const isValid = officeLocations.some(
            (loc) => Math.abs(loc.latitude - latitude) < 0.01 && Math.abs(loc.longitude - longitude) < 0.01
        );

        return isValid;
    };

    const handleClockIn = async () => {
        if (await validateLocation()) {
            const timestamp = getFormattedTimestamp();
            setClockInTime(timestamp);
            await AsyncStorage.setItem('clockInTime', timestamp);
            setIsCheckedIn(true);
            setElapsedTime(0); // Reset elapsed time
            Alert.alert('Success', `Clocked in at ${timestamp}`);

            // Start the timer
            timerRef.current = setInterval(() => {
                setElapsedTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            Alert.alert('Error', 'You are not at an approved location.');
        }
    };

    const handleClockOut = async () => {
        if (await validateLocation()) {
            const timestamp = getFormattedTimestamp();
            setClockOutTime(timestamp);
            await AsyncStorage.setItem('clockOutTime', timestamp);
            setIsCheckedIn(false);
            Alert.alert('Success', `Clocked out at ${timestamp}`);

            // Stop the timer
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        } else {
            Alert.alert('Error', 'You are not at an approved location.');
        }
    };

    // Format elapsed time as HH:mm:ss
    const formatElapsedTime = () => {
        const hours = Math.floor(elapsedTime / 3600);
        const minutes = Math.floor((elapsedTime % 3600) / 60);
        const seconds = elapsedTime % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <View style={styles.container}>
            {isCheckedIn ? (
                <Text style={styles.timer}>Elapsed Time: {formatElapsedTime()}</Text>
            ) : (
                <Text style={styles.timer}>You are not checked in.</Text>
            )}
            <Text>Clock-In Time: {clockInTime || 'Not Clocked In'}</Text>
            <Text>Clock-Out Time: {clockOutTime || 'Not Clocked Out'}</Text>
            <View style={{ margin: 10 }}>
                <Button title="Clock In" onPress={handleClockIn} disabled={isCheckedIn} />
            </View>
            <View style={{ margin: 10 }}>
                <Button title="Clock Out" onPress={handleClockOut} disabled={!isCheckedIn} />
            </View>
            <View style={{ margin: 10 }}>
                <Button title="View Attendance History" onPress={() => navigation.navigate('Attendance History')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    timer: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#00adf5',
    },
});

export default CheckInOutScreen;
