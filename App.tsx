import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { router } from './src/router';

const App: React.FC<{}> = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>{router()}</NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
