import { StatusBar } from "react-native";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import BottomSheetBehavior from "reanimated-bottom-sheet";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: '#808cbc',
    padding: 10,
    marginTop: 95,
  },
  inputContainer: {
    marginTop: 5,
  },
  ContainerEn: {
    flex: 1,
    alignItems: "center",
    
    justifyContent: "center",
    top: -15,
  },
  ContainerVocabulary: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    //paddingTop: StatusBar.currentHeight,
  },
  ContainerVocabularyWord: {
    flex: 1,
    alignItems: "center",
    //marginTop: 10,
    justifyContent: "center",
    //paddingTop: StatusBar.currentHeight,
  },
  ContainerQuestion: {
    flex: 0.93,
    alignItems: "center",
    justifyContent: "center",
    top: -30,
  },
  TextApp: {
    color: "#439de4",
    textAlign: "center",
    paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 22,
    paddingRight: 10,
  },
  tinyLogo: {
    borderRadius: 500,
    borderWidth: 2,
    height: 100,
    width: 100,
    borderColor: "#439de4",
    marginLeft: 10,
    top: 8,
  },
  ConLogo: {
    //borderRadius: 500,
    //borderWidth: 2,
    height: 90,
    width: 90,
    //borderColor: "#439de4",
    marginLeft: 10,
    top: 15,
  },
  QuestionLogo: {
    borderRadius: 500,
    borderWidth: 2,
    height: 140,
    width: 140,
    borderColor: "#FFA07A",
    backgroundColor: "#FFA07A",
    marginLeft: 20,
    top: 20,
  },
  QuestionLogo1: {
    borderRadius: 500,
    borderWidth: 2,
    height: 140,
    width: 140,
    borderColor: "#EE82EE",
    backgroundColor: "#EE82EE",
    marginLeft: 20,
    top: 20,
  },
  QuestionLogo2: {
    borderRadius: 500,
    borderWidth: 2,
    height: 140,
    width: 140,
    borderColor: "#FFA500",
    backgroundColor: "#FFA500",
    marginLeft: 20,
    top: 20,
  },
  PicVocab: {
    //borderRadius:500,
    //borderWidth: 2,
    height: 100,
    width: 100,
    //borderColor: "#000",
    marginLeft: 30,
    top: -26,
  },
  TextApp1: {
    color: "#439de4",
    //textAlign: "center",
    //paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 35,
    paddingLeft: 150,
    top: 40,
    
    //paddingRight: 10,

    textAlign: "left",
  },
  TextHeaderVocab: {
    color: "#439de4",
    textAlign: "left",
    marginLeft: 30,
    top: 30,
    //paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 25,
    //paddingRight: 10,
  },
  TextQuestion: {
    color: "#439de4",
    textAlign: "center",
    paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 22,
    paddingRight: 10,
  },
  TextQuestion1: {
    color: "#fff",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 32,
    top: -90,
    paddingLeft: 170,
    fontFamily: "Montserrat",
  },
  TextQuestion2: {
    color: "#fff",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 21,
    top: -90,
    paddingLeft: 190,
  },
  TextQuestion3: {
    color: "#000",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 21,
    top: 55,
    
    paddingLeft: 10,
  },
  ButtonVocabulary: {
    width: windowWidth - 20,
    height: 120,
    marginTop: 75,

    backgroundColor: "#fff",
    borderWidth: 3,
    borderRadius: 15,
    borderColor: "#439de4",
  },
  ButtonVocabularyWord: {
    width: windowWidth - 20,
    height: 90,
    marginTop: 70,
    top:-65,
    backgroundColor: "#fff",
    borderWidth: 3,
    borderRadius: 15,
    borderColor: "#439de4",
  },
  ButtonQuestion: {
    width: windowWidth - 40,
    height: 180,
    marginTop: 75,

    backgroundColor: "#FA8072",
    borderWidth: 3,
    borderRadius: 15,
    borderColor: "#FA8072",
  },
  ButtonQuestion1: {
    width: windowWidth - 40,
    height: 180,
    //marginTop:75,

    backgroundColor: "#FF66CC",
    borderWidth: 3,
    borderRadius: 15,
    borderColor: "#FF66CC",
  },
  ButtonQuestion2: {
    width: windowWidth - 40,
    height: 180,
    //marginTop:75,

    backgroundColor: "#FF8C00",
    borderWidth: 3,
    borderRadius: 15,
    borderColor: "#FF8C00",
  },
  TextBack: {
    color: "#439de4",
    textAlign: "center",
    paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 22,
    paddingRight: 10,
  },
  TextCon: {
    color: "#000",
    textAlign: "left",
    marginLeft: 120,
    paddingLeft: 20,
    fontWeight: "bold",
    fontSize: 27,
    paddingRight: 10,
    fontFamily: "Montserrat",
    top: -45,
  },
  TextBody: {
    color: "#000",
    textAlign: "left",
    marginLeft: 120,
    paddingLeft: 20,
    fontWeight: "bold",
    fontSize: 22,
    paddingRight: 10,
    fontFamily: "Montserrat",
    top: -70,
  },
  TextBody1: {
    color: "#000",
    textAlign: "left",
    marginLeft: 120,
    paddingLeft: 20,
    //fontWeight: "bold",
    fontSize: 16,
    paddingRight: 10,
    top:-70,
    fontFamily: "Montserrat",
  },
  TextGroup: {
    color: "#000",
    textAlign: "left",
    marginLeft: 15,
    paddingLeft: 20,
    fontWeight: "bold",
    fontSize: 22,
    paddingRight: 10,
    fontFamily: "Montserrat",
    top: 10,
  },
  TextGroup1: {
    color: "#000",
    textAlign: "left",
    marginLeft: 15,
    paddingLeft: 20,
    //fontWeight: "bold",
    fontSize: 18,
    paddingRight: 10,
    top:10,
    fontFamily: "Montserrat",
  },
  WordVocabulary: {
    marginTop: 10,
    paddingTop:-10,
    marginBottom:-65,
    //borderBottomWidth:1,
    //paddingBottom:35,
  },
  BodyVocabulary: {
    marginTop: -65,
    //borderBottomWidth:1,
    //paddingBottom:35,
  },
  BodyQuestion: {
    marginTop: 15,
    //borderBottomWidth:1,
    //paddingBottom:35,
  },
  VocabularyGroup: {
    marginTop: 60,
    //borderBottomWidth:3,
    //paddingBottom:35,
  },

  scrollView: {
    marginHorizontal: 1,
  },
  input: {
    width: windowWidth - 80,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    backgroundColor: "#ecf0f1",
    paddingLeft: 44,
    borderRadius: 10,
  },
  ButtonEnglish: {
    width: windowWidth - 40,
    height: 54,

    //marginRight: 40,
    //marginLeft: 40,
    //marginTop: 50,
    paddingTop: 10,
    //paddingBottom: 10,
    backgroundColor: "#fff",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#439de4",
  },
  ButtonBetween: {
    width: windowWidth - 250,
    height: 54,
    marginHorizontal: 16,
    //marginRight: 40,
    //marginLeft: 40,
    marginTop: 20,
    paddingTop: 10,
    //Bottom: 10,
    backgroundColor: "#fff",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#439de4",
  },
  ButtonBack: {
    //width: windowWidth - 50,
    height: 54,

    marginRight: 40,
    //marginLeft: 30,
    marginTop: 100,
    paddingTop: 10,
    //paddingBottom: 10,
    backgroundColor: "#fff",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#439de4",
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: "#000",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderWidth: 1,
  },
  inputIcon: {
    position: "absolute",
    top: 12,
    zIndex: 1,
    left: 17,
  },
  inputIconWord: {
    position: "absolute",
    top: 15,
    left: 300,
  },
  inputIcon1: {
    //position: "absolute",
    //top: 12,
    //zIndex: 1,
    left: -8,
  },
  loginScreenButton: {
    width: windowWidth - 80,
    height: 54,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#439de4",
    borderRadius: 10,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#fff",
  },
  loginScreenButton1: {
    width: windowWidth - 80,
    height: 54,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#439de4",
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 22,
    paddingRight: 10,
  },
  loginText2: {
    textAlign: "left",
    width: windowWidth - 80,
    color: "#fff",
  },
  loginText3: {
    textAlign: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 92,
  },
  Textsigup: {
    color: "#00000090",
    fontSize: 50,
    marginTop: -100,
    color: "#439de4",
    fontFamily: "Montserrat",
  },
  
  Textemail: {
    color: "#00000090",
  },
  Textpass: {
    color: "#00000090",
  },
  loginText1: {
    color: "#439de4",
    textAlign: "center",
    paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 22,
    paddingRight: 10,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
});
export default styles;
