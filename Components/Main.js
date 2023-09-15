import React from 'react';
import {View, Text} from 'react-native';
import Login from './login/Login';
import Account from './createaccount/Account';
import Screen from './Screen/Screen';
import Signin from './signin/Signin';

export default function Main() {
  return (
    <View>
      {/* <Login/> */}
      {/* <Account /> */}
      {/* <Screen/> */}
      <Signin/>
    </View>
  );
}
