import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import GameScreen from './screens/GameScreen/GameScreen';
import { persistor, store } from './state/store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>


      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Game"
          component={GameScreen}
        />
      </Stack.Navigator>  
      </NavigationContainer>
      </PersistGate>

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
