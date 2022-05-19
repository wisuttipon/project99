import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, View, Image, ScrollView } from "react-native";
import styles from "../styes";
import { createStackNavigator } from "@react-navigation/stack";
import imageScore from "../../assets/QuestionPicture/score.png";
import { useFonts } from "expo-font";
import * as firebase from "firebase";

const Stack = createStackNavigator();

const ScoreHistory = ({ navigation }) => {
  const [loaded] = useFonts({
    Montserrat: require("../../assets/static/Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.HistoryBox}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ScoreHistoryQuestion1")}
          style={{ flexDirection: "row" }}
        >
          <Image style={styles.conversationImage} source={imageScore} />
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>ScoreQuestion 1</Text>
            <Text style={{ fontSize: 20 }}>คะแนนแบบทดสอบที่ 1</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.HistoryBox}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ScoreHistoryQuestion2")}
          style={{ flexDirection: "row" }}
        >
          <Image style={styles.conversationImage} source={imageScore} />
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>ScoreQuestion 2</Text>
            <Text style={{ fontSize: 20 }}>คะแนนแบบทดสอบที่ 2</Text>
          </View>
        </TouchableOpacity>
      </View><View style={styles.HistoryBox}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ScoreHistoryQuestion3")}
          style={{ flexDirection: "row" }}
        >
          <Image style={styles.conversationImage} source={imageScore} />
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>ScoreQuestion 3</Text>
            <Text style={{ fontSize: 20 }}>คะแนนแบบทดสอบที่ 3</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const ScoreHistoryQuestion1 = ({ navigation }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const data = [];
    firebase
      .firestore()
      .collection("scores")
      .doc(firebase.auth().currentUser.email)
      .collection("question1")
      .orderBy('date_at', 'desc')
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const { date_at, score } = doc.data();
          data.push({
            key: doc.id,
            date_at,
            score
          });
        });
        setItems(data);
      });
  }, []);

  getDateTimeFormatted = (data) => {
    const date = new Date(data);
    const resultDate = date.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const resultTime = date.toLocaleTimeString('th-TH', {
        hour: '2-digit',
        minute: '2-digit',
    });
    return `วันที่ ${resultDate} เวลา ${resultTime}`;
}

  const [loaded] = useFonts({
    Montserrat: require("../../assets/static/Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View>
      <View style={styles.HistoryBox}>
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.conversationImage} source={imageScore} />
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>ScoreQuestion 1</Text>
            <Text style={{ fontSize: 20 }}>คะแนนแบบทดสอบที่ 1</Text>
          </View>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
      {items.map((data, i) => {
        return (
          <View key={i} style={styles.HistoryBox}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ justifyContent: 'center' }}>
                <Text>{getDateTimeFormatted(data.date_at.seconds*1000)}</Text>
                <Text>คะแนน: {data.score} / 20</Text>
              </View>
            </View>
          </View>
        );
      })}
      </ScrollView>
    </View>
  );
};

const ScoreHistoryQuestion2 = ({ navigation }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const data = [];
    firebase
      .firestore()
      .collection("scores")
      .doc(firebase.auth().currentUser.email)
      .collection("question2")
      .orderBy('date_at', 'desc')
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const { date_at, score } = doc.data();
          data.push({
            key: doc.id,
            date_at,
            score
          });
        });
        setItems(data);
      });
  }, []);

  getDateTimeFormatted = (data) => {
    const date = new Date(data);
    const resultDate = date.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const resultTime = date.toLocaleTimeString('th-TH', {
        hour: '2-digit',
        minute: '2-digit',
    });
    return `วันที่ ${resultDate} เวลา ${resultTime}`;
}

  const [loaded] = useFonts({
    Montserrat: require("../../assets/static/Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View>
      <View style={styles.HistoryBox}>
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.conversationImage} source={imageScore} />
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>ScoreQuestion 2</Text>
            <Text style={{ fontSize: 20 }}>คะแนนแบบทดสอบที่ 2</Text>
          </View>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
      {items.map((data, i) => {
        return (
          <View key={i} style={styles.HistoryBox}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ justifyContent: 'center' }}>
                <Text>{getDateTimeFormatted(data.date_at.seconds*1000)}</Text>
                <Text>คะแนน: {data.score} / 10</Text>
              </View>
            </View>
          </View>
        );
      })}
      </ScrollView>
    </View>
  );
};

const ScoreHistoryQuestion3 = ({ navigation }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const data = [];
    firebase
      .firestore()
      .collection("scores")
      .doc(firebase.auth().currentUser.email)
      .collection("question3")
      .orderBy('date_at', 'desc')
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const { date_at, score } = doc.data();
          data.push({
            key: doc.id,
            date_at,
            score
          });
        });
        setItems(data);
      });
  }, []);

  getDateTimeFormatted = (data) => {
    const date = new Date(data);
    const resultDate = date.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const resultTime = date.toLocaleTimeString('th-TH', {
        hour: '2-digit',
        minute: '2-digit',
    });
    return `วันที่ ${resultDate} เวลา ${resultTime}`;
}

  const [loaded] = useFonts({
    Montserrat: require("../../assets/static/Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View>
      <View style={styles.HistoryBox}>
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.conversationImage} source={imageScore} />
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>ScoreQuestion 3</Text>
            <Text style={{ fontSize: 20 }}>คะแนนแบบทดสอบที่ 3</Text>
          </View>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
      {items.map((data, i) => {
        return (
          <View key={i} style={styles.HistoryBox}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ justifyContent: 'center' }}>
                <Text>{getDateTimeFormatted(data.date_at.seconds*1000)}</Text>
                <Text>คะแนน: {data.score} / 11</Text>
              </View>
            </View>
          </View>
        );
      })}
      </ScrollView>
    </View>
  );
};

export { ScoreHistory };
export { ScoreHistoryQuestion1 };
export { ScoreHistoryQuestion2 };
export { ScoreHistoryQuestion3 };