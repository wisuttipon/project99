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

const Conversation10 = ({ navigation }) => {
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
      .doc('9')
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
<<<<<<< HEAD
        <View style={styles.conversationView}>
          <Image style={styles.conversationImage} source={imageMan} />
          <TouchableOpacity 
            onPress={() => playSound('https://firebasestorage.googleapis.com/v0/b/projectx-781a7.appspot.com/o/ConversationData%20%E0%B8%A3%E0%B8%A7%E0%B8%A1%2FM10-1.mp3?alt=media&token=2fca1afb-1662-4a46-b96d-8f3890d33087')}
            style={styles.conversationTextBox}>
            <View style={styles.conversationView}>
              <Text style={styles.conversationText}>I heard from your roommate that you were up late last night.</Text>
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
            onPress={() => playSound('https://firebasestorage.googleapis.com/v0/b/projectx-781a7.appspot.com/o/ConversationData%20%E0%B8%A3%E0%B8%A7%E0%B8%A1%2FWM10-1.mp3?alt=media&token=e2788049-ac41-4b05-b4ae-b0f29ee19893')}
            style={styles.conversationTextBox}>
            <View style={styles.conversationView}>
              <Text style={styles.conversationText}>Yeah, I had a big history final to prepare for.</Text>
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
          <Image style={styles.conversationImage} source={imageMan} />
          <TouchableOpacity 
            onPress={() => playSound('https://firebasestorage.googleapis.com/v0/b/projectx-781a7.appspot.com/o/ConversationData%20%E0%B8%A3%E0%B8%A7%E0%B8%A1%2FM10-2.mp3?alt=media&token=6bad2412-1858-47e6-9386-afbdc9b78205')}
            style={styles.conversationTextBox}>
            <View style={styles.conversationView}>
              <Text style={styles.conversationText}>How did you do?</Text>
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
            onPress={() => playSound('https://firebasestorage.googleapis.com/v0/b/projectx-781a7.appspot.com/o/ConversationData%20%E0%B8%A3%E0%B8%A7%E0%B8%A1%2FWM10-2.mp3?alt=media&token=b9bdaacc-02ec-4530-a8d7-0328d1c7e81f')}
            style={styles.conversationTextBox}>
            <View style={styles.conversationView}>
              <Text style={styles.conversationText}>I actually did better than I thought I would.</Text>
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
          <Text>จากการสนทนาระหว่างผู้ชายและผู้หญิงเห็นได้ว่าเป็นการคุยเกี่ยวกับการอ่านหนังสือสอบของผู้หญิง จนกระทั่งสอบวิชาประวัติศาสตร์ และสอบได้ดีกว่าที่หล่อนคิดไว้ 

 
</Text>
=======
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
>>>>>>> 069d45fe01b45708440b3e424aaf683d4bc64296
        </View>
      </ScrollView>
    </View>
  );
};

export { Conversation10 };
