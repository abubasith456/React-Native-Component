import { Text } from "react-native"
import { useSelector } from "react-redux"
import { RootState } from "../../../core/state_management/redux/store"


export const AllExpensesScreen = () => {
    const expenses = useSelector((state: RootState) => state.expense)

    console.log("AllExpensesScreen:  " + expenses.length);

    return (
        <Text>
            AllExpenses screen
        </Text>
    )
}