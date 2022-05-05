import React from "react";
import { TouchableOpacity, Text, View,  ScrollView } from "react-native";
import styles from "../../styes";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
const Stack = createStackNavigator();

const VocabularyWord3 = ({ navigation }) => {
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
              <Text style={styles.TextGroup}>Hot dog (ฮอท ดอก) </Text>
              <Text style={styles.TextGroup1}>ฮอตด็อก</Text>
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
              <Text style={styles.TextGroup}>Sandwich (เเซนวิช) </Text>
              <Text style={styles.TextGroup1}>ขนมปังเเซนด์วิช</Text>
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
              <Text style={styles.TextGroup}>Pizza (พิทซะ) </Text>
              <Text style={styles.TextGroup1}>พิซซ่า</Text>
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
              <Text style={styles.TextGroup}>Hamburger (เเฮมเบอเกอะ) </Text>
              <Text style={styles.TextGroup1}>เเฮมเบอร์เกอร์</Text>
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
              <Text style={styles.TextGroup}>Steak (สเทค) </Text>
              <Text style={styles.TextGroup1}>เนื้อสเต็ก</Text>
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
              <Text style={styles.TextGroup}>French fries (เฟรนชุ ไฟรสุ)</Text>
              <Text style={styles.TextGroup1}>มันฝรั่งทอด</Text>
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
              <Text style={styles.TextGroup}>Salad (เเซลเลิด) </Text>
              <Text style={styles.TextGroup1}>สลัดผัก</Text>
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
              <Text style={styles.TextGroup}>Dressing (เดรสซิง) </Text>
              <Text style={styles.TextGroup1}>น้ำสลัด</Text>
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
              <Text style={styles.TextGroup}>Pasta (พาสทะ) </Text>
              <Text style={styles.TextGroup1}>พาสต้า</Text>
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
              <Text style={styles.TextGroup}>Macaroni (เเมคคะโรนี) </Text>
              <Text style={styles.TextGroup1}>มะกะโรนี</Text>
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
              <Text style={styles.TextGroup}>Spaghetti (สพะเกทที) </Text>
              <Text style={styles.TextGroup1}>สปาเก็ตตี้</Text>
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
              <Text style={styles.TextGroup}>Barbecue (บาร์บิคิว) </Text>
              <Text style={styles.TextGroup1}>เนื้อหรือหมูย่าง</Text>
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
              <Text style={styles.TextGroup}>Fried rice (ไฟรดุ ไรซุ) </Text>
              <Text style={styles.TextGroup1}>ข้าวผัด</Text>
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
              <Text style={styles.TextGroup}>Cereal (เซีนเรียล) </Text>
              <Text style={styles.TextGroup1}>ซีเรียล</Text>
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
              <Text style={styles.TextGroup}>Cornfrakes (คอร์นเฟลกซุ) </Text>
              <Text style={styles.TextGroup1}>คอร์นเฟล็ค</Text>
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
              <Text style={styles.TextGroup}>Bacon (เบเคิน) </Text>
              <Text style={styles.TextGroup1}>เบคอน</Text>
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
              <Text style={styles.TextGroup}>Omelette (ออมเลท) </Text>
              <Text style={styles.TextGroup1}>ไข่เจียว</Text>
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
              <Text style={styles.TextGroup}>Bread (เบรด) </Text>
              <Text style={styles.TextGroup1}>ขนมปัง</Text>
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
              <Text style={styles.TextGroup}>Croissant (คราวะซาน) </Text>
              <Text style={styles.TextGroup1}>ครัวซองต์</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export { VocabularyWord3 };