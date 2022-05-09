import React from "react";
import { TouchableOpacity, Text, View, Image, ScrollView } from "react-native";
import styles from "../styes";
import { VocabularyWord } from "./VocabWord/VocabBody";
import { VocabularyWord1 } from "./VocabWord/VocabHab";
import { VocabularyWord2 } from "./VocabWord/VocabSchool";
import { VocabularyWord3 } from "./VocabWord/VocabFoods";
import { VocabularyWord4 } from "./VocabWord/vocabMusic";
import { VocabularyWord5 } from "./VocabWord/VocabLibrary";
import { VocabularyWord6 } from "./VocabWord/VocabZoo";
import { VocabularyWord7 } from "./VocabWord/VocabSports";
import { VocabularyWord8 } from "./VocabWord/VocabOccupation";
import { VocabularyWord9 } from "./VocabWord/VocabVegetables";
import { createStackNavigator } from "@react-navigation/stack";
import VocabBody from "../../assets/VocabularyPicture/b11.png";
import VocabBody1 from "../../assets/VocabularyPicture/b12.jpg";
import VocabBody2 from "../../assets/VocabularyPicture/b13.png";
import VocabBody3 from "../../assets/VocabularyPicture/b14.png";
import VocabBody4 from "../../assets/VocabularyPicture/b15.png";
import VocabBody5 from "../../assets/VocabularyPicture/b16.png";
import VocabBody6 from "../../assets/VocabularyPicture/b17.png";
import VocabBody7 from "../../assets/VocabularyPicture/b18.jpg";
import VocabBody8 from "../../assets/VocabularyPicture/b19.png";
import VocabBody9 from "../../assets/VocabularyPicture/b20.png";
import { useFonts } from "expo-font";
const Stack = createStackNavigator();

const VocabularyScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    Montserrat: require("../../assets/static/Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }
  
  return (
    <View style={styles.ContainerVocabulary}>
      <ScrollView style={styles.scrollView}>
        <View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
               onPress={() => navigation.navigate("Body")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.tinyLogo} source={VocabBody} />
              <Text style={styles.TextBody}>Body </Text>
              <Text style={styles.TextBody1}>ร่างกาย</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
               onPress={() => navigation.navigate("Habitation")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.tinyLogo} source={VocabBody1} />
              <Text style={styles.TextBody}>Habitation </Text>
              <Text style={styles.TextBody1}>ที่พักอาศัย</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
               onPress={() => navigation.navigate("School")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.tinyLogo} source={VocabBody2} />
              <Text style={styles.TextBody}>School </Text>
              <Text style={styles.TextBody1}>โรงเรียน</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Foods")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.tinyLogo} source={VocabBody3} />
              <Text style={styles.TextBody}>Foods </Text>
              <Text style={styles.TextBody1}>อาหาร</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Music")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.tinyLogo} source={VocabBody4} />
              <Text style={styles.TextBody}>Musical Instruments</Text>
              <Text style={styles.TextBody1}>เครื่องดนตรี</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Library")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.tinyLogo} source={VocabBody5} />
              <Text style={styles.TextBody}>Libary</Text>
              <Text style={styles.TextBody1}>ห้องสมุด</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Zoo")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.tinyLogo} source={VocabBody6} />
              <Text style={styles.TextBody}>Zoo</Text>
              <Text style={styles.TextBody1}>สวนสัตว์</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Sports")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.tinyLogo} source={VocabBody7} />
              <Text style={styles.TextBody}>Sports</Text>
              <Text style={styles.TextBody1}>กีฬา</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Occupation")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.tinyLogo} source={VocabBody8} />
              <Text style={styles.TextBody}>Occupation</Text>
              <Text style={styles.TextBody1}>อาชีพ</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BodyVocabulary}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Vegetables")}
              style={styles.ButtonVocabulary}
            >
              <Image style={styles.tinyLogo} source={VocabBody9} />
              <Text style={styles.TextBody}>Vegetables</Text>
              <Text style={styles.TextBody1}>พืชผัก</Text>
            </TouchableOpacity>
          </View>
         
          
        </View>
      </ScrollView>
    </View>
  );
  
};

  
  
export { VocabularyScreen };
export { VocabularyWord };
export { VocabularyWord1 };
export { VocabularyWord2 };
export { VocabularyWord3 };
export { VocabularyWord4 };
export { VocabularyWord5 };
export { VocabularyWord6 };
export { VocabularyWord7 };
export { VocabularyWord8 };
export { VocabularyWord9 };