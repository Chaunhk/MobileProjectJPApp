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
} from 'react-native';
// changeScr
// testScr
// ruleScr
// Exit



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage_1: [
      {
        id: 0,
        name: '安: an/ rẻ',
        HanAm: 'あん',
        NhatAm: 'やす',},
      
      { id: 1,
        name: '一: một',
        HanAm: 'いち、いつ',
        NhatAm: 'ひと',},

      { id: 2,
        name: '飲: uống',
        HanAm: 'いん',
        NhatAm: 'の（む）',},

      { id: 3,
        name: '右: bên phải',
        HanAm: 'う、ゆ',
        NhatAm: 'みぎ',},

      { id: 4,
        name: '雨: mưa',
        HanAm: 'う',
        NhatAm: 'あめ',},

      { id: 5,
        name: '駅: nhà ga',
        HanAm: 'えき',
        NhatAm: 'ー',},
      
      { id: 6,
        name: '円: yên/ tròn',
        HanAm: 'えん',
        NhatAm: 'まる',},
      
      { id: 7,
        name: '火: lửa',
        HanAm: 'か',
        NhatAm: 'ひ',},
      
      { id: 8,
        name: '花: hoa',
        HanAm: 'か',
        NhatAm: 'はな',},
      
      { id: 9,
        name: '下: dưới/ hạ',
        HanAm: 'か、げ',
        NhatAm: 'しも、さ（げる）',},

      { id: 10,
        name: '何: cái gì',
        HanAm: 'か',
        NhatAm: 'なに、なん',},

      { id: 11,
        name: '会: gặp gỡ, hội họp',
        HanAm: 'かい、え',
        NhatAm: 'あ（う）',},

      { id: 12,
        name: '外: ngoài, khác',
        HanAm: 'がい、げ',
        NhatAm: 'そと、ほか、はず（れる）',},

      { id: 13,
        name: '学: học, khoa học',
        HanAm: 'がく',
        NhatAm: 'まな（ぶ）',},],

      stage_2: [

      { id: 0,
        name: '間: khoảng thời gian',
        HanAm: 'かん、けん',
        NhatAm: 'あいだ',},

      { id: 1,
        name: '気: tinh thần',        
        HanAm: 'き、け',
        NhatAm: 'ー',},

      { id: 2,
        name: '九: chín',        
        HanAm: 'きゅう、く',
        NhatAm: 'ここの（つ）',},

      { id: 3,
        name: '休: nghỉ ngơi',
        HanAm: 'きゅう',
        NhatAm: 'やす（む）',},

      { id: 4,
        name: '魚: cá',
        HanAm: 'ぎょう',
        NhatAm: 'さかな、うお',},

      { id: 5,
        name: '金: vàng, tiền',
      HanAm: 'きん、こん',
        NhatAm: 'かね',},

      { id: 6,
        name: '空: bầu trời, trống',
      HanAm: 'くう',
        NhatAm: 'そら、あ（ける）、から',},
      
      { id: 7,
        name: '月: mặt trăng, tháng',
      HanAm: 'げつ、がつ',
        NhatAm: 'つき',},
      
      { id: 8,
        name: '見: nhìn, ý kiến',
      HanAm: 'けん',
        NhatAm: 'み（る）、み（える）、み（せる）',},
      
      { id: 9,
        name: '言: nói',
      HanAm: 'げん、ごん',
        NhatAm: 'い（う）',},
      
      { id: 10,
        name: '古: cũ, cổ',
      HanAm: 'こ',
        NhatAm: 'ふる（い）',},
      
      { id: 11,
        name: '五: năm',
      HanAm: 'ご',
        NhatAm: 'いつ（つ）',},
      
      { id: 12,
        name: '後: sau, phía sau',
      HanAm: 'ご、こう',
        NhatAm: 'あと、おく（れる）、のち',},
      
      { id: 13,
        name: '午: chiều',
      HanAm: 'ご',
        NhatAm: 'ー',},],

      stage_3: [

      { id: 0,
        name: '語: ngôn từ, nói',
        HanAm: 'ご',
        NhatAm: 'かた（る）、かた（らう）',},

      { id: 1,
        name: '校: trường',        
        HanAm: 'こう',
        NhatAm: 'ー',},

      { id: 2,
        name: '口: miệng',        
        HanAm: 'こう、く',
        NhatAm: 'くち',},

      { id: 3,
        name: '行: đi, tiến hành',
        HanAm: 'こう',
        NhatAm: 'い（く）、ゆ（く）、おこな（う）',},

      { id: 4,
        name: '高: cao, nâng cao',
        HanAm: 'こう',
        NhatAm: 'たか（い）、たか（まる）',},

      { id: 5,
        name: '国: đất nước',
      HanAm: 'こく',
        NhatAm: 'くに',},

      { id: 6,
        name: '今: bây giờ',
      HanAm: 'こん、きん',
        NhatAm: 'いま',},
      
      { id: 7,
        name: '左: bên trái',
      HanAm: 'さ',
        NhatAm: 'ひだり',},
      
      { id: 8,
        name: '三: ba',
      HanAm: 'さん',
        NhatAm: 'み（つ）',},
      
      { id: 9,
        name: '山: núi',
      HanAm: 'さん',
        NhatAm: 'やま',},
      
      { id: 10,
        name: '四: bốn',
      HanAm: 'し',
        NhatAm: 'よ（つ）、ゆ（つ）、よん',},
      
      { id: 11,
        name: '子: trẻ con',
      HanAm: 'し、す',
        NhatAm: 'こ',},
      
      { id: 12,
        name: '耳: tai',
      HanAm: 'じ',
        NhatAm: 'みみ',},
      
      { id: 13,
        name: '時: thời gian',
      HanAm: 'じ',
        NhatAm: 'とき',},],

      stage_4: [

      { id: 0,
        name: '七: bảy',
        HanAm: 'しち',
        NhatAm: 'なな（つ）、なな、なの',},

      { id: 1,
        name: '車: xe, oto',        
        HanAm: 'しゃ',
        NhatAm: 'くるま',},

      { id: 2,
        name: '社: đền, miếu',        
        HanAm: 'しゃ',
        NhatAm: 'やしろ',},

      { id: 3,
        name: '手: tay',
        HanAm: 'しゅ',
        NhatAm: 'て',},

      { id: 4,
        name: '週: tuần',
        HanAm: 'しゅう',
        NhatAm: 'ー',},

      { id: 5,
        name: '十: mười',
      HanAm: 'じゅう、じ',
        NhatAm: 'とお、と',},

      { id: 6,
        name: '出: xuất, ra',
      HanAm: 'しゅつ',
        NhatAm: 'だ（す）、で（る）',},
      
      { id: 7,
        name: '書: viết',
      HanAm: 'しょ',
        NhatAm: 'か（く）',},
      
      { id: 8,
        name: '女: phụ nữ',
      HanAm: 'じょ、にょう',
        NhatAm: 'おんな、め',},
      
      { id: 9,
        name: '小: nhỏ, bé',
      HanAm: 'しょう',
        NhatAm: 'ちい（さい）、こ、お',},
      
      { id: 10,
        name: '少: một chút, một ít',
      HanAm: 'しょう',
        NhatAm: 'すこ（し）、すく（ない）',},
      
      { id: 11,
        name: '上: phía trên, thượng',
      HanAm: 'しょう、じょう',
        NhatAm: 'うえ、かみ、あ（げる）',},
      
      { id: 12,
        name: '食: ăn',
      HanAm: 'しょく',
        NhatAm: 'た（べる）、く（る）',},
      
      { id: 13,
        name: '新: mới',
      HanAm: 'しん',
        NhatAm: 'あたら（しい）、あら（た）',},],

      stage_5: [

      { id: 0,
        name: '人: người',
        HanAm: 'じん、にん',
        NhatAm: 'ひと',},

      { id: 1,
        name: '水: nước',        
        HanAm: 'すい',
        NhatAm: 'みず',},

      { id: 2,
        name: '生: sinh',        
        HanAm: 'せい、しょう',
        NhatAm: 'い（きる）、う（む）',},

      { id: 3,
        name: '西: phía tây',
        HanAm: 'せい、さい',
        NhatAm: 'にし',},

      { id: 4,
        name: '川: sông',
        HanAm: 'せん',
        NhatAm: 'かわ',},

      { id: 5,
        name: '千: một ngàn',
      HanAm: 'せん',
        NhatAm: 'ち',},

      { id: 6,
        name: '先: phía trước, trước',
      HanAm: 'せん',
        NhatAm: 'さき',},
      
      { id: 7,
        name: '前: trước, trước khi',
      HanAm: 'ぜん',
        NhatAm: 'まえ',},
      
      { id: 8,
        name: '足: chân, đầy đủ',
      HanAm: 'そく',
        NhatAm: 'あし、た（りる）、た（す）',},
      
      { id: 9,
        name: '多: nhiều',
      HanAm: 'た',
        NhatAm: 'おお（い）',},
      
      { id: 10,
        name: '大: to, lớn',
      HanAm: 'だい、たい',
        NhatAm: 'おお（きい）、おお（い）',},
      
      { id: 11,
        name: '男: đàn ông',
      HanAm: 'だん、なん',
        NhatAm: 'おとこ',},
      
      { id: 12,
        name: '中: trong, bên trong',
      HanAm: 'ちゅう',
        NhatAm: 'なか',},
      
      { id: 13,
        name: '長: dài',
      HanAm: 'ちょう',
        NhatAm: 'なが（い）',},],

      stage_6: [

      { id: 0,
        name: '天: thiên, trời',
        HanAm: 'てん',
        NhatAm: 'あめ、あま',},

      { id: 1,
        name: '店: cửa hàng',        
        HanAm: 'てん',
        NhatAm: 'みせ',},

      { id: 2,
        name: '電: điện',        
        HanAm: 'でん',
        NhatAm: 'ー',},

      { id: 3,
        name: '土: đất, thổ',
        HanAm: 'ど、と ',
        NhatAm: 'つち',},

      { id: 4,
        name: '東: phía đông',
        HanAm: 'とう',
        NhatAm: 'ひがし',},

      { id: 5,
        name: '道: con đường',
      HanAm: 'どう',
        NhatAm: 'みち',},

      { id: 6,
        name: '読: đọc',
      HanAm: 'どく',
        NhatAm: 'よ（む）',},
      
      { id: 7,
        name: '南: phía nam',
      HanAm: 'なん',
        NhatAm: 'みなみ',},
      
      { id: 8,
        name: '二: hai',
      HanAm: 'に',
        NhatAm: 'ふた（つ）',},
      
      { id: 9,
        name: '日: ngày, mặt trời',
      HanAm: 'にち、じつ',
        NhatAm: 'ひ、か',},
      
      { id: 10,
        name: '入: vào, nhập',
      HanAm: 'にゅう',
        NhatAm: 'はい（る）、い（る）',},
      
      { id: 11,
        name: '年: năm',
      HanAm: 'ねん',
        NhatAm: 'とし',},
      
      { id: 12,
        name: '買: mua',
      HanAm: 'ばい',
        NhatAm: 'か（う）',},
      
      { id: 13,
        name: '白: trắng, bạch',
      HanAm: 'はく、びゃく',
        NhatAm: 'しろ（い）、しろ',},],

      stage_7: [

      { id: 0,
        name: '八: tám',
        HanAm: 'はち',
        NhatAm: 'やっ（つ）、や（つ）、よう',},

      { id: 1,
        name: '半: nữa, phân nữa',        
        HanAm: 'はん',
        NhatAm: 'なか（ば）',},

      { id: 2,
        name: '百: một trăm',        
        HanAm: 'ひゃく',
        NhatAm: 'ー',},

      { id: 3,
        name: '父: bố',
        HanAm: 'ふ',
        NhatAm: 'ちち',},

      { id: 4,
        name: '分: phút, phần, hiểu',
        HanAm: 'ぶん、ぶ、ふん',
        NhatAm: 'わ（ける）、わ（かれる）',},

      { id: 5,
        name: '聞: nghe',
      HanAm: 'ぶん、もん',
        NhatAm: 'き（く）、き（こえる）',},

      { id: 6,
        name: '母: mẹ',
      HanAm: 'ぼ',
        NhatAm: 'はは',},
      
      { id: 7,
        name: '北: phía bắc',
      HanAm: 'ほく',
        NhatAm: 'きた',},
      
      { id: 8,
        name: '木: cây, rừng',
      HanAm: 'ぼく、もく',
        NhatAm: 'き、こ',},
      
      { id: 9,
        name: '本: sách, nguồn gốc',
      HanAm: 'ほん',
        NhatAm: 'もと',},
      
      { id: 10,
        name: '毎: mỗi, mọi',
      HanAm: 'まい',
        NhatAm: 'ー',},
      
      { id: 11,
        name: '万: vạn, mười ngàn',
      HanAm: 'まん、ばん',
        NhatAm: 'ー',},
      
      { id: 12,
        name: '名: danh, tên',
      HanAm: 'めい、みょう',
        NhatAm: 'な',},
      
      { id: 13,
        name: '目: mắt',
      HanAm: 'もく',
        NhatAm: 'め',},],

    }
    this.Change_Kanji=this.Change_Kanji.bind(this);
    this.alertText=this.alertText.bind(this);
    }

    Change_Kanji(){
        var stage = this.state.stage_1;
        this.setState({stage_1: this.state.stage_2});
        this.setState({stage_2: this.state.stage_3});
        this.setState({stage_3: this.state.stage_4});
        this.setState({stage_4: this.state.stage_5});
        this.setState({stage_5: this.state.stage_6});
        this.setState({stage_6: this.state.stage_7});

        this.setState({stage_7: stage});
          }
    alertText(item){
      Alert.alert(
        "Cách đọc của " + item.name[0],
        "Hán âm: " + item.HanAm +"\nNhật âm: " +item.NhatAm ,
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
        <View style={{flex:1}}>
          <View style={styles.fake_flexInline}>
             {
               this.state.stage_1.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.fake_button}
                     onPress = {() =>this.alertText(item)}>
                     <Text style={{textAlign:'left',paddingTop:15,paddingLeft:10}}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
            }
            <TouchableOpacity
              style={styles.fake_button_control}
              //chức năng của button ở đây
              onPress={ this.Change_Kanji} // () => this.ham()
            >
              <Text style={{textAlign:'center',paddingTop:15}} > Trước </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.fake_button_control}
              //chức năng của button ở đây
              onPress={()=> this.props.navigation.navigate('ChangeScr')} // () => this.ham()
            >
              <Text style={{textAlign:'center',paddingTop:15}} > Quay Về </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.fake_button_control}
              //chức năng của button ở đây
              onPress={ this.Change_Kanji} // () => this.ham()
              >
              <Text style={{textAlign:'center',paddingTop:15}} > Sau </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  fake_flexInline:{
    marginTop:10,
    marginBottom:5,
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
    justifyContent: 'space-between',

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
});
