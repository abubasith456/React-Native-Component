import { StatusBar } from 'expo-status-bar';
import GoalsScreen from './screens/sample/GoalsScreen';
import StartingScreen from './screens/game/StartingScreen';
import LeaveScreen from './screens/LeaveApp/LeaveScreen';
import DashboardCalendar from './screens/LeaveApp/CalanderView';
import MultiColorSelectionCalendar from './screens/LeaveApp/MultiColorCalander';
import HomeScreen from './screens/LeaveApp/attendence/HomeScreen';

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      {/* Demo Screen */}
      {/* <GoalsScreen /> */}

      {/* Game Screen */}
      {/* <StartingScreen /> */}

      {/* Leave Sceen */}
      {/* <LeaveScreen /> */}

      {/* Calander View */}
      {/* <DashboardCalendar /> */}

      {/* Multi color selection Calander View */}
      {/* <MultiColorSelectionCalendar /> */}

      {/* Multi color selection Calander View */}
      <HomeScreen />

    </>
  );
}

