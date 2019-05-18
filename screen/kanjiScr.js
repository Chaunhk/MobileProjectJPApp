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
  BackHandler,
} from 'react-native';
// changeScr
// testScr
// ruleScr
// Exit



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
        <View style={{flex:1,alignItems:'center',marginTop:300}}>
          <TouchableOpacity
              style={{width:120,height:50,backgroundColor:'lightgray',borderRadius:15,marginBottom:20}}
              //chức năng của button ở đây
              onPress={()=> this.props.navigation.navigate('N5Kanji')} // () => this.ham()

            >

              <Text style={{textAlign:'center',paddingTop:15}} > Hán Tự N5 </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{width:120,height:50,backgroundColor:'lightgray',borderRadius:15,marginBottom:20}}
              //chức năng của button ở đây
              onPress={()=> this.props.navigation.navigate('Word')} // () => this.ham()

            >

              <Text style={{textAlign:'center',paddingTop:15}} > 500 từ vựng </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={{width:120,height:50,backgroundColor:'lightgray',borderRadius:15,marginBottom:20}}
              //chức năng của button ở đây
              onPress={()=> this.props.navigation.navigate('ChangeScr')} // () => this.ham()

            >

              <Text style={{textAlign:'center',paddingTop:15}} > Quay Về </Text>
            </TouchableOpacity>
          
        </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  
  
  
});
