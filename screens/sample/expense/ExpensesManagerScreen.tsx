import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GlobalStyle } from "../../../constants/styles";
import { ExpensesOverViewScreen } from "./ExpensesOverviewScreen";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AllExpensesScreen } from "./AllExpensesScreen";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../router/StackNavigation";
import { useNavigation } from "@react-navigation/native";

const BottomTabs = createBottomTabNavigator();

function ManageExpensesScreen() {

    type NavigationProp = StackNavigationProp<RootStackParamList, 'ExpenseDetails'>;
    const navigation = useNavigation<NavigationProp>();

    function itemOnPressed() {
        navigation.navigate('ExpenseDetails');
    }

    return (
        <View style={{ flex: 1 }}>
            <BottomTabs.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: GlobalStyle.primaryColor,
                }}>
                <BottomTabs.Screen name="Recent" children={ExpensesOverViewScreen} />
                <BottomTabs.Screen name="All Expenses" children={AllExpensesScreen} />
            </BottomTabs.Navigator>
            {/* Floating Action Button placed outside of Tab.Navigator */}
            <View style={styles.floatingButtonContainer}>
                <TouchableOpacity style={styles.floatingButton} onPress={itemOnPressed}>
                    <Text style={styles.floatingButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ManageExpensesScreen;

const styles = StyleSheet.create({
    floatingButtonContainer: {
        position: 'absolute',
        bottom: 60, // Adjust this value to place the button where you want it
        right: 20,
        zIndex: 100, // Ensures the button is above the tab bar
    },
    floatingButton: {
        backgroundColor: GlobalStyle.primaryColor,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    floatingButtonText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
});