import React from "react";
import { TouchableOpacity, Text, View, Image, ScrollView } from "react-native";
import styles from "../../styes";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import imageMan from './../../../assets/Conversation/young-man.png'
import imageWoman from './../../../assets/Conversation/woman.png'
import { AntDesign } from "@expo/vector-icons";
import { Audio } from "expo-av";

const Stack = createStackNavigator();

const Conversation5 = ({ navigation }) => {
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

  const [loaded] = useFonts({
    Montserrat: require("../../../assets/static/Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.ContainerVocabularyWord}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.conversationView}>
          <Image style={styles.conversationImage} source={imageMan} />
          <TouchableOpacity 
            onPress={() => playSound('https://firebasestorage.googleapis.com/v0/b/projectx-781a7.appspot.com/o/ConversationData%20%E0%B8%A3%E0%B8%A7%E0%B8%A1%2FM5.mp3?alt=media&token=200d0257-8d3e-4b28-af78-15514cabf8c3')}
            style={styles.conversationTextBox}>
            <View style={styles.conversationView}>
              <Text style={styles.conversationText}>Do you like the food in the school cafeteria?</Text>
              <AntDesign
                    name="sound"
                    size={48}
                    color="black"
                    style={styles.conversationIconSound}
                  />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.conversationView}>
          <Image style={styles.conversationImage} source={imageWoman} />
          <TouchableOpacity 
            onPress={() => playSound('https://firebasestorage.googleapis.com/v0/b/projectx-781a7.appspot.com/o/ConversationData%20%E0%B8%A3%E0%B8%A7%E0%B8%A1%2FWM5.mp3?alt=media&token=066e8d9a-cf8e-440a-9c8f-ae300471fd9e')}
            style={styles.conversationTextBox}>
            <View style={styles.conversationView}>
              <Text style={styles.conversationText}>I'm only eating here because I don't have any other options.</Text>
              <AntDesign
                    name="sound"
                    size={48}
                    color="black"
                    style={styles.conversationIconSound}
                  />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.conversationDescriptionBox}>
          <Text>จากการสนทนาจะเห็นได้ว่า การที่ผู้ชายถามว่า ชอบอาหารในโรงอาหารโรงเรียนไหม ซึ่งคำตอบของผู้หญิงจำเป็นต้องรับประทานอาหารในโรงอาหารโรงเรียนเพราะไม่มีทางเลือกอื่น</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export { Conversation5 };
