import { StatusBar } from 'expo-status-bar';
import GoalsScreen from './screens/sample/GoalsScreen';
import StartingScreen from './screens/game/StartingScreen';
import LeaveScreen from './screens/LeaveApp/LeaveScreen';
import MultiColorSelectionCalendar from './screens/LeaveApp/MultiColorCalander';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AttendanceMain from './screens/LeaveApp/attendence/AttendanceMain';
import BottomTab from './screens/sample/bottomtab/BottomTab';
import { Provider } from 'react-redux'
import { store } from './core/state_management/redux/store';
import CaloriesCalculatorScreen from './screens/health/CaloriesCalculatorScreen';
import Others from './screens/sample/Others';
import { createStackNavigator } from '@react-navigation/stack';
import ManageExpenses from './screens/sample/expense/ExpensesManager';


export type RootStackParamList = {
  InitalScreen: undefined;
  ExpenseManager: undefined;
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {

  const InitailScreen = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name='Demo' component={GoalsScreen} />
        <Drawer.Screen name='Sample Game' component={StartingScreen} />
        <Drawer.Screen name='Leave Screen' component={LeaveScreen} />
        <Drawer.Screen name='Custom Calender Screen' component={MultiColorSelectionCalendar} />
        <Drawer.Screen name='Attendance Screen' component={AttendanceMain} />
        <Drawer.Screen name='Bottom Tab' component={BottomTab} />
        <Drawer.Screen name='Calories Calculator Screen' component={CaloriesCalculatorScreen} />
        <Drawer.Screen name='Others' component={Others} />
      </Drawer.Navigator>
    )
  };

  return (
    <>
      <StatusBar style='auto' />
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='InitalScreen' children={InitailScreen} options={{
                headerShown: false
              }} />
              <Stack.Screen name="ExpenseManager" component={ManageExpenses} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
    </>
  );
}

