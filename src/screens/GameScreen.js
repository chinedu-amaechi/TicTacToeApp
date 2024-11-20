// src/screens/GameScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Board from '../components/Board';
import calculateWinner from '../utils/calculateWinner';
import styles from './styles/GameScreenStyles';

const GameScreen = ({ navigation }) => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const current = history[stepNumber];
  const winner = calculateWinner(current);
  const draw = !winner && current.every(square => square !== null);

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = [...current];
    if (winner || squares[i]) return;

    squares[i] = xIsNext ? 'X' : 'O';
    setHistory([...newHistory, squares]);
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);

    if (calculateWinner(squares)) {
      navigation.navigate('Win', { winner: squares[i] });
    } else if (squares.every(square => square !== null)) {
      navigation.navigate('Draw');
    }
  };

  const restartGame = () => {
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setXIsNext(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic-Tac-Toe</Text>
      <Board squares={current} onClick={handleClick} />
      <View style={styles.players}>
        <Text style={styles.playerX}>X</Text>
        <Text style={styles.playerO}>O</Text>
      </View>
      <TouchableOpacity style={styles.restartButton} onPress={restartGame}>
        <Text style={styles.buttonText}>Restart Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GameScreen;
