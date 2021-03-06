import React, { Component, useState } from "react";
import { useFonts } from "expo-font";
import {
  Alert,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  ImageBackground,
} from "react-native";
import styles from "./styes";
import { AntDesign } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import bglogin from "../assets/bg2.jpg";
import * as firebase from "firebase";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  
  const [password, setPassword] = useState("");

  const [confirmPassword, setconfirmPassword] = useState("");

  const onRegister = () => {
    
    console.log(email.email);
    console.log(password.password);

    try {
      if (password.password.length < 6) {
        Alert.alert(
          "you can't register",
          "Please lengthen this text to 6 characters",
          
          
        );
      } 
        else if (password.password != confirmPassword.confirmPassword) {
        Alert.alert(
          "you can't register",
          "password does not match",
          
        );
      } else {
        firebase
          .auth()
          .createUserWithEmailAndPassword( email.email, password.password);
          
          navigation.navigate("Login")
          console.log("success");
      }
    } catch (error) {
      console.log(error.toString());
    }
  };
  const onLogin = () => {
    console.log("You have been clicked a loginbutton!");
    console.log(email);
    console.log(password);

    
  };
  const [loaded] = useFonts({
    Montserrat: require("../assets/static/Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }
  
  return (
    <ImageBackground
      style={{
        width: windowWidth,
        height: windowHeight,
        justifyContent: "center",
        alignItems: "center",
      }}
      source={bglogin}
    >
      <View style={styles.container}>
        <View style={styles.loginText3}>
          <Text style={styles.Textsigup}>SINGUP</Text>
        </View>
        
        <View style={styles.loginText2}>
          <Text style={styles.Textemail}>Email</Text>
        </View>
        <View style={styles.inputContainer}>
          <AntDesign
            name="mail"
            size={17}
            color="black"
            style={styles.inputIcon}
          />
          <TextInput
            onChangeText={(email) => setEmail({ email })}
            placeholder={"Enter your Email"}
            style={styles.input}
          />
        </View>

        <View style={styles.loginText2}>
          <Text style={styles.Textpass}>Password</Text>
        </View>
        <View style={styles.inputContainer}>
          <AntDesign
            name="lock"
            size={17}
            color="black"
            style={styles.inputIcon}
          />
          <TextInput
            onChangeText={(password) => setPassword({ password })}
            placeholder={"Enter your Password"}
            secureTextEntry={true}
            style={styles.input}
          />
        </View>

        <View style={styles.loginText2}>
          <Text style={styles.Textpass}>Confirm Password</Text>
        </View>
        <View style={styles.inputContainer}>
          <AntDesign
            name="lock"
            size={17}
            color="black"
            style={styles.inputIcon}
          />
          <TextInput
            onChangeText={(confirmPassword) => setconfirmPassword({ confirmPassword })}
            placeholder={"Confirm your Password"}
            secureTextEntry={true}
            style={styles.input}
          />
        </View>
        <TouchableOpacity
          onPress={onRegister}
          style={styles.loginScreenButton1}
          underlayColor="#fff"
        >
          <Text style={styles.loginText1}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.loginScreenButton}
          underlayColor="#fff"
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default Register;
