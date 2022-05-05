import React from "react";
import { TouchableOpacity, Text, View,  ScrollView } from "react-native";
import styles from "../../styes";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
const Stack = createStackNavigator();

const VocabularyWord2 = ({ navigation }) => {
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
              <Text style={styles.TextGroup}>Teacher (ทีเชอะ) </Text>
              <Text style={styles.TextGroup1}>คุณครู</Text>
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
              <Text style={styles.TextGroup}>Student (สทิวเดนทุ) </Text>
              <Text style={styles.TextGroup1}>นักเรียน</Text>
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
              <Text style={styles.TextGroup}>Janitor (เเจนนิเทอะ) </Text>
              <Text style={styles.TextGroup1}>ภารโรง</Text>
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
              <Text style={styles.TextGroup}>Principal (พรินซิเเพล) </Text>
              <Text style={styles.TextGroup1}>อาจารย์ใหญ่</Text>
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
              <Text style={styles.TextGroup}>School bus (สคูล บัส) </Text>
              <Text style={styles.TextGroup1}>รถโรงเรียน</Text>
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
              <Text style={styles.TextGroup}>Flag (เเฟลก)</Text>
              <Text style={styles.TextGroup1}>ธงชาติ</Text>
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
              <Text style={styles.TextGroup}>Globe (โกลบ) </Text>
              <Text style={styles.TextGroup1}>ลูกโลก</Text>
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
              <Text style={styles.TextGroup}>Map (เเมพ) </Text>
              <Text style={styles.TextGroup1}>เเผนที่</Text>
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
              <Text style={styles.TextGroup}>Guardhouse (การ์ดเฮาซุ) </Text>
              <Text style={styles.TextGroup1}>ป้อมยาม</Text>
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
              <Text style={styles.TextGroup}>Field (ฟีลดุ) </Text>
              <Text style={styles.TextGroup1}>สนาม</Text>
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
              <Text style={styles.TextGroup}>Slider (สไลเดอะ) </Text>
              <Text style={styles.TextGroup1}>ไม้ลื่น</Text>
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
              <Text style={styles.TextGroup}>Bell (เบล) </Text>
              <Text style={styles.TextGroup1}>ระฆัง</Text>
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
              <Text style={styles.TextGroup}>Chair (เเชร์) </Text>
              <Text style={styles.TextGroup1}>เก้าอี้</Text>
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
              <Text style={styles.TextGroup}>School bag (สคูล เเบก) </Text>
              <Text style={styles.TextGroup1}>กระเป๋านักเรียน</Text>
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
              <Text style={styles.TextGroup}>Notice Board (โนทิส บอร์ด) </Text>
              <Text style={styles.TextGroup1}>การดานติดประกาศ</Text>
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
              <Text style={styles.TextGroup}>Blackboard (เเบลคุบอร์ด) </Text>
              <Text style={styles.TextGroup1}>กระดานดำ</Text>
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
              <Text style={styles.TextGroup}>Wall Chart (วอล ชาร์ท) </Text>
              <Text style={styles.TextGroup1}>โปสเตอร์ติดผนัง</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export { VocabularyWord2 };