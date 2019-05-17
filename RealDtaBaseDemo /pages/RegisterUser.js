import React, { Component } from 'react';
import Mybutton from './components/Mybutton';
import m from '../App/Assets/Style/mycreen';
import s from '../App/Assets/Style/screen';
import { TextInput, StyleSheet, Text, View, TouchableOpacity,ScrollView } from 'react-native';

export default class Register extends Component {
  render() {
    return (
        <View style={[styles.container, m.deviceHeight]}>
          <Text style={styles.h}>Sign Up</Text>
          <TextInput style={styles.input} placeholder='First Name' placeholderTextColor='#fff'></TextInput>
          <TextInput style={styles.input} placeholder='Last Name' placeholderTextColor='#fff'></TextInput>
          <TextInput style={styles.input} placeholder='Email' placeholderTextColor='#fff'></TextInput>
          <TextInput style={styles.input} placeholder='Phone no.' placeholderTextColor='#fff'></TextInput>
          <TextInput style={styles.input} placeholder='Password' placeholderTextColor='#fff'></TextInput>
          <Mybutton title="Sign Up" customClick={() => this.props.navigation.navigate('HomeScreen')} />
          <Text style={styles.registerTxt} onPress={() => this.props.navigation.navigate('Login')} >Already have an account? Sign In</Text>
          <View style={styles.social}>
            <TouchableOpacity style={styles.socialBtn}><Text style={styles.socialBtnTxt}>continue with Facebook</Text></TouchableOpacity>
            <TouchableOpacity style={styles.socialBtn}><Text style={styles.socialBtnTxt}>continue with Instagram</Text></TouchableOpacity>
            <TouchableOpacity style={styles.socialBtn}><Text style={styles.socialBtnTxt}>continue with twitter</Text></TouchableOpacity>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(246, 109, 34)',
    paddingTop: 0,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 50,
  },
  h: {
    fontSize: 40,
    color: '#fff',
    marginTop: 10,
    marginBottom: 20,
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
  },
  socialBtn: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#fff',
    padding: 10,
    width: 110,
    height: 40,
    marginTop: 10,
    width: '100%'
  },
  socialBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    textTransform: 'capitalize'
  },
  registerTxt: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  }
});