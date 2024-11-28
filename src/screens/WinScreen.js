// src/screens/WinScreen.js
import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import styles from './styles/WinScreenStyles';

const WinScreen = ({ route, navigation }) => (
  <View style={styles.container}>
    <Image source={require('../../assets/trophy.png')} style={styles.trophy} />
    <Text style={styles.title}>Congratulations!</Text>
    <Text style={styles.title}>Winner: {route.params.winner}</Text>
    <Button
      title="Play Again"
      onPress={() => navigation.navigate('Game')}
    />
  </View>
);

export default WinScreen;
