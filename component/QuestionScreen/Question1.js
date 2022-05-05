import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import styles from "../styes";
import { createStackNavigator } from "@react-navigation/stack";
import Question1 from "../../assets/QuestionPicture/Q1.png";
import Question2 from "../../assets/QuestionPicture/Q2.png";
import Question3 from "../../assets/QuestionPicture/Q3.png";
import { useFonts } from "expo-font";
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
      <Text></Text>
      <View style={styles.BodyQuestion}><Text style={styles.TextQuestion3}>Learn</Text>
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
    </View>
  );
};
const QuestionLv1Screen = ({ navigation }) => {
  return (
    <View style={styles.ContainerEn}>
      <View>
        <View style={styles.ButtonBack}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.TextBack}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const QuestionLv2Screen = ({ navigation }) => {
  return (
    <View style={styles.ContainerEn}>
      <View>
        <View style={styles.ButtonBack}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.TextBack}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const QuestionLv3Screen = ({ navigation }) => {
  return (
    <View style={styles.ContainerEn}>
      <View>
        <View style={styles.ButtonBack}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.TextBack}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export { QuestionScreen };
export { QuestionLv1Screen };
export { QuestionLv2Screen };
export { QuestionLv3Screen };
