/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import changeScr from './screen/changeScr1';
import HomeScr from './screen/HomeScreen';
import charTb from './screen/charTable';
import About from './screen/aboutScr';
import ViewLs from './screen/viewLesson';
import KanjiScr from './screen/kanjiScr';
import N5 from './screen/N5Scr';
import Lesson from './screen/LessonText';
import TestScr from './screen/TestScr';
import TestFrm from './screen/TestFrom';
import LsView from './screen/LessonView_fromLsText';
import Library from './screen/library';
import intro from './screen/introdu';
import wordScr from './screen/WordScreen'


  
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScr, navigationOptions: {
      header: null,
    },},
  ChangeScr: {screen: changeScr, navigationOptions: {
      header: null,
    },},
  TableScr: {screen: charTb, navigationOptions: {
      header: null,
    },},
  AboutScr: {screen: About, navigationOptions: {
      header: null,
    },},
  ViewLS: {screen: ViewLs, navigationOptions: {
      header: null,
    },},
  Kanji: {screen: KanjiScr, navigationOptions: {
      header: null,
    },},
  N5Kanji: {screen: N5, navigationOptions: {
      header: null,
    },},
  LessonScr: {screen: Lesson, navigationOptions: {
      header: null,
    },},
  Test: {screen: TestScr, navigationOptions: {
      header: null,
    },},
  Test_Frm: {screen: TestFrm, navigationOptions: {
      header: null,
    },},
  LearnLS: {screen: LsView, navigationOptions: {
      header: null,
    },},
  LibraryScr: {screen: Library, navigationOptions: {
      header: null,
    },},
  Introdu: {screen: intro, navigationOptions: {
    header:null,
    },},
  Word: {screen: wordScr, navigationOptions: {
    header:null,
    },},
  },
);



const App = createAppContainer(MainNavigator);

export default App;

const styles = StyleSheet.create({
  
  content_main:{
    paddingTop:100,
    alignItems:'center',
    
  },
  Text_size:{
    fontSize:40,
    fontWeight:'bold',
    textShadowOffset:{width:10,height:10},
  textShadowColor: 'gray',
  textShadowRadius: 10,
  paddingBottom:50,
  },
  View_button:{
    marginTop:70,
    alignItems:'center',


  },
  button:{
    marginTop:15,
    padding:10,
    width:150,
    height:50,
    borderColor: 'lightgray',
    borderWidth:2,
    backgroundColor:'lightgray',
    borderRadius:20,
  },
  text_Center:{
  	fontSize:20,
    textAlign:'center',
  },
  
});
