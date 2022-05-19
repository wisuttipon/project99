import React from "react";
import { TouchableOpacity, Text, View, Image, ScrollView } from "react-native";
import styles from "../styes";
import { createStackNavigator } from "@react-navigation/stack";
import VocabChat from "../../assets/Conversation/chat.png";
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
              <Image style={styles.ConLogo} source={VocabChat} />
              <Text style={styles.TextCon}>Conversation 1</Text>
              
            </TouchableOpacity>
          </View>

          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
               onPress={() => navigation.navigate("conversation2")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabChat} />
              <Text style={styles.TextCon}>Conversation 2</Text>
              
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
               onPress={() => navigation.navigate("conversation3")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabChat} />
              <Text style={styles.TextCon}>Conversation 3</Text>
              
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.navigate("conversation4")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabChat} />
              <Text style={styles.TextCon}>Conversation 4</Text>
             
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.navigate("conversation5")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabChat} />
              <Text style={styles.TextCon}>Conversation 5</Text>
              
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.navigate("conversation6")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabChat} />
              <Text style={styles.TextCon}>Conversation 6</Text>
              
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.navigate("conversation7")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabChat} />
              <Text style={styles.TextCon}>Conversation 7</Text>
             
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.navigate("conversation8")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabChat} />
              <Text style={styles.TextCon}>Conversation 8</Text>
              
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.navigate("conversation9")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.ConLogo} source={VocabChat} />
              <Text style={styles.TextCon}>Conversation 9</Text>
              
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.navigate("conversation10")}
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
