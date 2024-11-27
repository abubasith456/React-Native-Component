import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

type ProgressCardProps = {
    size?: number;
    width?: number;
    fill: number; // Progress percentage
    tintColor?: string;
    backgroundColor?: string;
    name: string; // Category name
    used: number; // Used leave count
    total: number; // Total leave count
};

const ProgressCard: React.FC<ProgressCardProps> = ({
    size = 150,
    width = 10,
    fill,
    tintColor = 'blue',
    backgroundColor = '#e6e6e6',
    name,
    used,
    total,
}) => {
    return (
        <View style={styles.card}>
            <AnimatedCircularProgress
                size={size}
                width={width}
                fill={fill}
                tintColor={tintColor}
                backgroundColor={backgroundColor}
                lineCap="round"
                rotation={180} // Rotate the circle to start progress from the bottom
            >
                {() => (
                    <View style={styles.textOverlay}>
                        <Text style={styles.progressText}>{`${used}/${total}`}</Text>
                        <Text style={styles.categoryText}>{name}</Text>
                    </View>
                )}
            </AnimatedCircularProgress>
        </View>
    );
};

export default ProgressCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        margin: 16,
        padding: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5, // Shadow for Android
        alignItems: 'center',
    },
    textOverlay: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    categoryText: {
        fontSize: 14,
        color: 'gray',
        marginTop: 8, // Space between progress and category name
    },
});
