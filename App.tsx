import React from 'react';
import {Provider} from 'react-redux';

import {persistor, store} from './src/redux/store.ts';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/components/navigators/StackNavigator.tsx';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
