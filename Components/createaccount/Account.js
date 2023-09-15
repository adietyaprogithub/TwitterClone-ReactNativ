import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Account() {
  const [data, setData] = useState({
    Name: '',
    phone: '',
    email: '',
  });

  const handleChange = (key, value) => {
    setData({...data, [key]: value});
  };

  const handleDataSubmission = async () => {
    if (data.Name.trim() === '') {
      console.error('Name is required.');
      return;
    }

    try {
      const dataString = JSON.stringify(data);

      await AsyncStorage.setItem('userData', dataString);

      navigation.navigate('signin');
    } catch (error) {
      console.error('Error saving data to AsyncStorage: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Your Account</Text>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <TextInput
            style={styles.inputField}
            placeholder="Name"
            onChangeText={value => handleChange('Name', value)}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputField}
            placeholder="Phone Number"
            onChangeText={value => handleChange('phone', value)}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputField}
            placeholder="Email Id"
            onChangeText={value => handleChange('email', value)}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleDataSubmission}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 10,
  },
  inputField: {
    fontSize: 16,
  },

  main3: {
    alignItems: 'center',
  },
  butn: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },

  btn: {
    color: 'white',
  },
});
