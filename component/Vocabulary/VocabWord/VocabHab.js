import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, View,  ScrollView } from "react-native";
import styles from "../../styes";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import * as firebase from "firebase";
import { Audio } from "expo-av";

const Stack = createStackNavigator();

const VocabularyWord1 = ({ navigation }) => {
  const [sound, setSound] = React.useState();

  async function playSound(url) {     
      const { sound } = await Audio.Sound.createAsync({uri: url});
      setSound(sound);
      await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  const [Vocab, Setvocab] = useState([]);
  useEffect(() => {
    const item = [];
    firebase
      .firestore()
      .collection("Habitation")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const { en, th, url } = doc.data();
          item.push({
            key: doc.id,
            en,
            th,
            url,
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
                  onPress={() => playSound(data.url)}
                  style={styles.ButtonVocabularyWord}
                >
                  <AntDesign
                    name="sound"
                    size={54}
                    color="black"
                    style={styles.inputIconWord}
                  />
                  <Text style={styles.TextGroup}>{data.en} </Text>
                  <Text style={styles.TextGroup1}>{data.th}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export { VocabularyWord1 };