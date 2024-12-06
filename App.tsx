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

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <>
      <StatusBar style='auto' />
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <Drawer.Navigator>
              <Drawer.Screen name='Demo' component={GoalsScreen} />
              <Drawer.Screen name='Sample Game' component={StartingScreen} />
              <Drawer.Screen name='Leave Screen' component={LeaveScreen} />
              <Drawer.Screen name='Custom Calender Screen' component={MultiColorSelectionCalendar} />
              <Drawer.Screen name='Attendance Screen' component={AttendanceMain} />
              <Drawer.Screen name='Bottom Tab' component={BottomTab} />
              <Drawer.Screen name='Calories Calculator Screen' component={CaloriesCalculatorScreen} />
            </Drawer.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
    </>
  );
}

