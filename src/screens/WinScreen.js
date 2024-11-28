// src/screens/WinScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles/WinScreenStyles';

const WinScreen = ({ route, navigation }) => (
  <View style={styles.container}>
    <Image source={require('../../assets/trophy.png')} style={styles.trophy} />
    <Text style={styles.title}>Congratulations!</Text>
    <Text style={styles.title}>Winner: {route.params.winner}</Text>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('SelectPlayer')}
    >
      <Text style={styles.buttonText}>Play Again</Text> 
    </TouchableOpacity> 
  </View>
);

export default WinScreen;
