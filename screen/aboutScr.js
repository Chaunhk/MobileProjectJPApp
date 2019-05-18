import * as React from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,

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
                  <Text style={{fontSize:17,paddingTop:10}}>Đây là app điện thoại đầu tiên của chúng tôi. </Text>
                  <Text style={{fontSize:17}}>これは私たちのプロチェック。 </Text>
                  <Text style={{fontSize:17}}>Lỗi có thể xuất hiện. </Text>
                  <Text style={{fontSize:17}}>エラーがあるかもしれません。 </Text>
                  <Text style={{fontSize:17}}>Nếu xảy ra, làm ơn hãy liên hệ với chúng tôi.</Text>
                  <Text style={{fontSize:17}}>もしエラーの姿があったら、私たちに連絡でください。</Text>
                  <Text style={{fontSize:17}}>Cám ơn bạn đã sử dụng nó.</Text>
                  <Text style={{fontSize:17}}>このアプリが使うのはありがとうございます。</Text>
                  <Text style={{fontSize:17}}>Team DeveLop Email: ....@gmail.com</Text>
                  <Text style={{fontSize:17,paddingTop:25,textAlign:'right'}}>Cám ơn sự giúp đỡ của bạn</Text>
                  <Text style={{fontSize:17,textAlign:'right'}}>よろしくお願いします！</Text>



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
    width:'80%',
    height:'60%',
    marginTop:50,
    backgroundColor:'rgba(255, 255, 255, 0.8)',
  }
})