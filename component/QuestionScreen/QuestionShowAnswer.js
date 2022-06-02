import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image, ScrollView, Button } from "react-native";
import styles from "../styes";
import { useFonts } from "expo-font";

const QuestionShowAnswerScreen = ({ route, navigation }) => {

    const [answer, setAnswer] = React.useState([]);
    React.useEffect(() => {
        const { data } = route.params;
        setAnswer(data);
    });
    
    const [loaded] = useFonts({
        Montserrat: require("../../assets/static/Medium.ttf"),
    });
    if (!loaded) {
    return null;
    }

    return (
        <ScrollView style={styles.scrollView}>
            {answer.map((res, i) => {
                return (
                    <View key={i} style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
                        <Text>ข้อ {i+1}. {res?.selected ? 'ตอบ ' + res?.selected : 'ไม่ได้เลือก'} {!res?.selected ? '' : 'เฉลย ' + res?.answer}</Text>
                    </View>
                );
            })}
        </ScrollView>
    );
};

export { QuestionShowAnswerScreen };