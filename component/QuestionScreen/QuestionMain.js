import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image, ScrollView, Button } from "react-native";
import styles from "../styes";
import { createStackNavigator } from "@react-navigation/stack";
import Question1 from "../../assets/QuestionPicture/Q1.png";
import Question2 from "../../assets/QuestionPicture/Q2.png";
import Question3 from "../../assets/QuestionPicture/Q3.png";
import { useFonts } from "expo-font";
import RadioGroup from 'react-native-radio-buttons-group';
import { AntDesign } from "@expo/vector-icons";
import { Audio } from "expo-av";
import * as _ from 'lodash';
import * as firebase from "firebase";
import Dialog from "react-native-dialog";

const Separator = () => <View style={styles.separator} />;
const Stack = createStackNavigator();

const QuestionScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    Montserrat: require("../../assets/static/Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.ContainerQuestion}>
      <ScrollView style={styles.scrollView}>
        <Text></Text>
        <View style={styles.BodyQuestion}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.TextQuestion3}>Learn</Text>
            <Text onPress={() => navigation.navigate("ScoreHistory")} style={styles.TextQuestion3}>Score History {">"}</Text>
          </View>
          <TouchableOpacity
            style={styles.ButtonQuestion}
            onPress={() => navigation.navigate("QuestionLv1")}
          >
            <Image style={styles.QuestionLogo} source={Question1} />
            <Text style={styles.TextQuestion1}> Question 1</Text>
            <Text style={styles.TextQuestion2}>แบบทดสอบที่ 1</Text>
          </TouchableOpacity>
          
        </View>
        <View style={styles.BodyQuestion}>
          <TouchableOpacity
            style={styles.ButtonQuestion1}
            onPress={() => navigation.navigate("QuestionLv2")}
          >
            <Image style={styles.QuestionLogo1} source={Question2} />
            <Text style={styles.TextQuestion1}> Question 2</Text>
            <Text style={styles.TextQuestion2}>แบบทดสอบที่ 2</Text>
          </TouchableOpacity>
        
        </View>
        <View style={styles.BodyQuestion}>
          <TouchableOpacity
            style={styles.ButtonQuestion2}
            onPress={() => navigation.navigate("QuestionLv3")}
          >
            <Image style={styles.QuestionLogo2} source={Question3} />
            <Text style={styles.TextQuestion1}> Question 3</Text>
            <Text style={styles.TextQuestion2}>แบบทดสอบที่ 3</Text>
          </TouchableOpacity>
          
        </View>
        <View></View>
      </ScrollView>
    </View>
  );
};

let score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let dataAnswer = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

