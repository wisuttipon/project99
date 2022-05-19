import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image, ScrollView } from "react-native";
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
            <Text style={styles.TextQuestion2}>เเบบทดสอบที่ 1</Text>
          </TouchableOpacity>
          
        </View>
        <View style={styles.BodyQuestion}>
          <TouchableOpacity
            style={styles.ButtonQuestion1}
            onPress={() => navigation.navigate("QuestionLv2")}
          >
            <Image style={styles.QuestionLogo1} source={Question2} />
            <Text style={styles.TextQuestion1}> Question 2</Text>
            <Text style={styles.TextQuestion2}>เเบบทดสอบที่ 2</Text>
          </TouchableOpacity>
        
        </View>
        <View style={styles.BodyQuestion}>
          <TouchableOpacity
            style={styles.ButtonQuestion2}
            onPress={() => navigation.navigate("QuestionLv3")}
          >
            <Image style={styles.QuestionLogo2} source={Question3} />
            <Text style={styles.TextQuestion1}> Question 3</Text>
            <Text style={styles.TextQuestion2}>เเบบทดสอบที่ 3</Text>
          </TouchableOpacity>
          
        </View>
        <View></View>
      </ScrollView>
    </View>
  );
};

const radioData1A1 = [
  { no: 1, id: '1', label: 'a. turbulent', value: 'a', answer: true },
  { no: 1, id: '2', label: 'b. voluble', value: 'b', answer: false },
  { no: 1, id: '3', label: 'c. feverish', value: 'c',answer: false },
  { no: 1, id: '4', label: 'd. skittish', value: 'd', answer: false }
];
const radioData1A2 = [
  { no: 2, id: '1', label: 'a. snaps', value: 'a', answer: false },
  { no: 2, id: '2', label: 'b. spans', value: 'b', answer: true },
  { no: 2, id: '3', label: 'c. slits', value: 'c', answer: false },
  { no: 2, id: '4', label: 'd. scans', value: 'd',answer: false }
];
const radioData1A3 = [
  { no: 3, id: '1', label: 'a. impartial', value: 'a', answer: false },
  { no: 3, id: '2', label: 'b. expansive', value: 'b', answer: false },
  { no: 3, id: '3', label: 'c. oblivious', value: 'c', answer: true },
  { no: 3, id: '4', label: 'd. facetious', value: 'd',answer: false }
];
const radioData1A4 = [
  { no: 4, id: '1', label: 'a. occupants', value: 'a', answer: true },
  { no: 4, id: '2', label: 'b. partisans', value: 'b', answer: false },
  { no: 4, id: '3', label: 'c. predecessors', value: 'c', answer: false },
  { no: 4, id: '4', label: 'd. habitations', value: 'd',answer: false }
];
const radioData1A5 = [
  { no: 5, id: '1', label: 'a. negotiate', value: 'a', answer: true },
  { no: 5, id: '2', label: 'b. stipulate', value: 'b', answer: false },
  { no: 5, id: '3', label: 'c. reciprocate', value: 'c', answer: false },
  { no: 5, id: '4', label: 'd. correlate', value: 'd',answer: false }
];
const radioData1A6 = [
  { no: 6, id: '1', label: 'a. precise', value: 'a', answer: true },
  { no: 6, id: '2', label: 'b. effusive', value: 'b', answer: false },
  { no: 6, id: '3', label: 'c. utter', value: 'c', answer: false },
  { no: 6, id: '4', label: 'd. affluent', value: 'd',answer: false }
];
const radioData1A7 = [
  { no: 7, id: '1', label: 'a. discloses', value: 'a', answer: false },
  { no: 7, id: '2', label: 'b. exalts', value: 'b', answer: false },
  { no: 7, id: '3', label: 'c. surpasses', value: 'c', answer: false },
  { no: 7, id: '4', label: 'd. expires', value: 'd',answer: true }
];
const radioData1A8 = [
  { no: 8, id: '1', label: 'a. entreated', value: 'a', answer: false },
  { no: 8, id: '2', label: 'b. allotted', value: 'b', answer: true },
  { no: 8, id: '3', label: 'c. resolved', value: 'c', answer: false },
  { no: 8, id: '4', label: 'd. detached', value: 'd',answer: false }
];
const radioData1A9 = [
  { no: 9, id: '1', label: 'a. consort', value: 'a', answer: false },
  { no: 9, id: '2', label: 'b. connect', value: 'b', answer: false },
  { no: 9, id: '3', label: 'c. Comply', value: 'c', answer: true },
  { no: 9, id: '4', label: 'd. contrive', value: 'd',answer: false }
];
const radioData1A10 = [
  { no: 10, id: '1', label: 'a. transfixed', value: 'a', answer: false },
  { no: 10, id: '2', label: 'b. stabilized', value: 'b', answer: false },
  { no: 10, id: '3', label: 'c. rectified', value: 'c', answer: false },
  { no: 10, id: '4', label: 'd. synchronized', value: 'd',answer: true }
];

