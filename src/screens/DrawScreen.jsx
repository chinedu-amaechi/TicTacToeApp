// src/screens/DrawScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles/DrawScreenStyles';

const DrawScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Image source={require('../../assets/logo.png')} style={styles.logo} />

    <Text style={styles.title}>It's a Draw!</Text>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('SelectPlayer')}
    >
      <Text style={styles.buttonText}>Play Again</Text> 
    </TouchableOpacity>
  </View>
);

export default DrawScreen;
