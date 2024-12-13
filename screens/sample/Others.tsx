import { StackNavigationProp } from "@react-navigation/stack";
import { View } from "react-native";
import PrimaryButton from "../../components/gamecomponents/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../router/StackNavigation";

function Others() {

    type NavigationProp = StackNavigationProp<RootStackParamList, 'ExpenseManager'>;
    const navigation = useNavigation<NavigationProp>();

    return (
        <View style={{ margin: 20 }}>
            <PrimaryButton text="Expense Manager" onButtonClick={() => {
                navigation.navigate('ExpenseManager');
            }} />
        </View>
    )
}

export default Others;