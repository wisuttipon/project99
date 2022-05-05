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
import * as firebase from "firebase";
import bglogin from "../assets/bg2.jpg";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const Login = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const onRegister = () => {
    console.log("You have been clicked a registerbutton!");
  };
  const onLogin = () => {
    console.log(email.email);
    console.log(password.password);

    try {
      if (email !== '' && password !== '') {
        firebase
      .auth()
      .signInWithEmailAndPassword(email.email, password.password)
      .then(() => {
        navigation.navigate("Home");
        console.log("success");
      })
      .catch(error => Alert.alert(
        "Login failed","Please check your email or password "

      ));

      }
    } catch (error) {
      console.log(error.toString());
    }
          
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
          <Text style={styles.Textsigup}>SINGIN</Text>
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

        <TouchableOpacity
          onPress={onLogin}
          style={styles.loginScreenButton}
          underlayColor="#fff"
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={styles.loginScreenButton1}
          underlayColor="#fff"
        >
          <Text style={styles.loginText1}>Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default Login;
