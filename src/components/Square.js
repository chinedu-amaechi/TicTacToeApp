// src/components/Square.js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles/SquareStyles';

const Square = ({ value, onClick }) => (
  <TouchableOpacity style={styles.square} onPress={onClick}>
    <Text style={styles.value}>{value}</Text>
  </TouchableOpacity>
);

export default Square;
