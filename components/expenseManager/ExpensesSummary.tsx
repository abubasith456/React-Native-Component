import { View, Text, StyleSheet } from "react-native"
import { GlobalStyle } from "../../constants/styles";
import { Expense } from "../../core/state_management/redux/expense";


type ExpensesSummaryProps = {
    expenses: Expense[];
    periodName: string;
};

export const ExpensesSummary: React.FC<ExpensesSummaryProps> = ({ expenses, periodName }) => {

    const validExpenses = Array.isArray(expenses) ? expenses : [];
    const expensesAmount = validExpenses.reduce((sum: number, expense: Expense) => {
        console.log("Expense => " + expense.amount);
        return sum + expense.amount;
    }, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>{periodName}</Text>
            <Text style={styles.textContent}>${expensesAmount.toFixed(2)}</Text>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: GlobalStyle.primaryColor,
        elevation: 10,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textTitle: {
        color: GlobalStyle.primaryTextColor,
        fontSize: 15,

    },
    textContent: {
        color: GlobalStyle.primaryTextColor,
        fontSize: 18,
        fontWeight: 'bold'
    }
});