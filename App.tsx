import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store.ts';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/components/navigators/StackNavigator.tsx';
import DetailsPage from './src/screens/SearchScreen/DetailsPage.tsx';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="AppNavigator" component={AppNavigator} />
            <Stack.Screen name="DetailsPage" component={DetailsPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

