import { FlatList, View, Text } from "react-native"
import { ExpenseItem } from "./ExpenseItem"

export const ExpensesList = ({ expenses }: any) => {

    function renderItem(data: any) {
        return <ExpenseItem {...data.item} />
    }

    return (
        <View>
            <FlatList
                data={expenses}
                renderItem={renderItem}
                keyExtractor={(data) => data.id}
            />
        </View>
    )
}