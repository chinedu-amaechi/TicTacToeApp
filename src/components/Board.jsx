// src/components/Board.js
import React from 'react';
import { View } from 'react-native';
import Square from './Square';
import styles from './styles/BoardStyles';

const Board = ({ squares, onClick }) => (
  <View style={styles.board}>
    {squares.map((square, index) => (
      <Square
        key={index} 
        value={square}
        onClick={() => onClick(index)} />
    ))}
  </View>
);

export default Board;
