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

           <View style = {styles.boxControl}>
            <View style = {styles.controlView_About}>
              <TouchableOpacity
                style={styles.controlButton}
                  // chức năng của button ở đây
                onPress={()=> {this.props.navigation.navigate('AboutScr')}} // () => this.ham()
              >
            
                <Text style = {{fontSize:10}}> About </Text>
              </TouchableOpacity>
            </View>
            <View style = {styles.controlView_Out}>
              <TouchableOpacity
                style={styles.controlButton}
                  // chức năng của button ở đây
                onPress={()=>{BackHandler.exitApp()}} // () => this.ham()
              >
            
                <Text style = {{fontSize:10}}> Exit </Text>
              </TouchableOpacity>
            </View>
          </View>




        <View style={styles.content_main}>
          <Text style={styles.Text_size}>Japanese</Text>
		      <Text style={styles.Text_size_ex}>Language</Text>
          <Text style={{alignItems:'center',color:'#2945FF'}}>-from Noname_Team-</Text>
          <View style={styles.View_button}>
            <TouchableOpacity
              style={styles.button}
              //chức năng của button ở đây
              onPress={()=> this.props.navigation.navigate('ChangeScr')} // () => this.ham()
            >
              <Text style={styles.text_Center}> Luyện Tập </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              //chức năng của button ở đây
              onPress={()=> this.props.navigation.navigate('Test')} // () => this.ham()
            >
              <Text style={styles.text_Center}> Kiểm Tra </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              //chức năng của button ở đây
              onPress={()=> this.props.navigation.navigate('LibraryScr')} // () => this.ham()
            >

              <Text style={styles.text_Center}> Thư Viện </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              // chức năng của button ở đây
              onPress={()=> this.props.navigation.navigate('Introdu')} // () => this.ham()
            >
            
              <Text style={styles.text_Center}> Giới Thiệu </Text>
            </TouchableOpacity>
        </View>
        </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  
  content_main:{
    paddingTop:40,
    alignItems:'center',
    
  },
  Text_size:{
	
	justifyContent:'center',
	alignItems:'center',
    fontSize:40,
    fontWeight:'bold',
    color:'#FCEF3C',
    textShadowOffset:{width:10,height:10},
    textShadowColor: '#E1D536',
    textShadowRadius: 10,
    
  },
  Text_size_ex:{
	
	justifyContent:'center',
	alignItems:'center',
    fontSize:40,
    fontWeight:'bold',
    color:'#FCEF3C',
    textShadowOffset:{width:10,height:10},
    textShadowColor: '#E1D536',
    textShadowRadius: 10,
    paddingBottom:40,
  },
  View_button:{
    marginTop:50,
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
    textAlign:'center',fontWeight:'bold',
  },
  boxControl:{
    marginTop:20,
    flexDirection:'row',
    justifyContent: 'space-between',
    marginRight:15,
    marginLeft:15,


  },
  
  controlButton:{
    width:30,
    height:30,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    borderRadius:15,
    justifyContent :'center',

  }
  
  
});
