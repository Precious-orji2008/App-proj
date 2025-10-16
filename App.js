import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator'

function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  // return (
  //   <SafeAreaProvider>
  //     <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  //     <AppContent />
  //   </SafeAreaProvider>
  // );

  return(
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  )
}



export default App;
