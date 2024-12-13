import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { store } from './core/state_management/redux/store';
import { StackNavigations } from './router/StackNavigation';


export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <StackNavigations />
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
    </>
  );
}