const radioData1B1 = [
  { no: 11, id: '1', label: 'a. improved', value: 'a', answer: false },
  { no: 11, id: '2', label: 'b. recognized', value: 'b', answer: false },
  { no: 11, id: '3', label: 'c. resumed', value: 'c',answer: true },
  { no: 11, id: '4', label: 'd. worsened', value: 'd', answer: false }
];
const radioData1B2 = [
  { no: 12, id: '1', label: 'a. by-product', value: 'a', answer: false },
  { no: 12, id: '2', label: 'b. ingredient', value: 'b', answer: true },
  { no: 12, id: '3', label: 'c. additive', value: 'c', answer: false },
  { no: 12, id: '4', label: 'd. flavor', value: 'd',answer: false }
];
const radioData1B3 = [
  { no: 13, id: '1', label: 'a. heir', value: 'a', answer: false },
  { no: 13, id: '2', label: 'b. spouse', value: 'b', answer: true },
  { no: 13, id: '3', label: 'c. groom', value: 'c', answer: false },
  { no: 13, id: '4', label: 'd. relative', value: 'd',answer: false }
];
const radioData1B4 = [
  { no: 14, id: '1', label: 'a. hidden', value: 'a', answer: false },
  { no: 14, id: '2', label: 'b. barbaric', value: 'b', answer: true },
  { no: 14, id: '3', label: 'c. grim', value: 'c', answer: false },
  { no: 14, id: '4', label: 'd. oppressive', value: 'd',answer: false }
];
const radioData1B5 = [
  { no: 15, id: '1', label: 'a. anthems', value: 'a', answer: false },
  { no: 15, id: '2', label: 'b. flags', value: 'b', answer: true },
  { no: 15, id: '3', label: 'c. symbols', value: 'c', answer: false },
  { no: 15, id: '4', label: 'd. badges', value: 'd',answer: false }
];
const radioData1B6 = [
  { no: 16, id: '1', label: 'a. education', value: 'a', answer: false },
  { no: 16, id: '2', label: 'b. housing', value: 'b', answer: true },
  { no: 16, id: '3', label: 'c. nutrition', value: 'c', answer: false },
  { no: 16, id: '4', label: 'd. opportunity', value: 'd',answer: false }
];
const radioData1B7 = [
  { no: 17, id: '1', label: 'a. Selective', value: 'a', answer: false },
  { no: 17, id: '2', label: 'b. Temporary', value: 'b', answer: false },
  { no: 17, id: '3', label: 'c. Obligatory', value: 'c', answer: true },
  { no: 17, id: '4', label: 'd. Discretionary', value: 'd',answer: false }
];
const radioData1B8 = [
  { no: 18, id: '1', label: 'a. Table of contents', value: 'a', answer: false },
  { no: 18, id: '2', label: 'b. introduction', value: 'b', answer: true },
  { no: 18, id: '3', label: 'c. explanatory notes', value: 'c', answer: false },
  { no: 18, id: '4', label: 'd. index', value: 'd',answer: false }
];
const radioData1B9 = [
  { no: 19, id: '1', label: 'a. respected', value: 'a', answer: false },
  { no: 19, id: '2', label: 'b. renowned', value: 'b', answer: true },
  { no: 19, id: '3', label: 'c. admired', value: 'c', answer: false },
  { no: 19, id: '4', label: 'd. commemorated', value: 'd',answer: false }
];
const radioData1B10 = [
  { no: 20, id: '1', label: 'a. strip', value: 'a', answer: false },
  { no: 20, id: '2', label: 'b. piece', value: 'b', answer: true },
  { no: 20, id: '3', label: 'c. copy', value: 'c', answer: false },
  { no: 20, id: '4', label: 'd. slab', value: 'd',answer: false }
];

