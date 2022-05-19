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

const Conversation1 = ({ navigation }) => {
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
            onPress={() => playSound('https://firebasestorage.googleapis.com/v0/b/projectx-781a7.appspot.com/o/ConversationData%20%E0%B8%A3%E0%B8%A7%E0%B8%A1%2FM1.mp3?alt=media&token=12eaa956-aa82-4de2-95c7-7b6a9e07c2f1')}
            style={styles.conversationTextBox}>
            <View style={styles.conversationView}>
              <Text style={styles.conversationText}>Let's go to see a movie tonight. I already bought a ticket for you.</Text>
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
            onPress={() => playSound('https://firebasestorage.googleapis.com/v0/b/projectx-781a7.appspot.com/o/ConversationData%20%E0%B8%A3%E0%B8%A7%E0%B8%A1%2FWM1.mp3?alt=media&token=20215788-f5b0-4a14-beaf-fd7cda25c242')}
            style={styles.conversationTextBox}>
            <View style={styles.conversationView}>
              <Text style={styles.conversationText}>Sorry, I just don't want to get a bad grade on my research project.</Text>
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
          <Text>จากการสนทนาจะเห็นได้ว่า ผู้ชายชวนผู้หญิงไปดูหนังเพราะได้ซื้อตั๋วไว้แล้ว แต่คำพูดของผู้หญิงเสียงคำว่า Sorryแสดงให้เห็นว่า เป็นการปฏิเสธ และตามด้วยข้อความคำพูดว่าเธอไม่ต้องการที่จะได้คะแนนไม่ดีในการทำโครงการวิจัยของเธอ</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export { Conversation1 };
