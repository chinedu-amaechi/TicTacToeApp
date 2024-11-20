// src/screens/styles/HomeScreenStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5DC', // Light beige background color
  },
  logo: {
    width: 300, // Twice the original width
    height: 300, // Twice the original height
    marginBottom: 30, // Move the logo up a bit
    marginTop: -100, // Adjust if needed
  },
  startButton: {
    backgroundColor: '#365',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: -10, // Move the button up a bit
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cornerLogo: {
    position: 'absolute',
    bottom: -2, 
    left: -10, 
    width: 150, 
    height: 150,
  },
});

export default styles;
