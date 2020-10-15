import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { router } from './src/router';

const App: React.FC<{}> = () => {
  return <NavigationContainer>{router()}</NavigationContainer>;
};

export default App;
