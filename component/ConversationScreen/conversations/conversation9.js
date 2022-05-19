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

const Conversation9 = ({ navigation }) => {
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
            onPress={() => playSound('https://firebasestorage.googleapis.com/v0/b/projectx-781a7.appspot.com/o/ConversationData%20%E0%B8%A3%E0%B8%A7%E0%B8%A1%2FM9.mp3?alt=media&token=a9d0e065-574c-4730-910b-4b16b93e84fc')}
            style={styles.conversationTextBox}>
            <View style={styles.conversationView}>
              <Text style={styles.conversationText}>I'm looking to buy a hat for my cousin, but I can't seem to find his size. Would you happen to have any in the back?</Text>
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
            onPress={() => playSound('https://firebasestorage.googleapis.com/v0/b/projectx-781a7.appspot.com/o/ConversationData%20%E0%B8%A3%E0%B8%A7%E0%B8%A1%2FWM9.mp3?alt=media&token=55a2b60b-39fb-4043-b2b7-1d176e73838e')}
            style={styles.conversationTextBox}>
            <View style={styles.conversationView}>
              <Text style={styles.conversationText}>I'm sorry, but these are the only ones we have in stock. But if you leave your phone number, we'll contact you when a new shipment comes in.</Text>
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
          <Text>จากการสนทนาแสดงให้เห็นว่าถ้าหากผู้ชายเขียนหมายเลขโทรศัพท์ให้ผู้หญิงไว้เขาจะติดต่อกลับไป และจากคำถามที่ว่าผู้หญิงจะทำอะไรต่อไป คำตอบคือ D จะเขียนหมายเลขโทรศัพท์ของผู้ชายเอาไว้</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export { Conversation9 };
