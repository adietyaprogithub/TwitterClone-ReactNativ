import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Login from './Components/login/Login';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signin from './Components/signin/Signin';
import Account from './Components/createaccount/Account';
import Screen from './Components/Screen/Screen';

const stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="screen" component={Screen}></stack.Screen>
        <stack.Screen name="signin" component={Signin}></stack.Screen>
        <stack.Screen name="login" component={Login}></stack.Screen>
        <stack.Screen name="createAccount" component={Account}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
