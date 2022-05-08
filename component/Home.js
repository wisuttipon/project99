import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
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
} from "./Vocabulary/VocabularyGroup";
import * as firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SimpleLineIcons } from "@expo/vector-icons";
import VocabIcon from "../assets/abc.png";
import ConIcon from "../assets/chat.png";
import QuizIcon from "../assets/chose.png";

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
            title: "QuestionLv1",
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
            title: "QuestionLv2",
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
            title: "QuestionLv3",
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
