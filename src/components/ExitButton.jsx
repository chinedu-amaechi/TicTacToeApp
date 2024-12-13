// src/components/ExitButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ExitButton = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>Exit Game</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#365',
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ExitButton;
