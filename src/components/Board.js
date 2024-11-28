import React from 'react';
import { View } from 'react-native';
import Square from './Square';
import styles from './styles/BoardStyles';

const Board = ({ squares, onClick }) => (
  <View style={styles.board}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </View>
);

export default Board;