const QuestionLv1Screen = ({ navigation }) => {
  const [questionA, setQuestionA] = React.useState([]);
  const [questionB, setQuestionB] = React.useState([]);
  React.useEffect(() => {
    firebase
      .firestore()
      .collection("questions")
      .doc('1')
      .onSnapshot((querySnapshot) => {
        const itemQuestA = [];
        const itemQuestB = [];
        querySnapshot.data().a.forEach((res) => {
          itemQuestA.push(res.question);
        });
        querySnapshot.data().b.forEach((res) => {
          itemQuestB.push(res.question);
        });
        setRadioButtons1A1(querySnapshot.data().a[0].answers);
        setRadioButtons1A2(querySnapshot.data().a[1].answers);
        setRadioButtons1A3(querySnapshot.data().a[2].answers);
        setRadioButtons1A4(querySnapshot.data().a[3].answers);
        setRadioButtons1A5(querySnapshot.data().a[4].answers);
        setRadioButtons1A6(querySnapshot.data().a[5].answers);
        setRadioButtons1A7(querySnapshot.data().a[6].answers);
        setRadioButtons1A8(querySnapshot.data().a[7].answers);
        setRadioButtons1A9(querySnapshot.data().a[8].answers);
        setRadioButtons1A10(querySnapshot.data().a[9].answers);
        setRadioButtons1B1(querySnapshot.data().b[0].answers);
        setRadioButtons1B2(querySnapshot.data().b[1].answers);
        setRadioButtons1B3(querySnapshot.data().b[2].answers);
        setRadioButtons1B4(querySnapshot.data().b[3].answers);
        setRadioButtons1B5(querySnapshot.data().b[4].answers);
        setRadioButtons1B6(querySnapshot.data().b[5].answers);
        setRadioButtons1B7(querySnapshot.data().b[6].answers);
        setRadioButtons1B8(querySnapshot.data().b[7].answers);
        setRadioButtons1B9(querySnapshot.data().b[8].answers);
        setRadioButtons1B10(querySnapshot.data().b[9].answers);
        setQuestionA(itemQuestA);
        setQuestionB(itemQuestB);
      });

      score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      dataAnswer = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  }, []);

  const [radioButtons1A1, setRadioButtons1A1] = useState([]);
  const [radioButtons1A2, setRadioButtons1A2] = useState([]);
  const [radioButtons1A3, setRadioButtons1A3] = useState([]);
  const [radioButtons1A4, setRadioButtons1A4] = useState([]);
  const [radioButtons1A5, setRadioButtons1A5] = useState([]);
  const [radioButtons1A6, setRadioButtons1A6] = useState([]);
  const [radioButtons1A7, setRadioButtons1A7] = useState([]);
  const [radioButtons1A8, setRadioButtons1A8] = useState([]);
  const [radioButtons1A9, setRadioButtons1A9] = useState([]);
  const [radioButtons1A10, setRadioButtons1A10] = useState([]);
  const [radioButtons1B1, setRadioButtons1B1] = useState([]);
  const [radioButtons1B2, setRadioButtons1B2] = useState([]);
  const [radioButtons1B3, setRadioButtons1B3] = useState([]);
  const [radioButtons1B4, setRadioButtons1B4] = useState([]);
  const [radioButtons1B5, setRadioButtons1B5] = useState([]);
  const [radioButtons1B6, setRadioButtons1B6] = useState([]);
  const [radioButtons1B7, setRadioButtons1B7] = useState([]);
  const [radioButtons1B8, setRadioButtons1B8] = useState([]);
  const [radioButtons1B9, setRadioButtons1B9] = useState([]);
  const [radioButtons1B10, setRadioButtons1B10] = useState([]);
  let listRadioA = [
    radioButtons1A1, 
    radioButtons1A2, 
    radioButtons1A3,
    radioButtons1A4,
    radioButtons1A5,
    radioButtons1A6,
    radioButtons1A7,
    radioButtons1A8,
    radioButtons1A9,
    radioButtons1A10,
  ];
  let listRadioB = [
    radioButtons1B1,
    radioButtons1B2,
    radioButtons1B3,
    radioButtons1B4,
    radioButtons1B5,
    radioButtons1B6,
    radioButtons1B7,
    radioButtons1B8,
    radioButtons1B9,
    radioButtons1B10,
  ];
  const [page, setPage] = useState(1);
  function onPressRadioButton(radioButtonsArray) {
    const [result] = radioButtonsArray.filter((item) => item.selected === true);
    const index = radioButtonsArray.findIndex((item) => item.answer === true);
    score[result.no - 1] = result.selected === result.answer ? 1 : 0;
    dataAnswer[result.no - 1] = { selected: result.value, answer: radioButtonsArray[index].value};
  }

  const [showDialog, setShowDialog] = useState(false);
  const [scoreQuestion, setScoreQuestion] = useState(0);
  function onSubmit() {
    let data = {
      score: _.sum(score),
      date_at: new Date(),
    };

    firebase
      .firestore()
      .collection('scores')
      .doc(firebase.auth().currentUser.email)
      .collection('question1')
      .doc()
      .set(data)
      .then(function() {
        setScoreQuestion(data.score);
        setShowDialog(true);
      });
  }

  const [loaded] = useFonts({
    Montserrat: require("../../assets/static/Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <ScrollView style={styles.scrollView}>
      { page <= 10 ? 
        <View style={styles.questionViewHeader}>
          <Text style={{ fontSize: 24 }}>Section A</Text>
          <Text>Choose the word which best completes the sentence</Text>
        </View>
      : 
        <View style={styles.questionViewHeader}>
          <Text style={{ fontSize: 24 }}>Section B</Text>
          <Text>Select the choice that best keeps the meaning of the bold word</Text>
        </View>
      }
      
      {questionA.map((res, i) => {
        if (page === i + 1) {
          return (
            <View key={i} style={styles.questionView}>
              <Text style={styles.questionTextQuestion}>{i+1}. {res}</Text>
              <RadioGroup 
                containerStyle={{ alignItems: 'flex-start' }}
                radioButtons={listRadioA[i]} 
                onPress={onPressRadioButton} 
              />
              <View style={styles.fixToText}>
                { page !== 1 ? 
                  <Button
                    title="Previous"
                    onPress={() => setPage(page - 1)}
                  />
                : <View></View> }
  
                { page !== (questionA.length + questionB.length) ? 
                  <Button
                    title="Next"
                    onPress={() => setPage(page + 1)}
                  />
                : 
                  <Button
                    title="Submit"
                    onPress={onSubmit}
                  />
                }
              </View>
            </View>
          );
        }
      })}
      
      {questionB.map((res, i) => {
        if (page === i + 11) {
          return (
            <View key={i} style={styles.questionView}>
              <Text style={styles.questionTextQuestion}>{i+1}. {res[0]} <Text style={{ fontWeight: 'bold' }}>{res[1]}</Text> {res[2]}</Text>
              <RadioGroup 
                containerStyle={{ alignItems: 'flex-start' }}
                radioButtons={listRadioB[i]} 
                onPress={onPressRadioButton} 
              />
              <View style={styles.fixToText}>
                { page !== 1 ? 
                  <Button
                    title="Previous"
                    onPress={() => setPage(page - 1)}
                  />
                : <View></View> }
  
                { page !== (questionA.length + questionB.length) ? 
                  <Button
                    title="Next"
                    onPress={() => setPage(page + 1)}
                  />
                : 
                  <Button
                    title="Submit"
                    onPress={onSubmit}
                  />
                }
              </View>
            </View>
          );
        }
      })}
      <View style={styles.container}>
        <Dialog.Container visible={showDialog}>
          <Dialog.Title>Score</Dialog.Title>
          <Dialog.Description>
            <Text style={styles.dialogTextScore}>{scoreQuestion} / 20</Text>
          </Dialog.Description>
          <Dialog.Button 
            label="OK" 
            onPress={() => {
              setShowDialog(false);
              navigation.goBack();
            }}
            />
          <Dialog.Button 
            label="Show Answer" 
            onPress={() => {
              setShowDialog(false);
              navigation.goBack();
              navigation.navigate("QuestionShowAnswerScreen", {
                data: dataAnswer
              });
            }}
            />
        </Dialog.Container>
      </View>
    </ScrollView>
  );
};

const QuestionLv2Screen = ({ navigation }) => {
  const [question, setQuestion] = React.useState([]);
  const [text, setText] = React.useState([]);
  React.useEffect(() => {
    firebase
      .firestore()
      .collection("questions")
      .doc('2')
      .onSnapshot((querySnapshot) => {
        const itemQuestion = [];
        const itemText = [];
        querySnapshot.data().data.forEach((res) => {
          itemText.push(res.text);
          itemQuestion.push(res.question);
        });
        setRadioButtons21(querySnapshot.data().data[0].answers);
        setRadioButtons22(querySnapshot.data().data[1].answers);
        setRadioButtons23(querySnapshot.data().data[2].answers);
        setRadioButtons24(querySnapshot.data().data[3].answers);
        setRadioButtons25(querySnapshot.data().data[4].answers);
        setRadioButtons26(querySnapshot.data().data[5].answers);
        setRadioButtons27(querySnapshot.data().data[6].answers);
        setRadioButtons28(querySnapshot.data().data[7].answers);
        setRadioButtons29(querySnapshot.data().data[8].answers);
        setRadioButtons210(querySnapshot.data().data[9].answers);
        setText(itemText);
        setQuestion(itemQuestion);
      });

      score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      dataAnswer = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  }, []);

  const [radioButtons21, setRadioButtons21] = useState([]);
  const [radioButtons22, setRadioButtons22] = useState([]);
  const [radioButtons23, setRadioButtons23] = useState([]);
  const [radioButtons24, setRadioButtons24] = useState([]);
  const [radioButtons25, setRadioButtons25] = useState([]);
  const [radioButtons26, setRadioButtons26] = useState([]);
  const [radioButtons27, setRadioButtons27] = useState([]);
  const [radioButtons28, setRadioButtons28] = useState([]);
  const [radioButtons29, setRadioButtons29] = useState([]);
  const [radioButtons210, setRadioButtons210] = useState([]);
  let listRadio = [
    radioButtons21,
    radioButtons22,
    radioButtons23,
    radioButtons24,
    radioButtons25,
    radioButtons26,
    radioButtons27,
    radioButtons28,
    radioButtons29,
    radioButtons210,
  ];
  const [page, setPage] = useState(1);
  function onPressRadioButton(radioButtonsArray) {
    const [result] = radioButtonsArray.filter((item) => item.selected === true);
    const index = radioButtonsArray.findIndex((item) => item.answer === true);
    score[result.no - 1] = result.selected === result.answer ? 1 : 0;
    dataAnswer[result.no - 1] = { selected: result.value, answer: radioButtonsArray[index].value};
  }

  const [showDialog, setShowDialog] = useState(false);
  const [scoreQuestion, setScoreQuestion] = useState(0);
  function onSubmit() {
    let data = {
      score: _.sum(score),
      date_at: new Date(),
    };
    
    firebase
      .firestore()
      .collection('scores')
      .doc(firebase.auth().currentUser.email)
      .collection('question2')
      .doc()
      .set(data)
      .then(function() {
        setScoreQuestion(data.score);
        setShowDialog(true);
      });
  }

  const [loaded] = useFonts({
    Montserrat: require("../../assets/static/Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <ScrollView style={styles.scrollView}>
      {question.map((res, i) => {
        if (page === i + 1) {
          return (
            <View key={i} style={styles.questionView}>
              <Text style={styles.questionTextQuestion2}>{i+1}.</Text>
              {text[i].map((res2, ii) => {
                return (
                  <Text key={'text'+i+ii} style={styles.questionTextQuestion2}>{res2}</Text>
                );
              })}
              <Text style={styles.questionTextQuestion2}></Text>
              <Text style={styles.questionTextQuestion2}>{res}</Text>
              <RadioGroup 
                containerStyle={{ alignItems: 'flex-start' }}
                radioButtons={listRadio[i]} 
                onPress={onPressRadioButton} 
              />
              <View style={styles.fixToText}>
                  { page !== 1 ? 
                    <Button
                      title="Previous"
                      onPress={() => setPage(page - 1)}
                    />
                  : <View></View> }
    
                  { page !== question.length ? 
                    <Button
                      title="Next"
                      onPress={() => setPage(page + 1)}
                    />
                  : 
                    <Button
                      title="Submit"
                      onPress={onSubmit}
                    />
                  }
                </View>
            </View>
          );
        }
      })}
      <View style={styles.container}>
        <Dialog.Container visible={showDialog}>
          <Dialog.Title>Score</Dialog.Title>
          <Dialog.Description>
            <Text style={styles.dialogTextScore}>{scoreQuestion} / 10</Text>
          </Dialog.Description>
          <Dialog.Button 
            label="OK" 
            onPress={() => {
              setShowDialog(false);
              navigation.goBack();
            }}
            />
          <Dialog.Button 
            label="Show Answer" 
            onPress={() => {
              setShowDialog(false);
              navigation.goBack();
              navigation.navigate("QuestionShowAnswerScreen", {
                data: dataAnswer
              });
            }}
            />
        </Dialog.Container>
      </View>
    </ScrollView>
  );
};

const QuestionLv3Screen = ({ navigation }) => {
  const [question, setQuestion] = React.useState([]);
  const [text, setText] = React.useState([]);
  const [soundURL, setSoundURL] = React.useState([]);
  React.useEffect(() => {
    firebase
      .firestore()
      .collection("questions")
      .doc('3')
      .onSnapshot((querySnapshot) => {
        const itemQuestion = [];
        const itemText = [];
        const itemSound = [];

        querySnapshot.data().data.forEach((res) => {
          itemText.push(res.text);
          itemSound.push(res.sound_url);
          const itemQuestionIn = [];
          res.question.forEach((res2) => {
            itemQuestionIn.push(res2.text);
          });
          itemQuestion.push(itemQuestionIn);
        });
        setRadioButtons31(querySnapshot.data().data[0].question[0].answers);
        setRadioButtons32(querySnapshot.data().data[0].question[1].answers);
        setRadioButtons33(querySnapshot.data().data[0].question[2].answers);
        setRadioButtons34(querySnapshot.data().data[0].question[3].answers);
        
        setRadioButtons35(querySnapshot.data().data[1].question[0].answers);
        setRadioButtons36(querySnapshot.data().data[1].question[1].answers);
        setRadioButtons37(querySnapshot.data().data[1].question[2].answers);

        setRadioButtons38(querySnapshot.data().data[2].question[0].answers);
        setRadioButtons39(querySnapshot.data().data[2].question[1].answers);
        setRadioButtons310(querySnapshot.data().data[2].question[2].answers);
        setRadioButtons311(querySnapshot.data().data[2].question[3].answers);
        setQuestion(itemQuestion);
        setText(itemText);
        setSoundURL(itemSound);
      });

      score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      dataAnswer = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  }, []);

  const [radioButtons31, setRadioButtons31] = useState([]);
  const [radioButtons32, setRadioButtons32] = useState([]);
  const [radioButtons33, setRadioButtons33] = useState([]);
  const [radioButtons34, setRadioButtons34] = useState([]);
  const [radioButtons35, setRadioButtons35] = useState([]);
  const [radioButtons36, setRadioButtons36] = useState([]);
  const [radioButtons37, setRadioButtons37] = useState([]);
  const [radioButtons38, setRadioButtons38] = useState([]);
  const [radioButtons39, setRadioButtons39] = useState([]);
  const [radioButtons310, setRadioButtons310] = useState([]);
  const [radioButtons311, setRadioButtons311] = useState([]);
  let listRadio = [
    radioButtons31,
    radioButtons32,
    radioButtons33,
    radioButtons34,
    radioButtons35,
    radioButtons36,
    radioButtons37,
    radioButtons38,
    radioButtons39,
    radioButtons310,
    radioButtons311,
  ];
  const [mainPage, setMainPage] = useState(1);
  const [page, setPage] = useState(1);
  const [currenPage, setCurrenPage] = useState(1);
  function onPressRadioButton(radioButtonsArray) {
    const [result] = radioButtonsArray.filter((item) => item.selected === true);
    const index = radioButtonsArray.findIndex((item) => item.answer === true);
    score[result.no - 1] = result.selected === result.answer ? 1 : 0;
    dataAnswer[result.no - 1] = { selected: result.value, answer: radioButtonsArray[index].value};
  }

  const [showDialog, setShowDialog] = useState(false);
  const [scoreQuestion, setScoreQuestion] = useState(0);
  function onSubmit() {
    let data = {
      score: _.sum(score),
      date_at: new Date(),
    };
    
    firebase
      .firestore()
      .collection('scores')
      .doc(firebase.auth().currentUser.email)
      .collection('question3')
      .doc()
      .set(data)
      .then(function() {
        setScoreQuestion(data.score);
        setShowDialog(true);
      });
  }
  
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
    Montserrat: require("../../assets/static/Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <ScrollView style={styles.scrollView}>
      {text.map((res, i) => {
        if (mainPage === i+1) {
          return(
            <View key={i}>
              <View style={styles.questionView}>
                <Text style={styles.questionTextQuestion}>{res[0]}</Text>
                <Text style={styles.questionTextQuestion}>{res[1]}</Text>
                <TouchableOpacity 
                  onPress={() => playSound(soundURL[i])}
                  style={styles.questionPlaySound}
                >
                  <AntDesign
                    name="sound"
                    size={48}
                    color="black"
                    style={styles.questionIconSound}
                  />
                  <Text style={styles.questionPlaySoundText}>Play sound</Text>
                </TouchableOpacity>
              </View>
              {question[i].map((res2, ii) => {
                if (mainPage === i+1 && page === ii+1) {
                  return (
                    <View key={'question'+i+ii}>
                      <View style={styles.questionView}>
                        <Text style={styles.questionTextQuestion}>{currenPage}. {res2}</Text>
                        <RadioGroup 
                          containerStyle={{ alignItems: 'flex-start' }}
                          radioButtons={listRadio[currenPage-1]} 
                          onPress={onPressRadioButton} 
                        />
                      </View>
                      <View style={styles.fixToText}>
                        { (mainPage !== 1 || page !== 1) ? 
                          <Button
                            title="Previous"
                            onPress={() => {
                              setPage(page-1);
                              setCurrenPage(currenPage-1);
                              if (page === 1) {
                                setMainPage(mainPage-1);
                                setPage(question[i-1].length);
                              }
                            }}
                          />
                        : <View></View> }
          
                        { mainPage !== text.length || page !== question[i].length ? 
                          <Button
                            title="Next"
                            onPress={() => {
                              setPage(page+1);
                              setCurrenPage(currenPage+1);
                              if (page === question[i].length) {
                                setMainPage(mainPage+1);
                                setPage(1);
                              }
                            }}
                          />
                        : 
                          <Button
                            title="Submit"
                            onPress={onSubmit}
                          />
                        }
                      </View>
                    </View>
                  );
                }
              })}
            </View>
          );
        }
      })}
      <View style={styles.container}>
        <Dialog.Container visible={showDialog}>
          <Dialog.Title>Score</Dialog.Title>
          <Dialog.Description>
            <Text style={styles.dialogTextScore}>{scoreQuestion} / 11</Text>
          </Dialog.Description>
          <Dialog.Button 
            label="OK" 
            onPress={() => {
              setShowDialog(false);
              navigation.goBack();
            }}
            />
          <Dialog.Button 
            label="Show Answer" 
            onPress={() => {
              setShowDialog(false);
              navigation.goBack();
              navigation.navigate("QuestionShowAnswerScreen", {
                data: dataAnswer
              });
            }}
            />
        </Dialog.Container>
      </View>
    </ScrollView>
  );
};

export { QuestionScreen };
export { QuestionLv1Screen };
export { QuestionLv2Screen };
export { QuestionLv3Screen };
