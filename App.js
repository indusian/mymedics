import { StatusBar } from 'expo-status-bar';
import React, { Component }  from 'react';
import { StyleSheet, Image, Text, View, Button, TextInput } from 'react-native';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import * as SplashScreen from 'expo-splash-screen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function App() {
  return (
    <View style={{ padding: 40 }}>
      <View style={styles.container}>
        <View><Text style={styles.baseText}>Login</Text></View>
        <View style={styles.item25}><Image style={styles.logo} source={require('./assets/mipl_logo.png')} /></View>
      </View>
      <View style={{ paddingTop: 60 }}>
        <View style={styles.item100}><Text style={styles.normalText}>Enter the uername and password</Text></View>
        <View style={styles.item100}><Text style={styles.normalText}>To access myMedics Features</Text></View>
      </View>
      <View>
        <View style={{ paddingTop: 15 }}>
          <Image style={styles.ImgBig} source={require('./assets/MyMedic.png')} />
        </View>

        <View style={{ paddingTop: 15 }}>
          <Text>User Name/ Mobile Number</Text>
        </View>
        <View style={{ paddingTop: 5 }}>
          <TextInput style={styles.Inputbox} placeholder="User Name / Mobile Number" autoCompleteType="off" />
        </View>
        <View style={{ paddingTop: 10 }}>
          <Text>Password
      <Text style={styles.redText}>*</Text></Text>
        </View>
        <View style={{ paddingTop: 5 }}>
          <TextInput style={styles.Inputbox} placeholder="Password" autoCompleteType="off" secureTextEntry={true} />
        </View>
      </View>
      <View style={{ paddingTop: 18, paddingLeft: 0 }}>
        <Text style={styles.OTPText}>Send OTP via
      <Text style={styles.OTPRed}> *</Text></Text>

      </View>
      <View style={styles.container}>

        <View style={{ paddingTop: 18, paddingLeft: 0 }}><Image style={styles.ImgIcon1} source={require('./assets/sms.png')} /></View>
        <View style={{ paddingTop: 15, paddingLeft: 20 }}><Image style={styles.ImgIcon} source={require('./assets/whatsapp.png')} /></View>
        <View style={{ paddingTop: 20, paddingLeft: 20 }}><Image style={styles.ImgIcon1} source={require('./assets/telegram.png')} /></View>
        <View style={{ paddingTop: 20, paddingLeft: 20 }}><Image style={styles.ImgIcon1} source={require('./assets/email.png')} /></View>

      </View>
      <View style={{ paddingTop: 65, paddingLeft: 130 }}><Text style={styles.grayText}>Forgot Password?</Text></View>

      <View>

      </View>
      
      <View style={{ paddingTop: 20}}><Text style = {styles.button}>Sign In </Text></View>

      <View style={{ paddingTop: 30, paddingLeft: 0 }}><Text style={styles.deepgrayText}>Don't have account? No Worry !
    <Text style={styles.blueText}> Sign Up Here</Text></Text></View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'

  },
  item75: {
    width: '75%' // is 50% of container width
  },
  Inputbox: {
    height: 40, 
    borderColor: '#dddddd', 
    borderWidth: 1, 
    padding: 10 
  },

  item25: {
    width: '25%', // is 50% of container width
    paddingLeft: 180
  },
  item100: {
    width: '100%' // is 50% of container width
  },

  baseText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#103D58'
  },

  button: {
    elevation: 8,
    backgroundColor: "#75BA42",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  
  normalText: {
    fontSize: 18,
    color: '#000000'
  },

  OTPText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#515151'
  },

  OTPRed: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF0000'
  },
  redText: {
    fontSize: 20,
    color: '#FF0000'
  },

  grayText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#CCCCCC'
  },
  deepgrayText: {
    fontSize: 12,
    color: '#404040'
  },
  blueText: {
    fontSize: 12,
    color: '#60B7E9'
  },

  logo: {
    width: 75,
    height: 29,
    resizeMode: 'stretch'
  },

  ImgBig: {
    width: 100,
    height: 98,
    alignSelf: 'center',
    resizeMode: 'stretch'
  },
  ImgIcon: {
    width: 50,
    height: 50,
    resizeMode: 'stretch'

  },
  ImgIcon1: {
    width: 42,
    height: 42,
    resizeMode: 'stretch'

  },


});

