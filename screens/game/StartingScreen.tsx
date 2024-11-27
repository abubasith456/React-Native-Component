import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TitleText from "../../components/gamecomponents/TitleText";
import HintText from "../../components/gamecomponents/HintText";
import PrimaryInput from "../../components/gamecomponents/PrimaryInput";
import PrimaryButton from "../../components/gamecomponents/PrimaryButton";
import { useState } from "react";


function StartingScreen() {

    const [number, setNumber] = useState('')

    function onTextChanged(text: string) {
        console.log(text);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.mainContainer}>
                <TitleText>Lets start!</TitleText>
                <HintText>Enter any number from 1 to 99</HintText>
                <PrimaryInput
                    placeHolder="Enter your number"
                    onTextChanged={setNumber}
                    text={number}
                    keyboardType='numeric'
                />
                <PrimaryButton
                    text="Start"
                    onButtonClick={() => {
                        setNumber('');
                    }}
                />
            </View>
        </SafeAreaView>
    );
}

export default StartingScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
    },
});