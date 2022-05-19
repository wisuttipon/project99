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

const Conversation6 = ({ navigation }) => {
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
          <Image style={styles.conversationImage} source={imageWoman} />
          <TouchableOpacity 
            onPress={() => playSound('https://firebasestorage.googleapis.com/v0/b/projectx-781a7.appspot.com/o/ConversationData%20%E0%B8%A3%E0%B8%A7%E0%B8%A1%2FWM6-1.mp3?alt=media&token=fd211ded-e803-4186-a392-e2156005b903')}
            style={styles.conversationTextBox}>
            <View style={styles.conversationView}>
              <Text style={styles.conversationText}>You look really pale. Are you coming down with something?</Text>
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
            onPress={() => playSound('https://firebasestorage.googleapis.com/v0/b/projectx-781a7.appspot.com/o/ConversationData%20%E0%B8%A3%E0%B8%A7%E0%B8%A1%2FM6-1.mp3?alt=media&token=f8149e31-a63e-44ef-9718-c53b467f9ff5')}
            style={styles.conversationTextBox}>
            <View style={styles.conversationView}>
              <Text style={styles.conversationText}>Yeah, I caught the cold that's been going around lately.</Text>
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
            onPress={() => playSound('https://firebasestorage.googleapis.com/v0/b/projectx-781a7.appspot.com/o/ConversationData%20%E0%B8%A3%E0%B8%A7%E0%B8%A1%2FWM6-2.mp3?alt=media&token=b028ff6e-7cf5-4df6-a6ac-da715d9fcb41')}
            style={styles.conversationTextBox}>
            <View style={styles.conversationView}>
              <Text style={styles.conversationText}>The pharmacy's nearby. Do you want me to pick up some medicine for you?</Text>
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
            onPress={() => playSound('https://firebasestorage.googleapis.com/v0/b/projectx-781a7.appspot.com/o/ConversationData%20%E0%B8%A3%E0%B8%A7%E0%B8%A1%2FM6-2.mp3?alt=media&token=73a0b24d-eab9-4de0-b1a8-1ad5c996a2ed')}
            style={styles.conversationTextBox}>
            <View style={styles.conversationView}>
              <Text style={styles.conversationText}>It's okay. I was just there yesterday and got what I needed. I'm heading back to the dorm to take some right now.</Text>
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
          <Text>จากการสนทนาผู้ชายเป็นหวัดไม่มียารับประทานติดตัว ผู้หญิงจะไปช่วยหาซื้อให้แต่ผู้ชายบอกว่ามียาแล้วจะกลับไปเอาที่หอพัก</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export { Conversation6 };
