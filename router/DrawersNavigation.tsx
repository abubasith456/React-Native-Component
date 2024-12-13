import { createDrawerNavigator } from "@react-navigation/drawer";
import GoalsScreen from "../screens/sample/GoalsScreen";
import StartingScreen from "../screens/game/StartingScreen";
import LeaveScreen from "../screens/LeaveApp/LeaveScreen";
import MultiColorSelectionCalendar from "../screens/LeaveApp/MultiColorCalander";
import AttendanceMain from "../screens/LeaveApp/attendence/AttendanceMain";
import BottomTab from "../screens/sample/bottomtab/BottomTab";
import CaloriesCalculatorScreen from "../screens/health/CaloriesCalculatorScreen";
import Others from "../screens/sample/Others";

const Drawer = createDrawerNavigator();

export const InitailScreen = () => {
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
