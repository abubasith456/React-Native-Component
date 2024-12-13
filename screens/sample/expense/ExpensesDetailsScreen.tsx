import { Ionicons } from "@expo/vector-icons";
import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native"
import { useDispatch } from 'react-redux';
import { GlobalStyle } from "../../../constants/styles";
import PrimaryButton from "../../../components/gamecomponents/PrimaryButton";
import { addExpense, removeExpense, updateExpense } from "../../../core/state_management/redux/expense";
import { getFormatedDate } from "../../../utils/SystemUtil";
import { nanoid } from "@reduxjs/toolkit";


export const ExpensesDetailsScreen = ({ route, navigation }: any) => {

    const editedExpenseId = route.params?.id
    const isEditing = !!editedExpenseId;
    const dispatch = useDispatch();

    console.log("editedExpenseId => " + editedExpenseId);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    function cancelHandler() {
        navigation.goBack();
    }

    function deleteExpense() {
        dispatch(removeExpense({ id: editedExpenseId }));
        navigation.goBack();
    }

    function upsertExpense() {
        if (isEditing) {
            dispatch(
                updateExpense(
                    {
                        id: editedExpenseId,
                        updatedExpense: {
                            date: getFormatedDate(new Date('2024-11-15')),
                            id: nanoid().toString(),
                            description: "A Note Book",
                            amount: 143.234
                        }
                    }
                )
            )
        } else {
            dispatch(addExpense(
                {
                    date: getFormatedDate(new Date('2024-12-01')),
                    id: nanoid().toString(),
                    description: "A Pen",
                    amount: 143
                }
            ))
        }
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <PrimaryButton
                        buttonStyle={{ backgroundColor: 'red' }}
                        text={"Cancel"} onButtonClick={cancelHandler} />
                </View>
                <View style={styles.button}>
                    <PrimaryButton text={isEditing ? "Update" : "Add"} onButtonClick={upsertExpense} />
                </View>
            </View>
            {isEditing && <View style={styles.deleteContainer}>
                <Ionicons name='trash' size={36} color={GlobalStyle.primaryButtonColor} onPress={deleteExpense} />
            </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,

    },
    deleteContainer: {
        marginTop: 15,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: 'black',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        width: 100,
        marginHorizontal: 10,
    }
});