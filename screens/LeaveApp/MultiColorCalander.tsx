import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import CustomCalender, { MarkedDatesCircle, MarkedDatesDot } from '../../components/Uniify/CustomCalendar';

const MultiColorSelectionCalendar = () => {

    {/* Marked Date - Dot */ }
    const markedDateDaot: MarkedDatesDot = {
        '2024-11-01': {
            dots: [
                { key: 'leaveTaken', color: 'red' },
                { key: 'publicHoliday', color: 'green' },
            ],
        },
        '2024-11-05': {
            dots: [{ key: 'leaveTaken', color: 'red' }],
        },
        '2024-11-10': {
            dots: [{ key: 'publicHoliday', color: 'green' }],
        },
    };

    {/* Legend Item - Dot */ }
    const legendItemsDot = [
        { label: 'Leave Taken', color: 'red' },
        { label: 'Public Holiday', color: 'green' },
        { label: 'Personal Leave', color: 'blue' },
    ];

    {/* Marked Date - Circle */ }
    const markedDatesCircle: MarkedDatesCircle = {
        '2024-11-01': { circle: { color: 'green', textColor: 'white' } },
        '2024-11-10': { circle: { color: 'orange', textColor: 'black' } },
        '2024-11-15': { circle: { color: 'black', textColor: 'white' } },
    };

    {/* Legend Item - Circle */ }
    const legendItemsCircle = [
        { label: 'Leave Taken', color: 'green' },
        { label: 'Public Holiday', color: 'orange' },
        { label: 'Personal Leave', color: 'black' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <CustomCalender markedDates={markedDatesCircle}
                legendItems={legendItemsCircle} />
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default MultiColorSelectionCalendar;
