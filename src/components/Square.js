// src/components/Square.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Square = ({ value, onClick }) => (
  <TouchableOpacity style={styles.square} onPress={onClick}>
    <Text style={styles.value}>{value}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  square: {
    width: '33.33%',
    height: '33.33%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Square;
