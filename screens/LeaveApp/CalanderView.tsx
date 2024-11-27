import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const DashboardCalendar = () => {
    // Example leave data
    const [markedDates, setMarkedDates] = useState({
        '2024-11-01': { marked: true, dotColor: 'red', customStyles: { container: { backgroundColor: 'red' } } }, // Company leaves
        '2024-11-05': { marked: true, dotColor: 'blue', customStyles: { container: { backgroundColor: 'blue' } } }, // Employee leaves
        '2024-1-10': { marked: true, dotColor: 'green', customStyles: { container: { backgroundColor: 'green' } } }, // Upcoming leaves
    });

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Calendar
                        // Marked Dates
                        markedDates={markedDates}
                        // Enable custom styles
                        markingType={'custom'}
                        // Customize header and style
                        theme={{
                            selectedDayBackgroundColor: '#00adf5',
                            todayTextColor: '#00adf5',
                            arrowColor: 'orange',
                            selectedDayTextColor: 'white',
                        }}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
});

export default DashboardCalendar;
