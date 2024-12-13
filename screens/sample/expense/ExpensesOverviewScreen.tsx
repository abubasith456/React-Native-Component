import { useSelector } from 'react-redux';
import { RootState } from "../../../core/state_management/redux/store";
import { StyleSheet, View } from "react-native";
import { ExpensesSummary } from "../../../components/expenseManager/ExpensesSummary";
import { ExpensesList } from "../../../components/expenseManager/ExpensesList";

export const ExpensesOverViewScreen = () => {
    const expenses = useSelector((state: RootState) => state.expense)

    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={"Last 7 days"} />
            <ExpensesList expenses={expenses} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    }
});