
import { View, StyleSheet, TextInput } from "react-native";

function PrimaryInput(props: any) {

    function onTextChanged(text: string) {
        props.onTextChanged(text);
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder={props.placeHolder}
                onChangeText={(text) => onTextChanged(text)}
                value={props.text}
                keyboardType={props.keyboardType}
            />
        </View>
    );
}

export default PrimaryInput;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    textInput: {
        borderWidth: 2,
        borderColor: '#cccccc',
        backgroundColor: 'white',
        padding: 15
    }
});