import React from "react";
import { TouchableOpacity, Text, View, Image, ScrollView } from "react-native";
import styles from "./styes";
import { ConversationScreen } from "./ConversationScreen/ConnversationGroup";
import {
  QuestionScreen,
  QuestionLv1Screen,
  QuestionLv2Screen,
  QuestionLv3Screen,
} from "./QuestionScreen/QuestionMain";
import {
  VocabularyScreen,
  VocabularyWord,
  VocabularyWord1,
  VocabularyWord2,
  VocabularyWord3,
  VocabularyWord4,
  VocabularyWord5,
  VocabularyWord6,
  VocabularyWord7,
  VocabularyWord8,
  VocabularyWord9,
} from "./Vocabulary/VocabularyGroup";
import * as firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SimpleLineIcons } from "@expo/vector-icons";
import VocabIcon from "../assets/abc.png";
import ConIcon from "../assets/chat.png";
import QuizIcon from "../assets/chose.png";
import { Conversation1 } from "./ConversationScreen/conversations/conversation1";
import { Conversation2 } from "./ConversationScreen/conversations/conversation2";
import { Conversation3 } from "./ConversationScreen/conversations/conversation3";
import { Conversation4 } from "./ConversationScreen/conversations/conversation4";
import { Conversation5 } from "./ConversationScreen/conversations/conversation5";
import { Conversation6 } from "./ConversationScreen/conversations/conversation6";
import { Conversation7 } from "./ConversationScreen/conversations/conversation7";
import { Conversation8 } from "./ConversationScreen/conversations/conversation8";
import { Conversation9 } from "./ConversationScreen/conversations/conversation9";
import { Conversation10 } from "./ConversationScreen/conversations/conversation10";
import { ScoreHistory, ScoreHistoryQuestion1, ScoreHistoryQuestion2, ScoreHistoryQuestion3 } from "./QuestionScreen/ScoreHistory";
import { QuestionShowAnswerScreen } from "./QuestionScreen/QuestionShowAnswer";

const Stack = createStackNavigator();

const Home = ({ navigation }) => {
  const onLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate("Login");
        console.log("success");
      });
  };

  const Separator = () => <View style={styles.separator} />;

  const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.ContainerEn}>
        <ScrollView style={styles.scrollView}>
          <View>
            <Text style={styles.TextApp1}> Vocabulary </Text>
            <Image style={styles.PicVocab} source={VocabIcon} />

            <TouchableOpacity
              style={styles.ButtonEnglish}
              onPress={() => navigation.navigate("Vocabulary")}
            >
              <Text style={styles.TextApp}> Getting started</Text>
            </TouchableOpacity>
            <Separator />
          </View>

          <View>
            <Text style={styles.TextApp1}> Conversation</Text>
            <Image style={styles.PicVocab} source={ConIcon} />
            <TouchableOpacity
              style={styles.ButtonEnglish}
              onPress={() => navigation.navigate("Conversation")}
            >
              <Text style={styles.TextApp}> Getting started</Text>
            </TouchableOpacity>
            <Separator />
          </View>

          <View>
            <Text style={styles.TextApp1}> Question</Text>
            <Image style={styles.PicVocab} source={QuizIcon} />
            <TouchableOpacity
              style={styles.ButtonEnglish}
              onPress={() => navigation.navigate("Question")}
            >
              <Text style={styles.TextApp}> Getting started</Text>
            </TouchableOpacity>
            <Separator />
          </View>
        </ScrollView>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Main Home",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Vocabulary"
          component={VocabularyScreen}
          options={{
            title: "Vocabulary",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Body"
          component={VocabularyWord}
          options={{
            title: "Body",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Habitation"
          component={VocabularyWord1}
          options={{
            title: "Habitation",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="School"
          component={VocabularyWord2}
          options={{
            title: "School",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
        
        <Stack.Screen
          name="Foods"
          component={VocabularyWord3}
          options={{
            title: "Foods",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Music"
          component={VocabularyWord4}
          options={{
            title: "Music",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Library"
          component={VocabularyWord5}
          options={{
            title: "Library",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Zoo"
          component={VocabularyWord6}
          options={{
            title: "Zoo",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Sports"
          component={VocabularyWord7}
          options={{
            title: "Sports",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
         <Stack.Screen
          name="Occupation"
          component={VocabularyWord8}
          options={{
            title: "Occupation",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
         <Stack.Screen
          name="Vegetables"
          component={VocabularyWord9}
          options={{
            title: "Vegetables",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
        
        <Stack.Screen
          name="Conversation"
          component={ConversationScreen}
          options={{
            title: "Conversation",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen
          name="conversation1"
          component={Conversation1}
          options={{
            title: "Conversation 1",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="conversation2"
          component={Conversation2}
          options={{
            title: "Conversation 2",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="conversation3"
          component={Conversation3}
          options={{
            title: "Conversation 3",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="conversation4"
          component={Conversation4}
          options={{
            title: "Conversation 4",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="conversation5"
          component={Conversation5}
          options={{
            title: "Conversation 5",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="conversation6"
          component={Conversation6}
          options={{
            title: "Conversation 6",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="conversation7"
          component={Conversation7}
          options={{
            title: "Conversation 7",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="conversation8"
          component={Conversation8}
          options={{
            title: "Conversation 8",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="conversation9"
          component={Conversation9}
          options={{
            title: "Conversation 9",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="conversation10"
          component={Conversation10}
          options={{
            title: "Conversation 10",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen
          name="Question"
          component={QuestionScreen}
          options={{
            title: "Main Question",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="QuestionLv1"
          component={QuestionLv1Screen}
          options={{
            title: "Question 1",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="QuestionLv2"
          component={QuestionLv2Screen}
          options={{
            title: "Question 2",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="QuestionLv3"
          component={QuestionLv3Screen}
          options={{
            title: "Question 3",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen
          name="ScoreHistory"
          component={ScoreHistory}
          options={{
            title: "Score History",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="ScoreHistoryQuestion1"
          component={ScoreHistoryQuestion1}
          options={{
            title: "Score Question 1",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="ScoreHistoryQuestion2"
          component={ScoreHistoryQuestion2}
          options={{
            title: "Score Question 2",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="ScoreHistoryQuestion3"
          component={ScoreHistoryQuestion3}
          options={{
            title: "Score Question 3",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="QuestionShowAnswerScreen"
          component={QuestionShowAnswerScreen}
          options={{
            title: "Question Answer",
            headerStyle: {
              backgroundColor: "#439de4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <TouchableOpacity onPress={onLogout}>
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#fff"
                  style={styles.inputIcon1}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Home;
