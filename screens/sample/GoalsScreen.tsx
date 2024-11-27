import { Button, StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from '../../components/GoalItem';
import GoalInput from '../../components/GoalInput';

const GoalsScreen = () => {

    type Goal = {
        text: string;
        id: string;
    };

    const [addGoals, setAddGoals] = useState(false);
    const [goalsList, setGoalsIntoList] = useState<Goal[]>([]);

    function setGoalsToList(goal: string) {
        setGoalsIntoList((existingGoals) =>
            [...existingGoals, { text: goal, id: Math.random().toString() }]
        );
        setVisibility(false);
    }

    function onDeleteClick(id: string) {
        setGoalsIntoList((existingGoals) => {
            return existingGoals.filter((goal) => goal.id !== id)
        });
    }

    const setVisibility = (visible: boolean) => {
        setAddGoals(visible);
    }
    return (<View style={styles.container}>
        <Button title='Add Goals' onPress={() => setVisibility(true)} />
        <GoalInput onButtonClick={setGoalsToList}
            onCancel={() => setVisibility(false)}
            visible={addGoals} />
        <View style={styles.goalsContainer}>
            <FlatList
                data={goalsList}
                renderItem={(data) => {
                    return (
                        <GoalItem
                            item={data.item.text}
                            id={data.item.id}
                            onDeleteItem={onDeleteClick} />
                    )
                }}
            />
        </View>
    </View>
    )
}

export default GoalsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
    goalsContainer: {
        flex: 5
    }
});