
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";

function PrimaryButton(props: any) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => props.onButtonClick()}>
            <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'blue',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
});