import { createStackNavigator } from "@react-navigation/stack";
import { InitailScreen } from "./DrawersNavigation";
import ManageExpensesScreen from "../screens/sample/expense/ExpensesManagerScreen";
import { ExpensesDetailsScreen } from "../screens/sample/expense/ExpensesDetailsScreen";
import { ProfileScreen } from "../screens/others/ProfileScreen";


export type RootStackParamList = {
    InitalScreen: undefined;
    ExpenseManager: undefined;
    ExpenseDetails: { id: string, description: string, amount: string, date: string };
    ProfileScreen: undefined;
}
const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigations = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name='InitalScreen' children={InitailScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name="ExpenseManager" component={ManageExpensesScreen} />
            <Stack.Screen name="ExpenseDetails" component={ExpensesDetailsScreen} options={{
                presentation: 'modal'
            }} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}