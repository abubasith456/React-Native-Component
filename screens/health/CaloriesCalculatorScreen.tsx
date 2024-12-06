import React, { useState } from 'react';
import { View, Text, Modal, TextInput, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const CaloriesCalculatorScreen = () => {
    const [age, setAge] = useState('');
    const [isPickerOpen, setPickerOpen] = useState(false);
    const [isActivityPickerOpen, setActivityPickerOpen] = useState(false);
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [gender, setGender] = useState('male'); // Default gender
    const [activityLevel, setActivityLevel] = useState<'sedentary' | 'lightlyActive' | 'moderatelyActive' | 'veryActive' | 'extraActive'>('sedentary'); // Default activity level
    const [calories, setCalories] = useState<number | null>(null);

    const activityFactors: Record<'sedentary' | 'lightlyActive' | 'moderatelyActive' | 'veryActive' | 'extraActive', number> = {
        sedentary: 1.2,
        lightlyActive: 1.375,
        moderatelyActive: 1.55,
        veryActive: 1.725,
        extraActive: 1.9,
    };

    const calculateCalories = () => {
        const weightInKg = parseFloat(weight);
        const heightInCm = parseFloat(height);
        const ageInYears = parseInt(age, 10);

        if (isNaN(weightInKg) || isNaN(heightInCm) || isNaN(ageInYears)) {
            alert('Please enter valid numeric values!');
            return;
        }

        let bmr; // Basal Metabolic Rate
        if (gender === 'male') {
            bmr = 88.362 + 13.397 * weightInKg + 4.799 * heightInCm - 5.677 * ageInYears;
        } else {
            bmr = 447.593 + 9.247 * weightInKg + 3.098 * heightInCm - 4.330 * ageInYears;
        }

        const totalCalories = bmr * activityFactors[activityLevel];
        setCalories(Math.round(totalCalories));
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Calories Calculator</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your age"
                keyboardType="numeric"
                value={age}
                onChangeText={setAge}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter your weight (kg)"
                keyboardType="numeric"
                value={weight}
                onChangeText={setWeight}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter your height (cm)"
                keyboardType="numeric"
                value={height}
                onChangeText={setHeight}
            />
            <Text style={styles.label}>Selected Gender: {gender === 'male' ? 'Male' : 'Female'}</Text>
            <Button title="Select Gender" onPress={() => setPickerOpen(true)} />
            {/* Modal for Gender Picker */}
            <Modal visible={isPickerOpen} animationType="slide" transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.pickerContainer}>
                        <Text style={styles.label}>Gender:</Text>
                        <Picker
                            selectedValue={gender}
                            style={styles.picker}
                            onValueChange={(itemValue) => setGender(itemValue)}
                        >
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />
                        </Picker>
                        <TouchableOpacity
                            style={styles.doneButton}
                            onPress={() => setPickerOpen(false)}
                        >
                            <Text style={styles.doneButtonText}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Text style={styles.label}>Selected Activity Level: {activityLevel}</Text>
            <Button title="Select Gender" onPress={() => setActivityPickerOpen(true)} />
            <Modal visible={isActivityPickerOpen} animationType="slide" transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.pickerContainer}>
                        <Text style={styles.label}>Activity Level:</Text>
                        <Picker
                            selectedValue={activityLevel}
                            style={styles.picker}
                            onValueChange={(itemValue) => setActivityLevel(itemValue)}
                        >
                            <Picker.Item label="Sedentary (little to no exercise)" value="sedentary" />
                            <Picker.Item label="Lightly active (light exercise 1-3 days a week)" value="lightlyActive" />
                            <Picker.Item label="Moderately active (moderate exercise 3-5 days a week)" value="moderatelyActive" />
                            <Picker.Item label="Very active (hard exercise 6-7 days a week)" value="veryActive" />
                            <Picker.Item label="Extra active (very hard exercise or physical job)" value="extraActive" />
                        </Picker>
                        <TouchableOpacity
                            style={styles.doneButton}
                            onPress={() => setActivityPickerOpen(false)}
                        >
                            <Text style={styles.doneButtonText}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity style={styles.button} onPress={calculateCalories}>
                <Text style={styles.buttonText}>Calculate</Text>
            </TouchableOpacity>
            {calories !== null && (
                <Text style={styles.result}>
                    Your daily calorie needs: <Text style={styles.calories}>{calories} kcal</Text>
                </Text>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    pickerContainer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        alignItems: 'center',
    },
    picker: {
        width: '100%',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    result: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 20,
    },
    calories: {
        fontWeight: 'bold',
        color: '#007BFF',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    doneButton: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#007BFF',
        borderRadius: 5,
    },
    doneButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default CaloriesCalculatorScreen;
