import { bold } from 'ansi-colors';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
      
    container:  {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      //backgroundColor: '#ecf0f1', 
      padding: 10,
      marginTop:75,
    },
    inputContainer: {
      marginTop:5

    },

     input: {
      width: windowWidth-80,
      height: 40,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
      backgroundColor: '#ecf0f1',
      paddingLeft: 44,
      borderRadius: 10,
    },
    inputIcon:{
      position: 'absolute',
      top:12,
      zIndex:1,
      left:17,
    },
    loginScreenButton:{
      width: windowWidth-80,
      height: 54,
      marginRight:40,
      marginLeft:40,
      marginTop:10,
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#439de4',
      borderRadius:10,
      borderWidth: 1,
      borderRadius: 25,
      borderColor: '#fff'
      
      
      
    },
    loginScreenButton1:{
      width: windowWidth-80,
      height: 54,
      marginRight:40,
      marginLeft:40,
      marginTop:10,
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#fff',
      borderRadius:10,
      borderWidth: 1,
      borderRadius: 25,
      borderColor: '#439de4'
    },
    loginText:{
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        fontWeight: 'bold',
        fontSize :22,
        paddingRight : 10
    },
    loginText2:{
      textAlign:'left',
      width: windowWidth-80, 
      color:'#fff',
    },
    loginText3:{
     textAlign:'center',
     justifyContent:'center',
     color:'#fff',
     fontSize :92,
    },
    Textsigup:{
      color:'#00000090',
      fontSize:50,
      marginTop:-100,
      color:'#439de4'
    },
    Textemail:{
      color:'#00000090',
    },
    Textpass:{
      color:'#00000090',
    },
    loginText1:{
      color:'#439de4',
      textAlign:'center',
      paddingLeft : 10,
      fontWeight: 'bold',
      fontSize :22,
      paddingRight : 10

  }
  });
  export default styles