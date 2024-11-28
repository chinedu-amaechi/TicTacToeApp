// src/screens/styles/WinScreenStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5DC',
  },
 
  topSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  trophy: { 
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#333',
  },

  subTitle: {
    fontSize: 22,
    color: '#000', // Black text
    marginTop: 2,
  },

  bottomSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 20, // Space from bottom
  },

  button: {
    backgroundColor: '#365',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
