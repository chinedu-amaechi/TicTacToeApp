// src/components/Board.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Square from './Square';

const Board = ({ squares, onClick }) => (
  <View style={styles.board}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    height: 300,
  },
});

export default Board;
