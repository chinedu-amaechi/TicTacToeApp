// src/screens/WinScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles/WinScreenStyles';

const WinScreen = ({ route, navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Winner: {route.params.winner}</Text>
    <Button
      title="Play Again"
      onPress={() => navigation.navigate('Game')}
    />
  </View>
);

export default WinScreen;
