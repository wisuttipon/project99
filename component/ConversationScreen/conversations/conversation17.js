import React from "react";
import { TouchableOpacity, Text, View, Image, ScrollView } from "react-native";
import styles from "../../styes";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import imageMan from './../../../assets/Conversation/young-man.png'
import imageWoman from './../../../assets/Conversation/woman.png'
import { AntDesign } from "@expo/vector-icons";
import { Audio } from "expo-av";
import * as firebase from "firebase";

const Stack = createStackNavigator();

const Conversation17 = ({ navigation }) => {
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

  const [data, SetItems] = React.useState([]);
  const [description, setDescription] = React.useState("");
  React.useEffect(() => {
    const item = [];
    firebase
      .firestore()
      .collection("conversation")
      .doc('16')
      .onSnapshot((querySnapshot) => {
        setDescription(querySnapshot.data().description);
        querySnapshot.data().data.forEach((doc) => {
          const { gender, position, sound_url, text } = doc;
          item.push({
            gender,
            position,
            sound_url,
            text,
          });
        });
        SetItems(item);
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
        {data.map((res, i) => {
          return(
            <View key={i} style={styles.conversationView}>
              <Image style={styles.conversationImage} source={res.gender === 'man' ? imageMan : imageWoman} />
              <TouchableOpacity 
                onPress={() => playSound(res.sound_url)}
                style={styles.conversationTextBox}>
                <View style={styles.conversationView}>
                  <Text style={styles.conversationText}>{res.text}</Text>
                  <AntDesign
                        name="sound"
                        size={48}
                        color="black"
                        style={styles.conversationIconSound}
                      />
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
        <View style={styles.conversationDescriptionBox}>
          <Text>{description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export { Conversation17 };
