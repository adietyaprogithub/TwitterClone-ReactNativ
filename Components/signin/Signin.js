import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {setName} from '../Store/Reducre';

export default function Signin({navigation}) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [storedPhoneNumber, setStoredPhoneNumber] = useState('');
  const [name, setname] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    retrieveStoredPhoneNumber();
  }, []);

  const retrieveStoredPhoneNumber = async () => {
    try {
      const storedNumber = await AsyncStorage.getItem('phone');
      const storeName = await AsyncStorage.getItem('name');
      setname(storeName);
      if (storedNumber !== null) {
        setStoredPhoneNumber(storedNumber);
      }
    } catch (error) {
      console.error('Error retrieving phone number from AsyncStorage: ', error);
    }
  };

  const handleNext = () => {
    if (phoneNumber === storedPhoneNumber) {
      navigation.navigate('screen');
      dispatch(() => setName(name));
    } else {
      console.error('Phone number does not match.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.main1}>
        <Text style={styles.text}>
          To get started, please enter your phone number:
        </Text>
      </View>
      <View style={styles.main2}>
        <TextInput
          style={styles.inp}
          placeholder="Enter Phone Number"
          onChangeText={text => setPhoneNumber(text)}
        />
      </View>
      <View style={styles.main3}>
        <TouchableOpacity style={styles.butn} onPress={handleNext}>
          <Text style={styles.tex}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: 15,
  },

  main1: {
    marginTop: 40,
  },
  main2: {
    marginTop: 30,
    marginBottom: 30,
  },
  main3: {
    marginTop: 50,
    marginLeft: 130,
    marginRight: 130,
    borderWidth: 1,
    padding: 10,
    paddingRight: 20,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 30,
    color: 'black',
    fontWeight: '500',
  },
  inp: {
    borderWidth: 2,
    borderBlockColor: 'black',
    color: 'black',
    fontSize: 20,
    borderRadius: 10,
  },
  butn: {
    color: 'white',
    fontSize: 21,
  },
  tex: {
    color: 'white',
    fontSize: 20,
  },
});
