import { Text, View, StyleSheet } from "react-native";

function HintText({ children }: any) {
    return (
        <View style={styles.textTitleContainer}>
            <Text style={styles.titleText}>{children}</Text>
        </View>
    );
}

export default HintText;

const styles = StyleSheet.create({
    textTitleContainer: {
        marginTop: 30,
        padding: 20,
        alignItems: 'center',
    },
    titleText: {
        color: 'black',
        fontSize: 18,
    }
});