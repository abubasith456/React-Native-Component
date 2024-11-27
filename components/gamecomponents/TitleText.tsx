import { Text, View, StyleSheet } from "react-native";

function TitleText({ children }: any) {
    return (
        <View style={styles.textTitleContainer}>
            <Text style={styles.titleText}>{children}</Text>
        </View>
    );
}

export default TitleText;

const styles = StyleSheet.create({
    textTitleContainer: {
        borderRadius: 20,
        marginTop: 30,
        borderColor: 'black',
        backgroundColor: 'blue',
        padding: 20,
        alignItems: 'center',
        elevation: 10,
    },
    titleText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    }
});