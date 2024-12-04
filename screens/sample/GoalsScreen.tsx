import { Button, StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from '../../components/GoalItem';
import GoalInput from '../../components/GoalInput';
import { useSelector, useDispatch } from 'react-redux';
import { addGoal, removeGoal } from '../../core/state_management/redux/goals';

export type Goal = {
    text: string;
    id: string;
};

const GoalsScreen = () => {

    const [addGoals, setAddGoals] = useState(false);
    const goalsList = useSelector(state => state.goals);
    const dispatch = useDispatch();

    function setGoalsToList(goal: string) {
        dispatch(addGoal({ text: goal }))
        setVisibility(false);
    }

    function onDeleteClick(id: string) {
        dispatch(removeGoal({ id: id }));
    }

    const setVisibility = (visible: boolean) => {
        setAddGoals(visible);
    }
    return (
        <View style={styles.container}>
            <View style={{ margin: 30 }}>
                <Button title='Add Goals' onPress={() => setVisibility(true)} />
            </View>
            <View style={{ backgroundColor: "black", height: 1 }} />
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
    },
    goalsContainer: {
        flex: 5
    }
});