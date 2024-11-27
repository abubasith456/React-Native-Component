import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

// LegendItem type format
type LegendItem = {
    label: string;
    color: string;
};

// Marked Date type format for Dot
export type MarkedDatesDot = {
    [date: string]: {
        dots: { key: string; color: string }[];
    };
};

// Marked Date type format for Circle
export type MarkedDatesCircle = {
    [date: string]: {
        circle: { color: string; textColor: string };
    };
};

// Props for CustomCalendar
type Props = {
    markedDates: MarkedDatesDot | MarkedDatesCircle;
    legendItems: LegendItem[];
};

const CustomCalendar: React.FC<Props> = ({ markedDates, legendItems }) => {
    // Determine the marking type based on markedDates format
    const isDotMarking = Object.values(markedDates)[0]?.dots !== undefined;

    // Transform MarkedDatesCircle to customStyles if necessary
    const transformedMarkedDates = isDotMarking
        ? (markedDates as MarkedDatesDot)
        : Object.fromEntries(
            Object.entries(markedDates).map(([date, { circle }]) => [
                date,
                {
                    customStyles: {
                        container: {
                            backgroundColor: circle.color,
                            borderRadius: 20,
                        },
                        text: {
                            color: circle.textColor,
                        },
                    },
                },
            ])
        );

    return (
        <View style={styles.container}>
            <Calendar
                markingType={isDotMarking ? 'multi-dot' : 'custom'}
                markedDates={transformedMarkedDates}
                theme={{
                    todayTextColor: '#00adf5',
                    arrowColor: '#00adf5',
                    dotStyle: {
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                    },
                    monthTextColor: '#333',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: 'bold',
                    selectedDayBackgroundColor: '#00adf5',
                }}
            />
            {/* Dynamic legend rendering */}
            <View style={styles.legendContainer}>
                {legendItems.map((item, index) => (
                    <View key={index} style={styles.legendItem}>
                        <View style={[styles.legendDot, { backgroundColor: item.color }]} />
                        <Text style={styles.legendText}>{item.label}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    legendContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 20,
        paddingHorizontal: 10,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        width: '45%',
    },
    legendDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginRight: 5,
    },
    legendText: {
        fontSize: 14,
        color: '#333',
        flexShrink: 1,
    },
});

export default CustomCalendar;

