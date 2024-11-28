// src/screens/styles/GameScreenStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5DC',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  playersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
    marginBottom: 20,
    marginTop: 20,
  },

  playerButton: {
    flex: 1,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  activePlayer: {
    backgroundColor: '#4CAF50', // Green for active player
    borderColor: '#2E7D32', // Dark green border for active player
  },
  inactivePlayer: {
    backgroundColor: '#D3D3D3', // Gray for inactive player
    borderColor: '#A9A9A9', // Dark gray border for inactive player
  },
  playerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  restartButton: {
    marginTop: 30,
    backgroundColor: '#365',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
