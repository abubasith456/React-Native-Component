import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { GlobalStyle } from "../../constants/styles";
import { getFormatedDate } from "../../utils/SystemUtil";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../router/StackNavigation";


export const ExpenseItem = ({ id, description, date, amount }: any) => {

    type NavigationProp = StackNavigationProp<RootStackParamList, 'ExpenseDetails'>;
    const navigation = useNavigation<NavigationProp>();

    function itemOnPressed() {
        navigation.navigate('ExpenseDetails',
            {
                id: id, description: description,
                date: date, amount: amount
            }
        );
    }

    return (
        <TouchableOpacity style={styles.container} onPress={itemOnPressed} >
            <View>
                <Text style={[styles.textBase, styles.textDescription]}>{description}</Text>
                <Text style={styles.textBase} >{date}</Text>
            </View>
            <View style={styles.amountContainer}>
                <Text style={styles.amountText} >${parseFloat(amount).toFixed(2)}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        backgroundColor: GlobalStyle.primaryLightColor,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 3,
        shadowRadius: 4,
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 0.4
    },
    textBase: {
        padding: 2
    },
    textDescription: {
        fontWeight: 'bold'
    },
    amountContainer: {
        width: 100,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    amountText: {
        fontWeight: 'bold'
    }
});

