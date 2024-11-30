// src/components/styles/BoardStyles.js
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300, // Set board width
    height: 300, // Set board height
    
  },
  
  row: {
    flexDirection: 'row',
  },
});

export default styles;
