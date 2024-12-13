// src/screens/styles/DrawScreenStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5DC',

  },
  logo: {
    width: 250,
    height: 250,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 100,
    
    color: '#333',
  },

  button: {
    backgroundColor: '#365',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 100,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
