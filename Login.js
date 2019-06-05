import React, { Component } from 'react';
import Mybutton from './components/Mybutton';
import { TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h}>Log In</Text>
        <TextInput style={styles.input} placeholder='Usrename' placeholderTextColor='#fff'></TextInput>
        <TextInput style={styles.input} placeholder='Password' placeholderTextColor='#fff'></TextInput>
        <Mybutton title="Login" customClick={() => this.props.navigation.navigate('HomeScreen')} />
        <Text style={styles.registerTxt} onPress={() => this.props.navigation.navigate('Register')} >Don't have an account? Register</Text>
        <View style={styles.social}>
          <TouchableOpacity style={styles.socialBtn}><Text style={styles.socialBtnTxt}>Twitter</Text></TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}><Text style={styles.socialBtnTxt}>Facebook</Text></TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}><Text style={styles.socialBtnTxt}>Instagram</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(246, 109, 34)',
    paddingTop: 50,
    paddingLeft: 15,
    paddingRight: 15,
  },
  h: {
    fontSize: 40,
    color: '#fff',
    marginTop: 50,
    marginBottom: 50,
    textAlign: 'center'
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#fff',
    paddingTop: 8,
    paddingBottom: 8,
    marginBottom: 20,
    color: '#fff',
    width: '100%',
  },
  loginbtn: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 30,
    marginTop: 30,
    width: '100%',
  },
  btnTxt: {
    fontSize: 18,
    color: 'rgb(246, 109, 34)',
    textAlign: 'center'
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialBtn: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#fff',
    padding: 10,
    width: 110,
    height: 40,
  },
  socialBtnTxt: {
    color: '#fff',
    textAlign: 'center',
  },
  registerTxt: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  }
});