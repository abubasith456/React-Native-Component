import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { store } from './core/state_management/redux/store';
import { StackNavigations } from './router/StackNavigation';



export default function App() {
  return (
    <>
      {/* <ProfileScreen /> */}
      <Provider store={store}>
        <NavigationContainer>
          <StackNavigations />
        </NavigationContainer>
      </Provider>
    </>
  );
}

