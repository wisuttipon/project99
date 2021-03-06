import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import * as firebase from "firebase";



const Loading = ({navigation}) => {
  const componentDidMount = () =>  
  {
    firebase.auth().onAuthStateChanged(user => {
    navigation.navigate(user ? "Login" : "Register");
    });
  }
  componentDidMount() 

   
  return (
      <View style={styles.container}>
        
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    );  
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default Loading