import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, View, ScrollView } from "react-native";
import styles from "../../styes";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import * as firebase from "firebase";
import { Audio } from "expo-av";
const Stack = createStackNavigator();

const VocabularyWord = ({ navigation }) => {
 

  async function playSound() { 
    const sound = new Audio.Sound();
    try {
      await sound.createAsync({uri:'https://firebasestorage.googleapis.com/v0/b/projectx-781a7.appspot.com/o/Ear.mp3?alt=media&token=1b140092-025c-4398-bf78-19c7a97865cc'}
      ,{shouldPlay:true});
      await sound.playAsync();
      // Your sound is playing!
      console.log("Soundpp");
      // Don't forget to unload the sound from memory
      // when you are done using the Sound object
      await sound.unloadAsync();
    } catch (error) {
      console.log(error);
      // An error occurred!
    }
    //console.log("Loading Sound");
    
    
  }

  const [Vocab, Setvocab] = useState([]);
  useEffect(() => {
    const item = [];
    firebase
      .firestore()
      .collection("Body")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const { EN, Th, img } = doc.data();
          item.push({
            key: doc.id,
            EN,
            Th,
            img,
          });
        });
        Setvocab(item);
      });
  }, []);
  const [loaded] = useFonts({
    Montserrat: require("../../../assets/static/Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.ContainerVocabularyWord}>
      <ScrollView style={styles.scrollView}>
        <View>
          {Vocab.map((data, i) => {
            return (
              <View key={i} style={styles.WordVocabulary}>
                <TouchableOpacity
                  onPress={() => playSound()}
                  style={styles.ButtonVocabularyWord}
                >
                  <AntDesign
                    name="sound"
                    size={54}
                    color="black"
                    style={styles.inputIconWord}
                  />
                  <Text style={styles.TextGroup}>{data.EN} </Text>
                  <Text style={styles.TextGroup1}>{data.Th}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export { VocabularyWord };
