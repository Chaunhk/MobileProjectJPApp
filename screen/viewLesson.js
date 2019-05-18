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
    this.state = {
      names: [
      {
        id: 0,
        name: 'Các thể của động từ',
      },
      {
        id: 1,
        name: 'Ngữ pháp',
      },
      {
        id: 2,
        name: 'Quay Về',
      },
      ]
    };
    this.Check_ID=this.Check_ID.bind(this);
    }

    Check_ID(iD){
        var checkID=iD;
        if (checkID==2){
            this.props.navigation.navigate('ChangeScr');
          }
        else{
            this.props.navigation.navigate('LessonScr',{
              JSON_ListView_Clicked_Item: checkID,
            });

        }
      }

  render() {
      return (
      <ImageBackground 
          style={{flex:1, height: undefined, width: undefined}}
          source={require('../Asset/Pic_Book_2.jpg')}
          >
        <View style={{flex:1,alignItems:'center',marginTop:25}}>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.Fake_button}
                     onPress = {() =>{this.Check_ID(item.id)}}>
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
            }
        </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  Fake_button:{
    width:'90%',
    height:60,
    backgroundColor: 'lightgray',
    marginTop:15,
    borderRadius:10,
  },
  text:{
    paddingTop:15,
    textAlign: 'center',
    fontSize:18,
  }
  
  
});
