// src/screens/GameScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Board from '../components/Board';
import calculateWinner from '../utils/calculateWinner';
import styles from './styles/GameScreenStyles';

const GameScreen = ({ route, navigation }) => {
  const { firstPlayer } = route.params; // Get first player from route params
  
  // States for game management
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(firstPlayer === 'X'); // Set who plays first

  const current = history[stepNumber]; // Current board state
  const winner = calculateWinner(current); // Check if there's a winner
  const isDraw = !winner && current.every(square => square !== null); // Check for a draw

  const handleClick = (index) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = [...newHistory[newHistory.length - 1]];
    const squares = [...current];

    if (winner || squares[index]) return; // Ignore clicks on a finished game or filled square

    // Update the board state
    squares[index] = xIsNext ? 'X' : 'O';
    setHistory([...newHistory, squares]);
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);

    // Navigate to the appropriate result screen
    if (calculateWinner(squares)) {
      navigation.navigate('Win', { winner: squares[index] });
    } else if (squares.every(square => square !== null)) {
      navigation.navigate('Draw');
    }
  };

  const restartGame = () => {
    // Reset all game states
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setXIsNext(firstPlayer === 'X'); // Reset the starting player when restarting
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic-Tac-Toe</Text>
      <Board squares={current} onClick={handleClick} />
      <View style={styles.players}>
        <Text style={[styles.player, xIsNext && styles.activePlayer]}>X</Text>
        <Text style={[styles.player, !xIsNext && styles.activePlayer]}>O</Text>
      </View>
      <TouchableOpacity style={styles.restartButton} onPress={restartGame}>
        <Text style={styles.buttonText}>Restart Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GameScreen;
