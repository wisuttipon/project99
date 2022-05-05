import React from "react";
import { TouchableOpacity, Text, View, Image, ScrollView } from "react-native";
import styles from "../styes";
//import { VocabularyWord } from "./VocabWord/VocabBody";
import { createStackNavigator } from "@react-navigation/stack";
import VocabChat from "../../assets/Conversation/chat.png";
import VocabBody1 from "../../assets/VocabularyPicture/b12.jpg";
import VocabBody2 from "../../assets/VocabularyPicture/b13.png";
import VocabBody3 from "../../assets/VocabularyPicture/b14.png";
import VocabBody4 from "../../assets/VocabularyPicture/b15.png";
import VocabBody5 from "../../assets/VocabularyPicture/b16.png";
import VocabBody6 from "../../assets/VocabularyPicture/b17.png";
import VocabBody7 from "../../assets/VocabularyPicture/b18.jpg";
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
               onPress={() => navigation.navigate("Body")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabChat} />
              <Text style={styles.TextCon}>Conversation 1</Text>
              
            </TouchableOpacity>
          </View>

          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
               onPress={() => navigation.navigate("Habitation")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabChat} />
              <Text style={styles.TextCon}>Conversation 2</Text>
              
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
               onPress={() => navigation.navigate("School")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabChat} />
              <Text style={styles.TextCon}>Conversation 3</Text>
              
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabChat} />
              <Text style={styles.TextCon}>Conversation 4</Text>
             
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabChat} />
              <Text style={styles.TextCon}>Conversation 5</Text>
              
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabChat} />
              <Text style={styles.TextCon}>Conversation 6</Text>
              
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabChat} />
              <Text style={styles.TextCon}>Conversation 7</Text>
             
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabChat} />
              <Text style={styles.TextCon}>Conversation 8</Text>
              
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabChat} />
              <Text style={styles.TextCon}>Conversation 9</Text>
              
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabChat} />
              <Text style={styles.TextCon}>Conversation 10</Text>
              
            </TouchableOpacity>
          </View>
         
          
        </View>
      </ScrollView>
    </View>
  );
  
};

  
export {ConversationScreen };