const QuestionLv1Screen = ({ navigation }) => {
  const [radioButtons1A1, setRadioButtons1A1] = useState(radioData1A1);
  const [radioButtons1A2, setRadioButtons1A2] = useState(radioData1A2);
  const [radioButtons1A3, setRadioButtons1A3] = useState(radioData1A3);
  const [radioButtons1A4, setRadioButtons1A4] = useState(radioData1A4);
  const [radioButtons1A5, setRadioButtons1A5] = useState(radioData1A5);
  const [radioButtons1A6, setRadioButtons1A6] = useState(radioData1A6);
  const [radioButtons1A7, setRadioButtons1A7] = useState(radioData1A7);
  const [radioButtons1A8, setRadioButtons1A8] = useState(radioData1A8);
  const [radioButtons1A9, setRadioButtons1A9] = useState(radioData1A9);
  const [radioButtons1A10, setRadioButtons1A10] = useState(radioData1A10);
  const [radioButtons1B1, setRadioButtons1B1] = useState(radioData1B1);
  const [radioButtons1B2, setRadioButtons1B2] = useState(radioData1B2);
  const [radioButtons1B3, setRadioButtons1B3] = useState(radioData1B3);
  const [radioButtons1B4, setRadioButtons1B4] = useState(radioData1B4);
  const [radioButtons1B5, setRadioButtons1B5] = useState(radioData1B5);
  const [radioButtons1B6, setRadioButtons1B6] = useState(radioData1B6);
  const [radioButtons1B7, setRadioButtons1B7] = useState(radioData1B7);
  const [radioButtons1B8, setRadioButtons1B8] = useState(radioData1B8);
  const [radioButtons1B9, setRadioButtons1B9] = useState(radioData1B9);
  const [radioButtons1B10, setRadioButtons1B10] = useState(radioData1B10);
  let score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  function onPressRadioButton(radioButtonsArray) {
    const [result] = radioButtonsArray.filter((item) => item.selected === true);
    score[result.no - 1] = result.selected === result.answer ? 1 : 0;
  }

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
        navigation.goBack();
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
      <View style={styles.questionViewHeader}>
        <Text style={{ fontSize: 24 }}>Section A</Text>
        <Text>Choose the word which best completes the sentence</Text>
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>1. Because of stormy weather and ___seas, the ship left port two days late.</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons1A1} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>2. The river is half a mile wide at the point where the bridge___ it.</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons1A2} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>3. Mary was so busy studying in the library that she was___ of the storm outside.</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons1A3} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>4. The Bush family used to live in that house, but Mr. and Mrs. Williams are the___ now.</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons1A4} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>5. Union and management hope they can___ a contract before the workers strike.</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons1A5} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>6. Jack and Jill kept___ and complete records of all their business expenses.</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons1A6} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>7. Your library permit ___next month; you'll have to get a new one if you want to borrow more books.</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons1A7} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>8. Because there was so little food, each family was___ only one kilogram of rice a week.</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons1A8} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>9. Although we dislike that law, we will___ with it.</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons1A9} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>10. They had to begin at exactly the same time, and so they all___ their watches.</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons1A10} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionViewHeader}>
        <Text style={{ fontSize: 24 }}>Section B</Text>
        <Text>Select the choice that best keeps the meaning of the bold word</Text>
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>1. Diplomatic relations between China and the United States were <Text style={{ fontWeight: 'bold' }}>restored</Text> during the Nixon administration.</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons1B1} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>2. Acetic acid is a weak organic acid that is the sour <Text style={{ fontWeight: 'bold' }}>constituent</Text> of vinegar.</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons1B2} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>3. Queen Victoria's <Text style={{ fontWeight: 'bold' }}>consort</Text>, Prince Albert, was her first cousin and the nephew of the king of the Belgians, Leopold I.</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons1B3} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>4. In 1945, the Allies liberated a string of <Text style={{ fontWeight: 'bold' }}>savage</Text> labor camps as they pushed through Germany.</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons1B4} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>5. Elements of Britain's Union Jack have been incorporated into the <Text style={{ fontWeight: 'bold' }}>banners</Text> of many nations.</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons1B5} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>6. Hull House pioneered in child labor reform and in the fight for better <Text style={{ fontWeight: 'bold' }}>accommodations</Text>, parks, and playgrounds.</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons1B6} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>7. <Text style={{ fontWeight: 'bold' }}>Compulsory</Text> service in the U.S. armed forces was ended in 1973.</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons1B7} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>8. Renaissance books established the convention of the <Text style={{ fontWeight: 'bold' }}>preface</Text>.</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons1B8} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>9. Agatha Christie was <Text style={{ fontWeight: 'bold' }}>celebrated</Text> in her own time for the sheer quantity of her work.</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons1B9} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>10. A single reference to Jesus appears on one tiny <Text style={{ fontWeight: 'bold' }}>fragment</Text> of the Dead Sea Scrolls.</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons1B10} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <TouchableOpacity
            onPress={onSubmit}
            style={styles.questionSubmit}
            underlayColor="#fff"
          >
            <Text style={styles.loginText}>SUBMIT</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const radioData21 = [
  { no: 1, id: '1', label: 'a. His advice was useful to the woman.', value: 'a', answer: true },
  { no: 1, id: '2', label: 'b. He thinks the woman should change majors.', value: 'b', answer: false },
  { no: 1, id: '3', label: 'c. He is having a hard time making a decision.', value: 'c',answer: false },
  { no: 1, id: '4', label: 'd. Computer science will be too difficult for the woman.', value: 'd', answer: false }
];
const radioData22 = [
  { no: 2, id: '1', label: 'a. The woman has expertise in a variety of study strategies.', value: 'a', answer: false },
  { no: 2, id: '2', label: 'b. He is willing to tell the woman what he has learned.', value: 'b', answer: true },
  { no: 2, id: '3', label: 'c. He is going to fail his classes this semester.', value: 'c', answer: false },
  { no: 2, id: '4', label: 'd. He already takes really good notes.', value: 'd',answer: false }
];
const radioData23 = [
  { no: 3, id: '1', label: 'a. The man should apply for a parking permit.', value: 'a', answer: false },
  { no: 3, id: '2', label: 'b. The man should use parking lot number 4.', value: 'b', answer: false },
  { no: 3, id: '3', label: 'c. The man should move into a new apartment building.', value: 'c', answer: false },
  { no: 3, id: '4', label: 'd. The man should carpool with her friends.', value: 'd',answer: true }
];
const radioData24 = [
  { no: 4, id: '1', label: 'a. She has to write her paper.', value: 'a', answer: false },
  { no: 4, id: '2', label: 'b. She finished class early.', value: 'b', answer: false },
  { no: 4, id: '3', label: 'c. She will meet the man later.', value: 'c', answer: true },
  { no: 4, id: '4', label: 'd. She doesn\'t like racquetball.', value: 'd',answer: false }
];
const radioData25 = [
  { no: 5, id: '1', label: 'a. Leave the office for a lunch break', value: 'a', answer: false },
  { no: 5, id: '2', label: 'b. Schedule a new appointment', value: 'b', answer: false },
  { no: 5, id: '3', label: 'c. Wait for the professor\'s return', value: 'c', answer: true },
  { no: 5, id: '4', label: 'd. Meet the professor at 11:30 am', value: 'd',answer: false }
];
const radioData26 = [
  { no: 6, id: '1', label: 'a. The woman should postpone it.', value: 'a', answer: false },
  { no: 6, id: '2', label: 'b. The woman should skip the picnic and complete it.', value: 'b', answer: true },
  { no: 6, id: '3', label: 'c. It can be finished at the picnic.', value: 'c', answer: false },
  { no: 6, id: '4', label: 'd. He didn\'t know the assignment was late.', value: 'd',answer: false }
];
const radioData27 = [
  { no: 7, id: '1', label: 'a. The man told his supervisor that he will quit.', value: 'a', answer: false },
  { no: 7, id: '2', label: 'b. The man doesn\'t like his supervisor.', value: 'b', answer: false },
  { no: 7, id: '3', label: 'c. His salary at the library is low.', value: 'c', answer: true },
  { no: 7, id: '4', label: 'd. She will start a new job at the bookstore.', value: 'd',answer: false }
];
const radioData28 = [
  { no: 8, id: '1', label: 'a. She wants to present on Tuesday.', value: 'a', answer: false },
  { no: 8, id: '2', label: 'b. She will spend Sunday preparing for her presentation.', value: 'b', answer: true },
  { no: 8, id: '3', label: 'c. She went to the party instead of studying.', value: 'c', answer: false },
  { no: 8, id: '4', label: 'd. She doesn\'t have enough time to study this weekend.', value: 'd',answer: false }
];
const radioData29 = [
  { no: 9, id: '1', label: 'a. The man should drink more coffee.', value: 'a', answer: false },
  { no: 9, id: '2', label: 'b. The man should sleep.', value: 'b', answer: true },
  { no: 9, id: '3', label: 'c. The man should study harder.', value: 'c', answer: false },
  { no: 9, id: '4', label: 'd. The man should not feel alarmed.', value: 'd',answer: false }
];
const radioData210 = [
  { no: 10, id: '1', label: 'a. The man won\'t be able to make up the test.', value: 'a', answer: false },
  { no: 10, id: '2', label: 'b. The assistant will see that the man takes the test.', value: 'b', answer: true },
  { no: 10, id: '3', label: 'c. The woman will give the class another exam this afternoon.', value: 'c', answer: false },
  { no: 10, id: '4', label: 'd. The woman will see a doctor.', value: 'd',answer: false }
];
const QuestionLv2Screen = ({ navigation }) => {
  const [radioButtons21, setRadioButtons21] = useState(radioData21);
  const [radioButtons22, setRadioButtons22] = useState(radioData22);
  const [radioButtons23, setRadioButtons23] = useState(radioData23);
  const [radioButtons24, setRadioButtons24] = useState(radioData24);
  const [radioButtons25, setRadioButtons25] = useState(radioData25);
  const [radioButtons26, setRadioButtons26] = useState(radioData26);
  const [radioButtons27, setRadioButtons27] = useState(radioData27);
  const [radioButtons28, setRadioButtons28] = useState(radioData28);
  const [radioButtons29, setRadioButtons29] = useState(radioData29);
  const [radioButtons210, setRadioButtons210] = useState(radioData210);
  let score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  function onPressRadioButton(radioButtonsArray) {
    const [result] = radioButtonsArray.filter((item) => item.selected === true);
    score[result.no - 1] = result.selected === result.answer ? 1 : 0;
  }

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
        navigation.goBack();
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
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion2}>1.</Text>
        <Text style={styles.questionTextQuestion2}>W: I'm having a hard time making a decision. I just know I love both art and computers.</Text>
        <Text style={styles.questionTextQuestion2}>M: Then have you ever considered graphic design?</Text>
        <Text style={styles.questionTextQuestion2}>W: I haven't, but I'll be sure to look into it. Thanks, Professor.</Text>
        <Text style={styles.questionTextQuestion2}>M: No problem. I'm glad I could help.</Text>
        <Text style={styles.questionTextQuestion2}></Text>
        <Text style={styles.questionTextQuestion2}>Q: What does the man imply?</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons21} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion2}>2.</Text>
        <Text style={styles.questionTextQuestion2}>W: Did that workshop really help you take better notes?</Text>
        <Text style={styles.questionTextQuestion2}>M: Yeah, and they also went over some really good study strategies.</Text>
        <Text style={styles.questionTextQuestion2}>W: Really? I've been having some trouble studying for my classes this semester. Do you think you could share what you learned?</Text>
        <Text style={styles.questionTextQuestion2}>M: Sure, although I'm certainly no expert.</Text>
        <Text style={styles.questionTextQuestion2}></Text>
        <Text style={styles.questionTextQuestion2}>Q: What does the man mean?</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons22} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion2}>3.</Text>
        <Text style={styles.questionTextQuestion2}>M: I can't believe they're closing down parking lot number 4.</Text>
        <Text style={styles.questionTextQuestion2}>W: There will be over 130 less parking spaces next year. It's going to be tough to get a permit</Text>
        <Text style={styles.questionTextQuestion2}>M: They are giving priority to carpools, but I don't know anyone in my neighborhood.</Text>
        <Text style={styles.questionTextQuestion2}>W: I have a few friends in your apartment building. You could always carpool with them.</Text>
        <Text style={styles.questionTextQuestion2}>M: You think so? That would be great.</Text>
        <Text style={styles.questionTextQuestion2}></Text>
        <Text style={styles.questionTextQuestion2}>Q: What does the woman suggest?</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons23} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion2}>4.</Text>
        <Text style={styles.questionTextQuestion2}>M: Hey, where are you going? I thought you were done with classes by 3.</Text>
        <Text style={styles.questionTextQuestion2}>W: I missed a class this morning. I'm going to my professor's office hours to turn in a paper that was due today.</Text>
        <Text style={styles.questionTextQuestion2}>M: How about some racquetball when you get back?</Text>
        <Text style={styles.questionTextQuestion2}>W: That sounds good. I've been feeling so stressed lately.</Text>
        <Text style={styles.questionTextQuestion2}>M: Stop by my room when you get back from campus then.</Text>
        <Text style={styles.questionTextQuestion2}></Text>
        <Text style={styles.questionTextQuestion2}>Q: What can be inferred about the woman?</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons24} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion2}>5.</Text>
        <Text style={styles.questionTextQuestion2}>W: I have an appointment with Dr. Johnson at 12:30. My name is Christine.</Text>
        <Text style={styles.questionTextQuestion2}>M: Actually, your appointment was for 11:30 am.</Text>
        <Text style={styles.questionTextQuestion2}>W: Are you sure? I was positive about the appointment time.</Text>
        <Text style={styles.questionTextQuestion2}>M: In any case, the professor left for lunch at noon. She usually takes an hour.</Text>
        <Text style={styles.questionTextQuestion2}>W: Well, would you mind if I take a seat here?</Text>
        <Text style={styles.questionTextQuestion2}>M: Not at all.</Text>
        <Text style={styles.questionTextQuestion2}></Text>
        <Text style={styles.questionTextQuestion2}>Q: What will the woman probably do next?</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons25} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion2}>6.</Text>
        <Text style={styles.questionTextQuestion2}>M: The picnic is starting now.</Text>
        <Text style={styles.questionTextQuestion2}>W: Well, I still have to finish my paper, but I could really use a break.</Text>
        <Text style={styles.questionTextQuestion2}>M: Your paper is already a day late as it is. If I were you, I'd stay put and just get it over with.</Text>
        <Text style={styles.questionTextQuestion2}>W: I guess you're right. I just wish writing wasn't so difficult for me.</Text>
        <Text style={styles.questionTextQuestion2}></Text>
        <Text style={styles.questionTextQuestion2}>Q : What does the man say about the assignment?</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons26} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion2}>7.</Text>
        <Text style={styles.questionTextQuestion2}>W: So when do you start your new job at the bookstore?</Text>
        <Text style={styles.questionTextQuestion2}>M: I haven't told my supervisor that I'm quitting yet.</Text>
        <Text style={styles.questionTextQuestion2}>W: It's too bad the library doesn't pay well since I know you like working here.</Text>
        <Text style={styles.questionTextQuestion2}>M: Actually, the pay is decent. Plus, I really like my supervisor, too.</Text>
        <Text style={styles.questionTextQuestion2}></Text>
        <Text style={styles.questionTextQuestion2}>Q : What had the woman assumed?</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons27} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion2}>8.</Text>
        <Text style={styles.questionTextQuestion2}>W: Did you see the sign up sheet? I forgot which day my presentation is.</Text>
        <Text style={styles.questionTextQuestion2}>M: I'm not sure. I remember you signed up for either Monday or Tuesday.</Text>
        <Text style={styles.questionTextQuestion2}>W: Well, I'd rather present on Monday since I have a party to go to Monday night.</Text>
        <Text style={styles.questionTextQuestion2}>M: So you're planning to prepare for it over the weekend?</Text>
        <Text style={styles.questionTextQuestion2}>W: Yeah. I'm going to work on it on Sunday.</Text>
        <Text style={styles.questionTextQuestion2}></Text>
        <Text style={styles.questionTextQuestion2}>Q : What does the woman mean?</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons28} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion2}>9.</Text>
        <Text style={styles.questionTextQuestion2}>W: How come you're not sleeping yet?</Text>
        <Text style={styles.questionTextQuestion2}>M: I have a midterm tomorrow, but I can hardly keep my eyes open. I've only slept five hours in the last three days.</Text>
        <Text style={styles.questionTextQuestion2}>W: Well, as long as you're this tired, you're not going to get any real studying done.</Text>
        <Text style={styles.questionTextQuestion2}>M: Yeah, I hate to admit it, but I think you're right.</Text>
        <Text style={styles.questionTextQuestion2}>W: Just don't forget to set your alarm!</Text>
        <Text style={styles.questionTextQuestion2}></Text>
        <Text style={styles.questionTextQuestion2}>Q: What does the woman suggest?</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons29} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion2}>10.</Text>
        <Text style={styles.questionTextQuestion2}>M: Professor, I have a doctor's note here. Can I make up the test I missed yesterday?</Text>
        <Text style={styles.questionTextQuestion2}>W: I'm planning to give the tests back this afternoon during the lecture.</Text>
        <Text style={styles.questionTextQuestion2}>M: Can I make up the quiz right now?</Text>
        <Text style={styles.questionTextQuestion2}>W: I have a meeting to go to, but here's the quiz. I'll have my assistant come in here as a proctor.</Text>
        <Text style={styles.questionTextQuestion2}>M: Thank you so much!</Text>
        <Text style={styles.questionTextQuestion2}></Text>
        <Text style={styles.questionTextQuestion2}>Q: What can be inferred about this conversation?</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons210} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <TouchableOpacity
            onPress={onSubmit}
            style={styles.questionSubmit}
            underlayColor="#fff"
          >
            <Text style={styles.loginText}>SUBMIT</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const radioData31 = [
  { no: 1, id: '1', label: 'a. The diet of sailors.', value: 'a', answer: false },
  { no: 1, id: '2', label: 'b. The arrangement of museum exhibits.', value: 'b', answer: false },
  { no: 1, id: '3', label: 'c. The classification of large birds.', value: 'c',answer: false },
  { no: 1, id: '4', label: 'd. An extinct bird.', value: 'd', answer: true }
];
const radioData32 = [
  { no: 2, id: '1', label: 'a. They were poor swimmers.', value: 'a', answer: false },
  { no: 2, id: '2', label: 'b. They couldn\'t fly.', value: 'b', answer: true },
  { no: 2, id: '3', label: 'c. Their bright colors made them easy to see.', value: 'c', answer: false },
  { no: 2, id: '4', label: 'd. They moved in large groups.', value: 'd',answer: false }
];
const radioData33 = [
  { no: 3, id: '1', label: 'a. It was a pest.', value: 'a', answer: false },
  { no: 3, id: '2', label: 'b. They needed food.', value: 'b', answer: true },
  { no: 3, id: '3', label: 'c. They needed exercise.', value: 'c', answer: false },
  { no: 3, id: '4', label: 'd. They wanted scientific specimens.', value: 'd',answer: false }
];
const radioData34 = [
  { no: 4, id: '1', label: 'a. tropical islands.', value: 'a', answer: false },
  { no: 4, id: '2', label: 'b. In rain forests.', value: 'b', answer: false },
  { no: 4, id: '3', label: 'c. In cold ocean areas.', value: 'c', answer: true },
  { no: 4, id: '4', label: 'd. In grassland regions.', value: 'd',answer: false }
];
const radioData35 = [
  { no: 5, id: '1', label: 'a. Passing around mineral specimens.', value: 'a', answer: true },
  { no: 5, id: '2', label: 'b. Looking at minerals under the microscope.', value: 'b', answer: false },
  { no: 5, id: '3', label: 'c. Classifying minerals.', value: 'c', answer: false },
  { no: 5, id: '4', label: 'd. Watching a slide presentation.', value: 'd',answer: false }
];
const radioData36 = [
  { no: 6, id: '1', label: 'a. Dr. Kane gave them to her.', value: 'a', answer: false },
  { no: 6, id: '2', label: 'b. She bought them from a jeweler.', value: 'b', answer: false },
  { no: 6, id: '3', label: 'c. She found them in New Mexico.', value: 'c', answer: false },
  { no: 6, id: '4', label: 'd. She collected them herself.', value: 'd',answer: true }
];
const radioData37 = [
  { no: 7, id: '1', label: 'a. They are difficult to find.', value: 'a', answer: true },
  { no: 7, id: '2', label: 'b. Their color is unique.', value: 'b', answer: false },
  { no: 7, id: '3', label: 'c. They are found in volcanic rock.', value: 'c', answer: false },
  { no: 7, id: '4', label: 'd. Their size is impressive.', value: 'd',answer: false }
];
const radioData38 = [
  { no: 8, id: '1', label: 'a. Showing children how to behave.', value: 'a', answer: false },
  { no: 8, id: '2', label: 'b. Helping children overcome shyness.', value: 'b', answer: true },
  { no: 8, id: '3', label: 'c. Several causes of childhood shyness.', value: 'c', answer: false },
  { no: 8, id: '4', label: 'd. How timid children become shy adults.', value: 'd',answer: false }
];
const radioData39 = [
  { no: 9, id: '1', label: 'a. Few people think that they are shy.', value: 'a', answer: false },
  { no: 9, id: '2', label: 'b. Hardly anyone overcomes shyness.', value: 'b', answer: false },
  { no: 9, id: '3', label: 'c. Few psychologists treat shyness.', value: 'c', answer: false },
  { no: 9, id: '4', label: 'd. Almost half of the people surveyed said they are shy.', value: 'd',answer: true }
];
const radioData310 = [
  { no: 10, id: '1', label: 'a. Those who have suffered childhood trauma.', value: 'a', answer: false },
  { no: 10, id: '2', label: 'b. Those with shy parents.', value: 'b', answer: true },
  { no: 10, id: '3', label: 'c. Those whose parents have pressured them to succeed.', value: 'c', answer: false },
  { no: 10, id: '4', label: 'd. Those who have been trained in social skills.', value: 'd',answer: false }
];
const radioData311 = [
  { no: 11, id: '1', label: 'a. Protect them from other children.', value: 'a', answer: false },
  { no: 11, id: '2', label: 'b. Force them to smile.', value: 'b', answer: false },
  { no: 11, id: '3', label: 'c. Persuade them to try new things.', value: 'c', answer: true },
  { no: 11, id: '4', label: 'd. Accept them as they are.', value: 'd',answer: false }
];
const QuestionLv3Screen = ({ navigation }) => {
  const [radioButtons31, setRadioButtons31] = useState(radioData31);
  const [radioButtons32, setRadioButtons32] = useState(radioData32);
  const [radioButtons33, setRadioButtons33] = useState(radioData33);
  const [radioButtons34, setRadioButtons34] = useState(radioData34);
  const [radioButtons35, setRadioButtons35] = useState(radioData35);
  const [radioButtons36, setRadioButtons36] = useState(radioData36);
  const [radioButtons37, setRadioButtons37] = useState(radioData37);
  const [radioButtons38, setRadioButtons38] = useState(radioData38);
  const [radioButtons39, setRadioButtons39] = useState(radioData39);
  const [radioButtons310, setRadioButtons310] = useState(radioData310);
  const [radioButtons311, setRadioButtons311] = useState(radioData311);
  let score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  function onPressRadioButton(radioButtonsArray) {
    const [result] = radioButtonsArray.filter((item) => item.selected === true);
    score[result.no - 1] = result.selected === result.answer ? 1 : 0;
  }

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
        navigation.goBack();
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
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>Questions 1-4</Text>
        <Text style={styles.questionTextQuestion}>Listen to a museum guide describe one of the new museum exhibits.</Text>
        <TouchableOpacity 
          onPress={() => playSound('https://firebasestorage.googleapis.com/v0/b/projectx-781a7.appspot.com/o/%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B9%80%E0%B9%80%E0%B8%9A%E0%B8%9A%E0%B8%97%E0%B8%94%E0%B8%AA%E0%B8%AD%E0%B8%9A%2F%E0%B9%80%E0%B9%80%E0%B8%9A%E0%B8%9A%E0%B8%97%E0%B8%94%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B8%97%E0%B8%B5%E0%B9%883%20%E0%B8%82%E0%B9%89%E0%B8%AD%201-4.mp3?alt=media&token=7c765703-c439-4460-ae84-8d83ec237e48')}
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
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>1. What is the talk mainly about?</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons31} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>2. Why was it easy to capture auks?</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons32} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>3. Why did the sailors hunt the auk?</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons33} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>4. Where did the auk live?</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons34} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>Questions 5-7</Text>
        <Text style={styles.questionTextQuestion}>Listen to a presentation being given in a geology class.</Text>
        <TouchableOpacity 
          onPress={() => playSound('https://firebasestorage.googleapis.com/v0/b/projectx-781a7.appspot.com/o/%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B9%80%E0%B9%80%E0%B8%9A%E0%B8%9A%E0%B8%97%E0%B8%94%E0%B8%AA%E0%B8%AD%E0%B8%9A%2F%E0%B9%80%E0%B9%80%E0%B8%9A%E0%B8%9A%E0%B8%97%E0%B8%94%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B8%97%E0%B8%B5%E0%B9%883%20%E0%B8%82%E0%B9%89%E0%B8%AD%205-7.mp3?alt=media&token=77a4a4bb-4740-4055-b778-7e41ee8088dc')}
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
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>5. What are the students doing as they listen to the speaker?</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons35} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>6. How did the speaker acquire all her minerals?</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons36} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>7. Why is the speaker proud of her plagioclase feldspars?</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons37} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>Questions 8-11</Text>
        <Text style={styles.questionTextQuestion}>Listen to part of lecture on child psychology.</Text>
        <TouchableOpacity 
          onPress={() => playSound('https://firebasestorage.googleapis.com/v0/b/projectx-781a7.appspot.com/o/%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B9%80%E0%B9%80%E0%B8%9A%E0%B8%9A%E0%B8%97%E0%B8%94%E0%B8%AA%E0%B8%AD%E0%B8%9A%2F%E0%B9%80%E0%B9%80%E0%B8%9A%E0%B8%9A%E0%B8%97%E0%B8%94%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B8%97%E0%B8%B5%E0%B9%883%20%E0%B8%82%E0%B9%89%E0%B8%AD%208-11.mp3?alt=media&token=6d896914-a849-47a1-9f2b-9ef24506af30')}
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
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>8. What is the lecture mostly about?</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons38} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>9. What does the speaker say about shyness?</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons39} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>10. According to the speaker, which people are most likely to be shy?</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons310} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionTextQuestion}>11. According to the speaker, what should parents of shy children do?</Text>
        <RadioGroup 
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons311} 
          onPress={onPressRadioButton} 
        />
      </View>
      <View style={styles.questionView}>
        <TouchableOpacity
            onPress={onSubmit}
            style={styles.questionSubmit}
            underlayColor="#fff"
          >
            <Text style={styles.loginText}>SUBMIT</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export { QuestionScreen };
export { QuestionLv1Screen };
export { QuestionLv2Screen };
export { QuestionLv3Screen };
