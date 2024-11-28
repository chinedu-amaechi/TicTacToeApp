// src/screens/WinScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles/WinScreenStyles';
import trophy from '../assets/trophy.png'

const WinScreen = ({ route, navigation }) => (
  <View style={styles.container}>
    <Image source={trophy} style={styles.trophy} />
    <Text style={styles.title}>Congratulations!</Text>
    <Text style={styles.title}>Winner: {route.params.winner}</Text>
    <Button
      title="Play Again"
      onPress={() => navigation.navigate('Game')}
    />
  </View>
);

export default WinScreen;
