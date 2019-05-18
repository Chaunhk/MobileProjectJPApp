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
  ScrollView,
} from 'react-native';
// changeScr
// testScr
// ruleScr
// Exit



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkId: '',
      data:[
        {
        id: 0,
        name: 'Thể từ điển ます',
        },
        {
        id: 1,
        name: 'Thể て',
        },
        {
        id: 2,
        name: 'Thể た',
        },
        {
        id: 3,
        name: 'Thể ない',
        },
        {
        id: 4,
        name: 'Thể dự định',
        },
        {
        id: 5,
        name: 'Thể khả năng',
        },
        
        
        
      ],
      data_tmp: [
        {
        id: 0,
        name: 'Danh từ + は + ... です',
        },
        {
        id: 1,
        name: 'Danh từ + も',
        },
        {
        id: 2,
        name: 'Danh từ の danh từ',
        },
        {
        id: 3,
        name: 'Danh từ + が ...',
        },
        {
        id: 4,
        name: 'Danh từ + ... でしょう',
        },
        {
        id: 5,
        name: 'Đại từ chỉ đồ vật: これ、それ、あれ',
        },
        {
        id: 6,
        name: 'Đại từ chỉ địa điểm: ここ、そこ、あそこ、こちら、そちら、あちら',
        },
        {
        id: 7,
        name: 'Câu phủ định',
        },
        {
        id: 8,
        name: 'Câu hỏi',
        },
        {
        id: 9,
        name: 'Từ chỉ thời gian',
        },
        {
        id: 10,
        name: 'Danh từ から danh từ まで',
        },


      ],};
    }

    componentDidMount(){
      let check = this.props.navigation.state.params.JSON_ListView_Clicked_Item;
      this.setState({checkId: check});
      if (check == 1){
        this.setState({data : this.state.data_tmp});
      }
    }

  render() {
      return (
      <ImageBackground 
          style={{flex:1, height: undefined, width: undefined}}
          source={require('../Asset/Pic_Book_1.jpg')}
          >
            <ScrollView contentContainerStyle = {{alignItems: 'center',marginTop:15,marginBottom:15,paddingBottom:50 }}>
            {
               this.state.data.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.Fake_button}
                     onPress = {() =>this.props.navigation.navigate('LearnLS',{
              JSON_ListView_Clicked_Item:{ checkLesson: this.state.checkId, idLesson: item.id}})}>
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
               
            }
            <TouchableOpacity
                  style = {styles.Fake_button}
                  //chức năng của button ở đây
                  onPress={()=>this.props.navigation.navigate('ViewLS')} // () => this.ham()
                  >
                  <Text style = {styles.text}> Quay Về </Text>
              </TouchableOpacity>
            
            </ScrollView>

        

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  
  
  Fake_button:{
    width:'90%',
    height:60,
    backgroundColor: 'lightgray',
    marginTop:10,
    borderRadius:10,
    justifyContent: 'center',
  },
  text:{
    textAlign: 'center',
    fontSize:18,
  }
  
});
