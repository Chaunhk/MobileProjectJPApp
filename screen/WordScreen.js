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
  Alert,
  ScrollView,
} from 'react-native';
// changeScr
// testScr
// ruleScr
// Exit



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ngay:'1', day_tmp:[],day_tmp_mean:[],
      day: ['私','あなた','人','皆さん','ーくん','ーさん','ーちゃん','君','先生','学生','大学','学校','電気','ー歳','名前'],
      day_speak: ['watashi','-','jin','minasan','-kun','-san','-chan','kimi','sensei','gakusei','daigaku','gakkou','denki','-sai','namae'],
      day_mean: [
      'tôi',
      'bạn',
      'người',
      'mọi người',
      'dùng để gọi bé trai',
      'dùng để gọi người khác',
      'dùng để gọi bé gái',
      'bạn',
      'thầy/cô',
      'học sinh',
      'đại học',
      'trường học',
      'đèn điện',
      'tuổi',
      'tên'],

      day2: ['食べます','読みます','飲みます','やります','会います','朝','昼','晩','夜','吸います','見ます','聞きます','話ます','書きます','撮ります'],
      day2_speak:['tabemasu','yomimasu','nomimasu','yarimasu','aimasu','asa','hiru','ban','yoru','suimasu','mimasu','kikimasu','hanashimasu','kakimasu','torimasu'],
      day2_mean: ['Ăn','Đọc','Uống','Làm','Gặp','Sáng','Trưa','Chiều','Tối','Hút (thuốc)','Nhìn','Nghe','Nói','Viết','Chụp (ảnh)'],

      day3: ['月曜日','火曜日','水曜日','木曜日','金曜日','土曜日','日曜日','日','月','年','分','時','時間','半','今'],
      day3_speak:  ['getsuyoubi','kayoubi','suiyobi','mokuyoubi','kinyoubi','doyoubi','nichiyoubi','nichi','gatsu','nen','bun','ji','jikan','han','ima'],
      day3_mean:  ['Thứ hai','Thứ ba','Thứ tư','Thứ năm','Thứ sáu','Thứ bảy','Chủ nhật','Ngày','Tháng','Năm','Phút','Giờ','Thời gian','Nửa, phân nửa','Lúc này'],

      day4:  ['行きます','帰ります','来ます','休みます','終わります','起きます','寝ます','勉強します','働きます','午前','午後','明日','昨日','明後日','今日'],
      day4_speak:  ['ikimasu','kaerimasu','kimasu','yasumimasu','owarimasu','okimasu','nemasu','benkyoushimasu','hatarakimasu','gozen','gogo','ashita','kinou','asatte','kyou'],
      day4_mean:  ['Đi đến','Về, quay về','Đến','Nghỉ, nghỉ ngơi','Hết, kết thúc','Thức dậy','Nghỉ, ngủ','Học','Làm việc','Trước 12 giờ','Sau 12 giờ','Ngày mai','Hôm qua','Ngày tới','Hôm nay'],

      day5:  ['春','夏','秋','冬','季節','熱い','寒い','冷たい','暖かい','広い','狭い','新し','古い','好き','嫌い'],
      day5_speak:  ['haru','natsu','aki','fuyu','kisetsu','atsui','samui','sumetai','atatakai','hiroi','semai','atarashi','furui','suki','kirai'],
      day5_mean:  ['Mùa xuân','Mùa hè','Mùa thu','Mùa đông','Mùa','Nóng, oi bức','Lạnh (cảm nhận)','Lạnh (vị giác)','Ấm áp','Rộng','Hẹp','Mới','Cũ','Thích','Ghét'],

      day6: ['両親','父','お父さん','母','お母さん','兄弟','兄','お兄さん','弟','弟さん','姉妹','姉','お姉さん','妹','妹さん'],
      day6_speak: ['ryoushin','chichi','otousan','haha','okaasan','kyoudai','ani','oniisan','otouto','otoutosan','shimai','ane','oneesan','imouto','imoutosan'],
      day6_mean: ['Bố mẹ','Bố','Bố (người khác)','Mẹ','Mẹ (người khác)','Anh em','Anh trai','Anh (người khác)','Em trai','Em trai (người khác)','Chị em','Chị','Chị (người khác)','Em gái','Em gái (người khác)'],

      day7: ['多い','大きい','小さい','少し','もっと','あまり','よく','上手','下手','男','女','男の子','女の子','大人','同じ'],
      day7_speak: ['ooi','ooki','chiisai','sukoshi','motto','amari','yoku','jouzu','heta','otoko','onna','otoko no ko','onna no ko','otona','onaji'],
      day7_mean: ['Nhiều','To, lớn','Bé, nhỏ','Một chút','Thêm nữa, tí nữa','Hơi hơi','Thường','Khéo léo, tốt','Không khéo tay, tệ','Đàn ông/Nam','Đàn bà/Nữ','Cậu bé','Cô bé','Người lớn, điềm đạm','Giống nhau'],

      day8: ['これ','それ','あれ','この','その','あの','ここ','そこ','あそこ','どこ','こちら','そちら','あちら','どちら','いつ'],
      day8_speak: ['kore','sore','are','kono','sono','ano','koko','soko','asoko','doko','kochira','sochira','achira','dochira','itsu'],
      day8_mean: ['Cái này','Cái đó','Cái kia','Đây','Đó','Kia','Chỗ này','Chỗ đó','Chỗ kia','Chỗ nào','=ここ','=そこ','=あそこ','=どこ','Lúc nào, khi nào'],

      day9: ['会社','研究','会社員','図書館','美術館','病院','銀行','国','外国','外国人','海','海外','以内','音楽','歌'],
      day9_speak: ['kaisha','kenkyuu','kaishain','toshokan','bijutsukan','byouin','ginkou','kuni','gaikoku','gaikoku jin','umi','kaigai','inai','ongaku','uta'],
      day9_mean: ['Công ty','Nghiên cứu','Nhân viên Cty','Thư viện','Bảo tàng mỹ thuật','Bệnh viện','Ngân hàng','Nước/ Quốc gia','Nước ngoài','Người nước ngoài','Biển','Hải ngoại','Bên trong','Âm nhạc','Bài hát'],

      day10: ['体','頭','足','おなか','胃','手','顔','髪','耳','目','口','歯','右','左','背が'],
      day10_speak: ['karada','atama','ashi','onaka','i','te','kao','kami','mimi','me','kuchi','ha','migi','hidari','se ga'],
      day10_mean: ['Cơ thể','Đầu','Chân','Bụng','Dạ dày/ bao tử','Mặt','Tay','Tóc','Lỗ tai','Mắt','Miệng','Răng','Phải','Trái','Dáng'],

      day11: ['教えます','借ります','貸します','もらいます','上げます','習います','疲れた','簡単','荷物','物','買います','写真','音','元気','天気'],
      day11_speak: ['oshiemasu','karimasu','kashimasu','moraimasu','agemasu','naraimasu','tsukareta','kantan','nimotsu','mono','kaimasu','shashin','oto','genki','tenki'],
      day11_mean: ['Chỉ, hướng dẫn','Mượn','Cho mượn','Nhận','Tặng','Học hỏi','Mệt mỏi','Đơn giản','Hành lý','Đồ vật','Mua','Ảnh (chụp)','Âm thanh','Sức khỏe, khỏe','Thời tiết'],

      day12: ['','','','','','','','','','','','','','',''],
      day12_speak: ['','','','','','','','','','','','','','',''],
      day12_mean: ['','','','','','','','','','','','','','',''],

      day13: ['','','','','','','','','','','','','','',''],
      day13_speak: ['','','','','','','','','','','','','','',''],
      day13_mean: ['','','','','','','','','','','','','','',''],
      
      day14: ['','','','','','','','','','','','','','',''],
      day14_speak: ['','','','','','','','','','','','','','',''],
      day14_mean: ['','','','','','','','','','','','','','',''],

      day15: ['','','','','','','','','','','','','','',''],
      day15_speak: ['','','','','','','','','','','','','','',''],
      day15_mean: ['','','','','','','','','','','','','','',''],

      day16: ['','','','','','','','','','','','','','',''],
      day16_speak: ['','','','','','','','','','','','','','',''],
      day16_mean: ['','','','','','','','','','','','','','',''],
        };
    this.Change_Word = this.Change_Word.bind(this);
    this.Back_Word = this.Back_Word.bind(this);
    }

    Change_Word(){
      let dem = this.state.ngay; 
      if (dem<11) {
      dem++;
        if (dem == 2){
          this.setState({day_tmp: this.state.day});
          this.setState({day_tmp_mean: this.state.day_mean});
          this.setState({day: this.state.day2});
          this.setState({day_mean: this.state.day2_mean});
          }
        else if (dem == 3){
          this.setState({day: this.state.day3});
          this.setState({day_mean: this.state.day3_mean});
        }
        else if (dem == 4){
          this.setState({day: this.state.day4});
          this.setState({day_mean: this.state.day4_mean});
        }
        else if (dem == 5){
          this.setState({day: this.state.day5});
          this.setState({day_mean: this.state.day5_mean});
        }
        else if (dem == 6){
          this.setState({day: this.state.day6});
          this.setState({day_mean: this.state.day6_mean});
        }
        else if (dem == 7){
          this.setState({day: this.state.day7});
          this.setState({day_mean: this.state.day7_mean});
        }
        else if (dem == 8){
          this.setState({day: this.state.day8});
          this.setState({day_mean: this.state.day8_mean});
        }
        else if (dem == 9){
          this.setState({day: this.state.day9});
          this.setState({day_mean: this.state.day9_mean});
        }
        else if (dem == 10){
          this.setState({day: this.state.day10});
          this.setState({day_mean: this.state.day10_mean});
        }
        else if (dem == 11){
          this.setState({day: this.state.day11});
          this.setState({day_mean: this.state.day11_mean});
        }

        this.setState({ngay: dem});
      }
    }
    Back_Word(){
      let dem = this.state.ngay;
      if (dem>1){
      dem--;
        if (dem == 0);
        else if (dem == 1){
          this.setState({day: this.state.day_tmp});
          this.setState({day_mean: this.state.day_tmp_mean});
        }
        else if (dem == 2){
          this.setState({day: this.state.day2});
          this.setState({day_mean: this.state.day2_mean});
        }
        else if (dem == 3){
          this.setState({day: this.state.day3});
          this.setState({day_mean: this.state.day3_mean});
        }
        else if (dem == 4){
          this.setState({day: this.state.day4});
          this.setState({day_mean: this.state.day4_mean});
        }
        else if (dem == 5){
          this.setState({day: this.state.day5});
          this.setState({day_mean: this.state.day5_mean});
        }
        else if (dem == 6){
          this.setState({day: this.state.day6});
          this.setState({day_mean: this.state.day6_mean});
        }
        else if (dem == 7){
          this.setState({day: this.state.day7});
          this.setState({day_mean: this.state.day7_mean});
        }
        else if (dem == 8){
          this.setState({day: this.state.day8});
          this.setState({day_mean: this.state.day8_mean});
        }
        else if (dem == 9){
          this.setState({day: this.state.day9});
          this.setState({day_mean: this.state.day9_mean});
        }
        else if (dem == 10){
          this.setState({day: this.state.day10});
          this.setState({day_mean: this.state.day10_mean});
        }

        this.setState({ngay: dem});
      }
    }
    alertText(item){
      Alert.alert(
        "Cách đọc của ",
        "" ,
      [
        { text: "Ok", onPress: () => console.log("Ok!") },
      ],
      { cancelable: false });
    }

  render() {
      return (
      <ImageBackground 
          style={{flex:1, height: undefined, width: undefined}}
          source={require('../Asset/Pic_Book_1.jpg')}
          >
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
        <View style={styles.fake_fullView}>
            <ScrollView contentContainerStyle ={styles.boxView} >
              <View style = {{flex:1,padding:10}}>
                {
                    this.state.day.map(( item, key ) =>(
                    <View key = { key }>
                    <Text style={{fontSize:15,paddingBottom:5}}>{ item }</Text>
                    </View>
                 ))}
              </View>
              <View style = {{flex:1,padding:10}}>
                {
                    this.state.day_mean.map(( item, key ) =>(
                    <View key = { key }>
                    <Text style={{fontSize:15,paddingBottom:5}}>{ item }</Text>
                    </View>
                 ))}

              </View>

            </ScrollView>
        </View>
        <View style = {styles.inline_Box}>
          <TouchableOpacity
              style={styles.controlButton}
              //chức năng của button ở đây
              onPress={this.Back_Word} // () => this.ham()
            >
              <Text style={{textAlign:'center',fontSize:10}} > Trước </Text>
            </TouchableOpacity>

          <Text style = {{height:40,width:150,backgroundColor:'lightgray',borderRadius:15,textAlign:'center',paddingTop:5}}> Ngày {this.state.ngay} </Text>
          
          <TouchableOpacity
              style={styles.controlButton}
              //chức năng của button ở đây
              onPress={this.Change_Word} // () => this.ham()
            >
              <Text style={{textAlign:'center',fontSize:10}} > Sau </Text>
            </TouchableOpacity>

        </View>
        
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  fake_fullView:{
    alignItems:'center',

  },
  fake_button:{
    width:160,
    height:50,
    backgroundColor:'lightgray',
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    borderRadius:15,
  },
  fake_button_control:{
    width:100,
    height:50,
    backgroundColor:'lightgray',
    marginLeft:10,
    marginRight:10,
    marginTop:30,
    borderRadius:15,
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

  },
  boxView: {
    width:'98%',
    marginTop:10,
    height:400,

    paddingBottom:5,
    backgroundColor:'yellow',
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
    justifyContent: 'space-between',
    marginBottom:10,
  },

  inline_Box:{
    flexWrap: 'wrap', 
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingRight:10,
    paddingLeft:10,
  }
});
