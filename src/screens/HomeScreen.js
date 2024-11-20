// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import styles from './styles/HomeScreenStyles';

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Image source={require('../../assets/logo.png')} style={styles.logo} />
    <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('Game')}>
      <Text style={styles.buttonText}>Start Game</Text>
    </TouchableOpacity>
    <Image source={require('../../assets/cornerLogo.png')} style={styles.cornerLogo} />
  </View>
);

export default HomeScreen;
