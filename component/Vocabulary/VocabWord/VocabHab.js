import React from "react";
import { TouchableOpacity, Text, View,  ScrollView } from "react-native";
import styles from "../../styes";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
const Stack = createStackNavigator();

const VocabularyWord1 = ({ navigation }) => {
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
              <Text style={styles.TextGroup}>House (เฮาซุ) </Text>
              <Text style={styles.TextGroup1}>บ้านเดี่ยว</Text>
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
              <Text style={styles.TextGroup}>Bungalow (บังกะโล) </Text>
              <Text style={styles.TextGroup1}>บังกะโล</Text>
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
              <Text style={styles.TextGroup}>Tent (เทนทุ) </Text>
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
              <Text style={styles.TextGroup}>Mansion (เเมนชัน) </Text>
              <Text style={styles.TextGroup1}>บ้านหลังใหญ่</Text>
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
              <Text style={styles.TextGroup}>Brick house (บริค เฮาซุ) </Text>
              <Text style={styles.TextGroup1}>บ้านที่ก่อด้วยอิฐ</Text>
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
              <Text style={styles.TextGroup}>Castle (คาสเซิล)</Text>
              <Text style={styles.TextGroup1}>ปลาสาท</Text>
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
              <Text style={styles.TextGroup}>Lodge (ลอดจุ) </Text>
              <Text style={styles.TextGroup1}>บ้านพักในป่า</Text>
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
              <Text style={styles.TextGroup}>Town house (ทาวนุเฮาซุ) </Text>
              <Text style={styles.TextGroup1}>บ้านในเมือง</Text>
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
              <Text style={styles.TextGroup}>Apartment (อะพาร์ทเมนทุ) </Text>
              <Text style={styles.TextGroup1}>อาคารที่มีห้องให้เช่า</Text>
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
              <Text style={styles.TextGroup}>Condominuium (คอมโดมิเนียม) </Text>
              <Text style={styles.TextGroup1}>ห้องชุดที่อยู่ในคาร</Text>
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
              <Text style={styles.TextGroup}>Wooden house (วูดเดน เฮาซุ) </Text>
              <Text style={styles.TextGroup1}>บ้านไม้</Text>
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
              <Text style={styles.TextGroup}>Conttage (คอททิจุ) </Text>
              <Text style={styles.TextGroup1}>บ้านพักตากอากาศ</Text>
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
              <Text style={styles.TextGroup}>Houseboat (เฮาซุโบท) </Text>
              <Text style={styles.TextGroup1}>เรือนเเพ</Text>
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
              <Text style={styles.TextGroup}>Guesthouse (เกสทุเฮาซุ) </Text>
              <Text style={styles.TextGroup1}>บ้านรับรองเเขก</Text>
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
              <Text style={styles.TextGroup}>Rest home (เรสทุ โฮม) </Text>
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
              <Text style={styles.TextGroup}>Penthouse (เพนทุเฮาซุ) </Text>
              <Text style={styles.TextGroup1}>บ้านเล็กบนตึก</Text>
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
              <Text style={styles.TextGroup}>FarmHouse (ฟาร์มเฮาซุ) </Text>
              <Text style={styles.TextGroup1}>บ้านไร่</Text>
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
              <Text style={styles.TextGroup}>Mobile home (โมไบลุ โฮม) </Text>
              <Text style={styles.TextGroup1}>บ้านเคลื่อนที่</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export { VocabularyWord1 };