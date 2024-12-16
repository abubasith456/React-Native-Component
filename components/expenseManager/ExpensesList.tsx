import { FlatList, View, Text } from "react-native"
import { ExpenseItem } from "./ExpenseItem"
import { useSelector } from 'react-redux';
import { RootState } from "../../core/state_management/redux/store";

export const ExpensesList = ({ expenses }: any) => {

    const expensesData = useSelector((state: RootState) => state.expense)

    function renderItem(data: any) {
        return <ExpenseItem {...data.item} />
    }

    return (
        <View>
            <FlatList
                data={expensesData}
                renderItem={renderItem}
                keyExtractor={(data) => data.id}
            />
        </View>
    )
}