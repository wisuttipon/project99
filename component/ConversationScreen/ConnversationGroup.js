import React from "react";
import { TouchableOpacity, Text, View, Image, ScrollView } from "react-native";
import styles from "../styes";
import { createStackNavigator } from "@react-navigation/stack";
import VocabMovie from "../../assets/Conversation/clapperboard.png";
import VocabMuseum from "../../assets/Conversation/museum.png";
import VocabConcert from "../../assets/Conversation/Concert.png";
import VocabBook from "../../assets/Conversation/book.png";
import VocabSchool from "../../assets/Conversation/school.png";
import VocabSick from "../../assets/Conversation/sick.png";
import VocabTest from "../../assets/Conversation/test.png";
import VocabStudy from "../../assets/Conversation/study.png";
import VocabCall from "../../assets/Conversation/calling.png";
import VocabReading from "../../assets/Conversation/reading.png";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

const ConversationScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    Montserrat: require("../../assets/static/Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }
  
  return (
    <View style={styles.ContainerVocabulary}>
      <ScrollView style={styles.scrollView}>
        <View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.navigate("conversation1")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabMovie} />
              <Text style={styles.TextCon}>Movie Conversation</Text>
              
            </TouchableOpacity>
          </View>

          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
               onPress={() => navigation.navigate("conversation2")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabMuseum} />
              <Text style={styles.TextCon}>Museum Conversation </Text>
              
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
               onPress={() => navigation.navigate("conversation3")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabConcert} />
              <Text style={styles.TextCon}>Concert Conversation </Text>
              
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.navigate("conversation4")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabBook} />
              <Text style={styles.TextCon}>Book Conversation</Text>
             
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.navigate("conversation5")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabSchool} />
              <Text style={styles.TextCon}>School Conversation</Text>
              
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.navigate("conversation6")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabSick} />
              <Text style={styles.TextCon}>Sick Conversation</Text>
              
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.navigate("conversation7")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabTest} />
              <Text style={styles.TextCon}>Test Conversation</Text>
             
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.navigate("conversation8")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabStudy} />
              <Text style={styles.TextCon}>Study Conversation</Text>
              
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.navigate("conversation9")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabCall} />
              <Text style={styles.TextCon}>Telephone call Conversation</Text>
              
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.navigate("conversation10")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabReading} />
              <Text style={styles.TextCon}>Reading book Conversation</Text>
              
            </TouchableOpacity>
          </View>
         
          
        </View>
      </ScrollView>
    </View>
  );
  
};

  
export {ConversationScreen };
