import React, { Component } from "react";
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
import bglogin from "../assets/bg.png";
import * as firebase from "firebase";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const App = () => {
  const onRegister = () => {
    console.log("You have been clicked a registerbutton!");
  };
  const onLogin = () => {
    console.log("You have been clicked a loginbutton!");
    getData()
  };

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
        
        <TouchableOpacity
          onPress={onRegister}
          style={styles.loginScreenButton1}
          underlayColor="#fff"
        >
          <Text style={styles.loginText1}>LOGOUT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onLogin}
          style={styles.loginScreenButton}
          underlayColor="#fff"
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        
      </View>
    </ImageBackground>
  );
};
export default App;
