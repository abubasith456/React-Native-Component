import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

export const IconButton = ({ name, size, color, onPress }: any) => {
    return (
        <TouchableOpacity
            style={[styles.buttonContainer]}
            onPress={onPress}>
            <View>
                <Ionicons name={name} size={size} color={color} />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        padding: 5,
        borderRadius: 10,
        backgroundColor: 'black'
    }
});