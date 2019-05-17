import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const Mybutton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 30,
    width: '100%',
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOpacity: 1.0,
  },
  text: {
    fontSize: 18,
    color: 'rgb(246, 109, 34)',
    textAlign: 'center'
  },
});
export default Mybutton;