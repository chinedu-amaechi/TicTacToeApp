// src/screens/styles/GameScreenStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF920', // Yellow background
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  players: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: 20,
  },
  playerX: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700', // Yellow X
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
  },
  playerO: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF69B4', // Pink O
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
  },
});

export default styles;
