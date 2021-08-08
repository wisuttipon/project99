import React, { Component } from 'react';
import { Alert, TouchableOpacity,Text,TextInput, View, ImageBackground, } from 'react-native';
import styles from './component/styes';
import { AntDesign } from '@expo/vector-icons'; 
import { Dimensions } from 'react-native';
import bglogin from './assets/bg.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App=()=> {

  const onRegister =()=>{
    console.log('You have been clicked a registerbutton!');
  }
  const onLogin =()=>{
    console.log('You have been clicked a loginbutton!');
  }
 
  
  
    
    return (
      <ImageBackground
      style={{ flex: 1 , width:windowWidth ,height:windowHeight,justifyContent:'center',alignItems:'center'}} 
        source={bglogin}
      >
      <View style={styles.container}>
      <View style={styles.loginText3}> <Text style={{color:'#00000090',fontSize:50,marginTop:-100}}>SINGUP</Text></View>
      <View style={styles.loginText2}> <Text style={{color:'#00000090',}}>Email</Text></View>
        <View style={styles.inputContainer}>
        <AntDesign name="mail" size={17} color="black" style={styles.inputIcon}/> 
        <TextInput 
          //value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Enter your Email'}
          style={styles.input}
        />
        </View>
        
        <View style={styles.loginText2}> <Text style={{color:'#00000090',}}>Password</Text></View>
        <View style={styles.inputContainer}>
        <AntDesign name="lock" size={17} color="black" style={styles.inputIcon}/> 
        <TextInput
          //value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Enter your Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        </View>
       
      <TouchableOpacity
       onPress ={onLogin}
          style={styles.loginScreenButton}
          underlayColor='#fff'>
          <Text style={styles.loginText}>LOGIN</Text>
     </TouchableOpacity>
     
      <TouchableOpacity
       onPress ={onRegister}
          style={styles.loginScreenButton1}
          underlayColor='#fff'>
        
          <Text style={styles.loginText1}>Register</Text>
     </TouchableOpacity>
     
      </View>
      </ImageBackground>
      
      
    );
  
}
export default App
