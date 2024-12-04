
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import Ionicons from '@expo/vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export default function BottomTab() {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

      }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: () => {
          return <Ionicons name="home" size={20} />
        }
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: () => {
          return <Ionicons name="person" size={20} />
        }
      }} />
    </Tab.Navigator>
  );


}