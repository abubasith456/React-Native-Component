import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GlobalStyle } from "../../../constants/styles";
import { ExpensesOverView } from "./ExpensesOverview";
import { ExpensesDetails } from "./ExpensesDetails";

const BottomTabs = createBottomTabNavigator();

function ManageExpenses() {

    return (
        <BottomTabs.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: GlobalStyle.primaryColor },
            tabBarActiveTintColor: "white",

        }}>
            <BottomTabs.Screen name="OverView" children={ExpensesOverView} />
            <BottomTabs.Screen name="Details" children={ExpensesDetails} />

        </BottomTabs.Navigator>
    )
}

export default ManageExpenses;