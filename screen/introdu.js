import * as React from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,

} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-native-navigation';


export default class HigaScreen extends React.Component{
	
 
  
  render(){
    return (
      <ImageBackground 
          style={{flex:1, height: undefined, width: undefined}}
          source={require('../Asset/Pic_Book_2.jpg')}>
            <View style={{flex:1,alignItems:'center'}}>
              <View style={styles.box_mess}>
                <ScrollView contentContainerStyle = {{paddingBottom:10}}>
                  <Text style={{fontSize:17,paddingTop:10}}>Đây là app về học tiếng Nhật. Nội dung app có lẽ vẫn chưa được hoàn thiện, hiện tại chúng tôi chỉ duy nhất cung cấp cho 
                  bạn bảng chữ cái thông thường, vốn kanji n5 với gồm 98 từ, một số bài test nho nhỏ, một số bài học cơ bản, kèm một tính năng khác giúp cho bạn sử dụng đó là khi tìm thấy
                  từ mới bạn sẽ có khả năng lưu trữ nó vào tìm lại mỗi khi cần. Cám ơn các bạn đã sử dụng app của chúng tôi.</Text>

                  <Text style ={{fontSize:17,paddingTop:10}}>これは日本語のアプリです。多分情報はまだまだ多がない。今、私たちはあなたに平仮名とカタカナとン5の漢字と文法をあげます。こんなにだけです。申し訳ありません
                  。でも、このあぷりはまだまだ終わってない、これは図書館がある、けどそこは何もいない。あなたは一人追加します。はい、一同ありがとうございます。</Text>
                  


                  </ScrollView>
              </View>
              
              <View style={{alignItems:'center'}}>
                <TouchableOpacity
              style={styles.button}
              onPress={()=> this.props.navigation.navigate('Home')} // () => this.ham()
                >
            
              <Text style={{textAlign:'center',marginTop:13}}> Back </Text>
            </TouchableOpacity>
              </View>      
                         
            </View>
          </ImageBackground>
      )
  }
}

const styles=StyleSheet.create({
  button:{
    width:100,
    height:50,
    backgroundColor:'lightgray',
    borderRadius:20,
    marginTop:50,
    marginBottom:100,
  },
  box_mess:{
    paddingTop:5,
    flex:1,
    width:'90%',
    height:'85%',
    marginTop:30,
    backgroundColor:'rgba(255, 255, 255, 0.8)',
  }
})