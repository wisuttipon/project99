import React ,{useEffect}from "react";
import { TouchableOpacity, Text, View, ScrollView } from "react-native";
import styles from "../../styes";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';
const Stack = createStackNavigator();

const VocabularyWord = ({ navigation }) => {
  useEffect(() => {
     firebase.firestore()
       .collection("Body")
      .doc("VocabBody")
      .get()
      .then((res) => {
        console.log(res.data);
      });
  }, []); 
  const [loaded] = useFonts({
    Montserrat: require("../../../assets/static/Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.ContainerVocabularyWord}>
      <ScrollView style={styles.scrollView}>
        <View>
          <View style={styles.WordVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Body")}
              style={styles.ButtonVocabularyWord}
            >
              <AntDesign
                name="sound"
                size={54}
                color="black"
                style={styles.inputIconWord}
              />
              <Text style={styles.TextGroup}>Head (เฮด) </Text>
              <Text style={styles.TextGroup1}>ศีรษะ</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Habitation")}
              style={styles.ButtonVocabularyWord}
            >
              <AntDesign
                name="sound"
                size={54}
                color="black"
                style={styles.inputIconWord}
              />
              <Text style={styles.TextGroup}>Eye (อาย) </Text>
              <Text style={styles.TextGroup1}>ตา</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.navigate("School")}
              style={styles.ButtonVocabularyWord}
            >
              <AntDesign
                name="sound"
                size={54}
                color="black"
                style={styles.inputIconWord}
              />
              <Text style={styles.TextGroup}>Ear (เอียร์) </Text>
              <Text style={styles.TextGroup1}>หู</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.ButtonVocabularyWord}
            >
              <AntDesign
                name="sound"
                size={54}
                color="black"
                style={styles.inputIconWord}
              />
              <Text style={styles.TextGroup}>Shoulder (โชคเดอะ) </Text>
              <Text style={styles.TextGroup1}>ไหล่</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.ButtonVocabularyWord}
            >
              <AntDesign
                name="sound"
                size={54}
                color="black"
                style={styles.inputIconWord}
              />
              <Text style={styles.TextGroup}>Elbow (เอลโบ) </Text>
              <Text style={styles.TextGroup1}>ข้อศอก</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.ButtonVocabularyWord}
            >
              <AntDesign
                name="sound"
                size={54}
                color="black"
                style={styles.inputIconWord}
              />
              <Text style={styles.TextGroup}>Hand (เเฮน)</Text>
              <Text style={styles.TextGroup1}>มือ</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.ButtonVocabularyWord}
            >
              <AntDesign
                name="sound"
                size={54}
                color="black"
                style={styles.inputIconWord}
              />
              <Text style={styles.TextGroup}>Thigh (ไธ) </Text>
              <Text style={styles.TextGroup1}>ต้นขา</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.ButtonVocabularyWord}
            >
              <AntDesign
                name="sound"
                size={54}
                color="black"
                style={styles.inputIconWord}
              />
              <Text style={styles.TextGroup}>Leg (เลก) </Text>
              <Text style={styles.TextGroup1}>ขา</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.ButtonVocabularyWord}
            >
              <AntDesign
                name="sound"
                size={54}
                color="black"
                style={styles.inputIconWord}
              />
              <Text style={styles.TextGroup}>Toenail (โทเนล) </Text>
              <Text style={styles.TextGroup1}>เล็บเท้า</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.ButtonVocabularyWord}
            >
              <AntDesign
                name="sound"
                size={54}
                color="black"
                style={styles.inputIconWord}
              />
              <Text style={styles.TextGroup}>Toe (โท) </Text>
              <Text style={styles.TextGroup1}>นิ้วเท้า</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.ButtonVocabularyWord}
            >
              <AntDesign
                name="sound"
                size={54}
                color="black"
                style={styles.inputIconWord}
              />
              <Text style={styles.TextGroup}>Palm (พาล์ม) </Text>
              <Text style={styles.TextGroup1}>ฝ่ามือ</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.ButtonVocabularyWord}
            >
              <AntDesign
                name="sound"
                size={54}
                color="black"
                style={styles.inputIconWord}
              />
              <Text style={styles.TextGroup}>Arm (อาร์ม) </Text>
              <Text style={styles.TextGroup1}>เเขน</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.ButtonVocabularyWord}
            >
              <AntDesign
                name="sound"
                size={54}
                color="black"
                style={styles.inputIconWord}
              />
              <Text style={styles.TextGroup}>Mouth (เมาส์) </Text>
              <Text style={styles.TextGroup1}>ปาก</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.ButtonVocabularyWord}
            >
              <AntDesign
                name="sound"
                size={54}
                color="black"
                style={styles.inputIconWord}
              />
              <Text style={styles.TextGroup}>Chest (เชสทํ) </Text>
              <Text style={styles.TextGroup1}>หน้าอก</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.ButtonVocabularyWord}
            >
              <AntDesign
                name="sound"
                size={54}
                color="black"
                style={styles.inputIconWord}
              />
              <Text style={styles.TextGroup}>Navel (เนเวล) </Text>
              <Text style={styles.TextGroup1}>สะดือ</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.ButtonVocabularyWord}
            >
              <AntDesign
                name="sound"
                size={54}
                color="black"
                style={styles.inputIconWord}
              />
              <Text style={styles.TextGroup}>Adbomen (เเอบโดเมน) </Text>
              <Text style={styles.TextGroup1}>หน้าท้อง</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.ButtonVocabularyWord}
            >
              <AntDesign
                name="sound"
                size={54}
                color="black"
                style={styles.inputIconWord}
              />
              <Text style={styles.TextGroup}>Knee (นี) </Text>
              <Text style={styles.TextGroup1}>หัวเข่า</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.ButtonVocabularyWord}
            >
              <AntDesign
                name="sound"
                size={54}
                color="black"
                style={styles.inputIconWord}
              />
              <Text style={styles.TextGroup}>Foot (ฟุท) </Text>
              <Text style={styles.TextGroup1}>เท้า</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export { VocabularyWord };
