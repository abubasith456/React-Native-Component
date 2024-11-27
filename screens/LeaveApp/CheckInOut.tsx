import React, { useState, useEffect } from "react";
import { View, Text, Button, Alert, StyleSheet } from "react-native";
import MapView, { Marker, Circle } from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";
import { getDistance, } from "geolib";

const predefinedLocations = [
    { id: "1", name: "Office 1", latitude: 37.7749, longitude: -122.4194, radius: 100 },
    { id: "2", name: "Office 2", latitude: 34.0522, longitude: -118.2437, radius: 100 },
    { id: "3", name: "Office 3", latitude: 40.7128, longitude: -74.006, radius: 100 },
];

type LocationType = { latitude: number; longitude: number } | null;

const ClockInOut = () => {
    const [location, setLocation] = useState<LocationType>(null);
    const [clockedIn, setClockedIn] = useState(false);
    const [lastAction, setLastAction] = useState("");

    useEffect(() => {
        // Get current location
        Geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            (error) => Alert.alert("Error", "Unable to fetch location.")
        );
    }, []);

    const handleClockInOut = () => {
        if (!location) {
            Alert.alert("Error", "Location not available.");
            return;
        }

        // Check proximity to predefined locations
        const isInAllowedLocation = predefinedLocations.some((loc) => {
            const distance = getDistance(location, { latitude: loc.latitude, longitude: loc.longitude });
            return distance <= loc.radius;
        });

        if (!isInAllowedLocation) {
            Alert.alert("Error", "You are not within an approved location.");
            return;
        }

        // Update state
        const action = clockedIn ? "Clock-Out" : "Clock-In";
        setClockedIn(!clockedIn);
        setLastAction(`${action} at ${new Date().toLocaleTimeString()}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Clock-In/Clock-Out</Text>
            <MapView
                style={styles.map}
                region={{
                    latitude: location?.latitude || 37.7749,
                    longitude: location?.longitude || -122.4194,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                {location && <Marker coordinate={location} title="Your Location" />}
                {predefinedLocations.map((loc) => (
                    <Circle
                        key={loc.id}
                        center={{ latitude: loc.latitude, longitude: loc.longitude }}
                        radius={loc.radius}
                        strokeColor="rgba(0, 150, 0, 0.5)"
                        fillColor="rgba(0, 150, 0, 0.2)"
                    />
                ))}
            </MapView>
            <Text style={styles.status}>Status: {clockedIn ? "Clocked In" : "Not Clocked In"}</Text>
            <Text style={styles.timestamp}>{lastAction || "No actions yet."}</Text>
            <Button
                title={clockedIn ? "Clock Out" : "Clock In"}
                onPress={handleClockInOut}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    map: {
        flex: 1,
        height: 300,
        marginBottom: 10,
    },
    status: {
        fontSize: 16,
        marginBottom: 5,
    },
    timestamp: {
        fontSize: 14,
        color: "gray",
        marginBottom: 20,
    },
});

export default ClockInOut;
