import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.heading}>Welcome Back! Log in</Text>
        <Text style={styles.subheading}>to see the latest.</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('signin')}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('createAccount')}>
            <Text style={styles.buttonText}>Create Account </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  heading: {
    marginTop: 30,
    marginLeft:30,
    fontSize: 35,
    color: 'black',
  },
  subheading: {
    marginLeft:100, 
    fontSize: 20,
    color: 'black',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 30,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
