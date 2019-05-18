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



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'no_x':0};
    }

    ham(){
          }

  render() {
    return (
      <ImageBackground 
          style={{flex:1, height: undefined, width: undefined}}
          source={require('../Asset/Pic_Book_1.jpg')}
          >
        <View style={styles.content_main}>
          
          <View style={styles.View_button}>
            <TouchableOpacity
              style={styles.button}
              //chức năng của button ở đây
              onPress={()=> this.props.navigation.navigate('Test_Frm',{JSON_ListView_Clicked_Item: {id: 1, code: 0}})} // () => this.ham()
              // onPress={()=> this.props.navigation.navigate('Test_Frm', 
              //{
              //JSON_ListView_Clicked_Item: 1 - 3,
              //} tương đương 1: chữ cái, 2: hán tự, 3: kanji
             
            >
              <Text style={styles.text_Center}> Ký Tự </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              //chức năng của button ở đây
              onPress={()=> this.props.navigation.navigate('Test_Frm', {JSON_ListView_Clicked_Item: {id: 2, code: 0}})} // () => this.ham()
              // onPress={()=> this.props.navigation.navigate('Test_Frm', 
              //{
              //JSON_ListView_Clicked_Item: 1 - 3,
              //} tương đương 1: chữ cái, 2: hán tự, 3: kanji
            >
              <Text style={styles.text_Center}> Hán Tự </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              //chức năng của button ở đây
              onPress={()=> this.props.navigation.navigate('Test_Frm', {JSON_ListView_Clicked_Item: {id: 3, code: 0}})} // () => this.ham()
              // onPress={()=> this.props.navigation.navigate('Test_Frm', 
              //{
              //JSON_ListView_Clicked_Item: 1 - 3,
              //} tương đương 1: chữ cái, 2: hán tự, 3: kanji
            >

              <Text style={styles.text_Center}> Ngữ Pháp </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              // chức năng của button ở đây
              onPress={()=> this.props.navigation.navigate('Home')} // () => this.ham()
            >
            
              <Text style={styles.text_Center}> Home </Text>
            </TouchableOpacity>
        </View>
        </View>

      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  
  content_main:{
    paddingTop:100,
    alignItems:'center',
    
  },
  
  View_button:{
    marginTop:200,
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
