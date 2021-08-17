import React from "react";
import Login from "./component/Login";
import Loading from "./component/Loading";
import Register from "./component/Register"
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import * as firebase from "firebase";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBUJcZuRBl-VvPi_alLqkyuKEEzy1dikE",
  authDomain: "projectx-781a7.firebaseapp.com",
  databaseURL: "https://projectx-781a7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "projectx-781a7",
  storageBucket: "projectx-781a7.appspot.com",
  messagingSenderId: "74215826368",
  appId: "1:74215826368:web:c31465fb84063c735fde25",
  measurementId: "G-XJ6Q1EX6YT"
};

firebase.initializeApp(firebaseConfig);

const RootStack = createSwitchNavigator(
  {
    Loading: Loading,
    Register: Register,
    Login: Login,
    
  },
  {
    initialRouteName: "Loading"
  }
);

const App = createAppContainer(RootStack);
export default App
