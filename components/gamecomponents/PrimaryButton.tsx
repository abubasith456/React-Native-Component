
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";
import { GlobalStyle } from "../../constants/styles";

function PrimaryButton(props: any) {
    return (
        <TouchableOpacity
            style={[styles.container, props.buttonStyle]}
            onPress={() => props.onButtonClick()}>
            <Text style={[styles.buttonText, props.textStyle]}>{props.text}</Text>
        </TouchableOpacity>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: GlobalStyle.primaryColor,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
});