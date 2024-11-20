// src/screens/DrawScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles/DrawScreenStyles';

const DrawScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>It's a Draw!</Text>
    <Button
      title="Play Again"
      onPress={() => navigation.navigate('Game')}
    />
  </View>
);

export default DrawScreen;
