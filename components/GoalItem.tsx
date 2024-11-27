import { Text, StyleSheet, Pressable } from "react-native";


function GoalItem(props: any) {

    const onDeleteItem = () => {
        props.onDeleteItem(props.id)
    }

    return (
        <Pressable
            style={({ pressed }) => pressed && styles.pressedState}
            onPress={onDeleteItem}>
            <Text style={styles.goalItem}>{props.item}</Text>
        </Pressable>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 10,
        color: 'white',
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'blue'
    },
    pressedState: {
        opacity: 0.5
    }
});