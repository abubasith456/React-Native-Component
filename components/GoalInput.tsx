import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View, Image } from "react-native";

function GoalInput(props: any) {
    const [goalInputText, setGoalsInputText] = useState('');

    function setInputText(goal: any) {
        setGoalsInputText(goal);
    }

    function setGoalsToList() {
        props.onButtonClick(goalInputText);
        setGoalsInputText('');
    }

    const onCancel = () => {
        props.onCancel();
    }

    return (
        <Modal visible={props.visible} animationType="fade">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/favicon.png')} />
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter here..'
                    onChangeText={setInputText}
                    value={goalInputText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            color='green'
                            title='Add Goal' onPress={setGoalsToList} />
                    </View>
                    <View style={styles.button}>
                        <Button
                            color='red'
                            title='Cancel' onPress={onCancel} />
                    </View>
                </View>

            </View>
        </Modal >
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        backgroundColor: 'white',
        marginRight: 8,
        padding: 8
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    button: {
        width: "30%",
        margin: 10
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
});