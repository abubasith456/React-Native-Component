import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Dimensions,
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProgressCard from '../../components/Uniify/ProgressCard';
const SCREEN_WIDTH = Dimensions.get('window').width;


type LeaveData = {
    categories: { name: string; total: number; used: number }[];
    leaveStatus: { date: string; category: string; status: string }[];
    [key: string]: any;
};

const fetchLeaveData = async () => {
    // Simulated API response
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                categories: [
                    { name: 'Vacation Leave', total: 5, used: 3 },
                    { name: 'Sick Leave', total: 5, used: 2 },
                    { name: 'Maternity Leave', total: 3, used: 1 },
                ],
                leaveStatus: [
                    { date: '2024-11-01', category: 'Vacation Leave', status: 'Approved' },
                    { date: '2024-11-02', category: 'Sick Leave', status: 'Rejected' },
                    { date: '2024-11-03', category: 'Vacation Leave', status: 'Approved' },
                ],
            });
        }, 5000); // Simulated delay
    });
};

function LeaveScreen() {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'availability', title: 'Availability' },
        { key: 'leaveStatus', title: 'Leave Status' },
    ]);
    const [leaveData, setLeaveData] = useState<LeaveData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchLeaveData();
                setLeaveData(data as LeaveData);
            } catch (error) {
                console.error('Failed to fetch leave data:', error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    const AvailabilityTab = () => {
        if (loading) {
            return (
                <View style={styles.progressContainer}>
                    <ActivityIndicator size="large" color="blue" />
                </View>
            );
        }

        return (
            <FlatList
                style={{ flex: 1, marginVertical: 10 }}
                data={leaveData?.categories}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2} // Two items per row
                columnWrapperStyle={styles.row} // Style for rows
                renderItem={({ item }) => {
                    const progress = (item.used / item.total) * 100; // Calculate percentage
                    return (
                        <View style={styles.cardWrapper}>
                            <ProgressCard
                                name={item.name}
                                used={item.used}
                                total={item.total}
                                fill={progress}
                            />
                        </View>
                    );
                }}
            />
        );
    };

    const LeaveStatusTab = () => {
        if (loading) {
            return (
                <View style={styles.progressContainer}>
                    <ActivityIndicator size="large" color="blue" />
                </View>
            );
        }

        const approvedLeaves = leaveData?.leaveStatus.filter(
            (leave) => leave.status === 'Approved'
        );

        return (
            <FlatList
                data={approvedLeaves}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.date}</Text>
                        <Text style={styles.subtitle}>
                            Category: {item.category}, Status: {item.status}
                        </Text>
                    </View>
                )}
            />
        );
    };

    const renderScene = SceneMap({
        availability: AvailabilityTab,
        leaveStatus: LeaveStatusTab,
    });

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    renderTabBar={(props) => (
                        <TabBar
                            {...props}
                            indicatorStyle={{ backgroundColor: 'blue' }}
                            style={{ backgroundColor: 'white' }}
                            labelStyle={{ color: 'black', fontWeight: 'bold' }}
                            activeColor="blue"
                            inactiveColor="gray"
                        />
                    )}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default LeaveScreen;

const styles = StyleSheet.create({
    row: {
        justifyContent: 'space-between', // Space items evenly in the row
    },
    cardWrapper: {
        width: (SCREEN_WIDTH) / 2, // Dynamic width: Half the screen width minus padding
    },
    progressContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    circularProgressContainer: {
        alignItems: 'center',
        marginVertical: 16,
    },
    textOverlay: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    categoryText: {
        fontSize: 14,
        color: 'gray',
    },
    item: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' },
    title: { fontSize: 16, fontWeight: 'bold' },
    subtitle: { fontSize: 14, color: '#555' },
});
