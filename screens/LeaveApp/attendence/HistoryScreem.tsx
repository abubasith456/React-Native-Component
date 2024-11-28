import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AttendanceHistory = () => {
    const [markedDates, setMarkedDates] = useState({});

    useEffect(() => {
        (async () => {
            const clockInTime = await AsyncStorage.getItem('clockInTime');
            const clockOutTime = await AsyncStorage.getItem('clockOutTime');

            if (clockInTime) {
                const clockInDate = clockInTime.split(',')[0]; // Extract date only
                console.log(clockInDate)
                setMarkedDates((prev) => ({
                    ...prev,
                    [clockInDate]: { dots: [{ key: 'clockIn', color: 'green' }] },
                }));
            }

            if (clockOutTime) {
                const clockOutDate = clockOutTime.split(',')[0]; // Extract date only
                setMarkedDates((prev) => ({
                    ...prev,
                    [clockOutDate]: { dots: [{ key: 'clockOut', color: 'red' }] },
                }));
            }
        })();
    }, []);

    return (
        <View style={styles.container}>
            <Calendar
                markingType="multi-dot"
                markedDates={markedDates}
                theme={{
                    todayTextColor: '#00adf5',
                    arrowColor: '#00adf5',
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default AttendanceHistory;
