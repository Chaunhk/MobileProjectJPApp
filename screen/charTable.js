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
  constructor(){
    super();
    this.state = { 
      img: require('../Asset/hiragana.jpg'), 
      img_tmp: require('../Asset/hiragana_2.jpg'),
      title_img: 'Hiragana',
      mode: 1,
      page: 1,
    }
    this.changeImg=this.changeImg.bind(this);
    this.changeMode=this.changeMode.bind(this);

  }
  changeImg(){
    
    var tmp = this.state.img;
    this.setState({img: this.state.img_tmp});
    this.setState({img_tmp: tmp});
    var pg = this.state.page;
    if(pg==1){
      this.setState({page: 2}); 

    	}
    else{
      this.setState({page: 1}); 

    }
    
    }

  changeMode(){
    var md = this.state.mode;
    if (md == 1){
      this.setState({mode: 2});
      this.setState({img: require('../Asset/katakana.jpg')});
      this.setState({img_tmp: require('../Asset/katakana_2.jpg')});
      this.setState({title_img: 'Katakana'}); 
      this.setState({page: 1}); 

    }
    else{
      this.setState({mode: 1});
      this.setState({img: require('../Asset/hiragana.jpg')});
      this.setState({img_tmp: require('../Asset/hiragana_2.jpg')});
      this.setState({title_img: 'Hiragana'});  
      this.setState({page: 1}); 

       
    }
    this.changeImg;
  }

  render(){
    return (
      <ImageBackground 
          style={{flex:1, height: undefined, width: undefined}}
          source={require('../Asset/Pic_Book_2.jpg')}>
          <View style = {styles.boxControl}>
          <View style = {styles.controlView_BackHome}>
            <TouchableOpacity
              style={styles.controlButton}
                  // chức năng của button ở đây
              onPress={()=> {this.props.navigation.navigate('Home')}} // () => this.ham()
            >
            
              <Text style = {{fontSize:10}}> Back </Text>
            </TouchableOpacity>
          	</View>
        	</View>
            <View style={styles.View_Higa}>
              <Text style={styles.Text_font}> Bảng {this.state.title_img} </Text>
              <Text style={{textAlign:'center'}}> {this.state.page}/2 </Text>
              
              <Image 
                resizeMode={'contain'}
                style={{width:'100%',height:'100%'}}
                source={this.state.img}
                />



            </View>
            <View style={styles.control_bottom}>
             <TouchableOpacity
              style={{width:100,height:50,backgroundColor:'gray',marginLeft:10,borderRadius:20}}
              //chức năng của button ở đây
              onPress={this.changeImg} // () => this.ham()
            >

              <Text style={{textAlign:'center',paddingTop:15}} > Trước </Text>
            </TouchableOpacity>  
            <TouchableOpacity
              style={{width:100,height:50,backgroundColor:'gray',alignItems:'center',borderRadius:20,marginLeft:20}}
              //chức năng của button ở đây
              onPress={this.changeMode} // () => this.ham()
            >

              <Text style={{textAlign:'center',paddingTop:15}} > Đổi </Text>
            </TouchableOpacity>   
            <TouchableOpacity
              style={{width:100,height:50,backgroundColor:'gray',alignItems:'center',borderRadius:20,marginLeft:20,marginRight:10}}
              //chức năng của button ở đây
              onPress={this.changeImg} // () => this.ham()
            >

              <Text style={{textAlign:'center',paddingTop:15}} > Sau </Text>
            </TouchableOpacity>         
                  
            </View>

                   
                         
          </ImageBackground>
      )
  }
}

const styles=StyleSheet.create({
  View_Higa:{
    flex:1,
    marginTop:20,
    marginRight:20,
    marginLeft:20,
    height:'80%',

    backgroundColor: 'rgba(250, 202, 214, 0.8)'
  },
  Text_font:{
    fontSize:20,
    textAlign:'center',
    fontWeight:'bold',
    marginLeft: 5,
    marginBottom:5,
  },
  control_bottom:{
    marginTop:40,
    marginBottom:40,
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
    justifyContent: 'space-between',

  },
  boxControl:{
    marginTop:20,
    flexDirection:'row',
    justifyContent: 'space-between',
    marginRight:15,
    marginLeft:15,


  },
  controlView_BackHome:{
  },
  
  controlButton:{
    width:30,
    height:30,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    borderRadius:15,
    justifyContent :'center',

  }

})