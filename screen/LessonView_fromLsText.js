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
    this.state = {
          letCheckType: -1, letCheckId: -1,
          lessonShowView: {
            nameLesson: '',
            textMain: '',
            textNote1: '',
            textNote2: '',
            example: '',
          },

          V_Lesson: [
            {
              nameLesson: 'Thể từ điển ます',
              textMain: 'Đây là một thể của động từ mà được dùng rất phổ biến, nó là nguồn gốc cho việc chuyển đổi qua các thể khác.',
              textNote1: 'Cách chuyển đổi ở thể này thông thường là không nhất thiết, vì nó là thể gốc để tạo ra các thể khác nên trong các sách hướng dẫn, từ điển sẽ sử dụng thể này như một thể cơ bản.',
              textNote2: 'Một số điều cần lưu ý. Vì đây là thể cơ bản nên nó được chia làm 3 nhóm:\nNhóm I: ở nhóm này, động từ sẽ được kết thúc trước masu với kí tự cuối là i\nNhóm II: ở nhóm này, động từ sẽ là có đuôi là e\nNhóm III: ở nhóm này, động từ sẽ không còn được quan tâm đuôi mà thay vào đó là các từ trước masu, shi và ki là 2 từ cơ bản của nhóm này',
              example: 'nhóm I: 飲みます、やります　\nnhóm II: 食べます、忘れます \nnhóm III: します、きます',
            },
            {
              nameLesson: 'Thể て',

              textMain: 'Thể て',
              textNote1: 'Cách chuyển đổi: động từ thể từ điển + ます -> động từ thể て (bỏ ます)\nĐiều cần lưu ý: khi chuyển đổi trong thể này, đó là động từ ở nhóm I, sẽ có một số từ khi thay đổi sẽ được chuyển từ い => って',
              textNote2: 'Nhóm I: đổi đuôi i -> te, bỏ masu\nNhóm II: thêm te và sau từ cuối đuôi e, bỏ masu\nNhóm III: tương tự nhóm II, thêm te vào sau shi và ki, bỏ masu',
              example: 'nhóm I: 行って、帰って\nnhóm II: 食べて、忘れて \nnhóm III: きて、して',
            },
            {
              nameLesson: 'Thể た',
              textMain: 'Thể た thường được sử dụng trong việc miêu tả một sự việc trong quá khứ, đã được làm và kết thúc.',
              textNote1: 'Cách chuyển đổi: động từ thể từ điển + ます -> động từ た (bỏ ます)',
              textNote2: 'Nhóm I: đổi đuôi cột い thành cột あ tương ứng, bỏ ます\nNhóm II: thêm た vào sau động từ, bỏ ます\nNhóm III: tương tự động từ nhóm II, thêm た vào sau cuối động từ, bỏ ます.',
              example: 'nhóm I: やった、帰った　\nnhóm II: 食べた、忘れた \nnhóm III: 勉強した、した',
            },
            {
              nameLesson: 'Thể ない',
              textMain: 'Thể của động từ khi đi kèm với ない được gọi là thể ない của động từ .',
              textNote1: 'Trong tiếng Nhật Thể ないcuả động từ luôn đi kèm với đuôi ない ở phía sau; mang nghĩa phủ định',
              textNote2: 'Cách chuyển đổi:\nNhóm I:Đổi âm cuối của thể ます い sang âm  あ tương ứng và thêm ない vào (bỏ　ます)\nNhóm II: Đối với động từ nhóm này thì thể ない giống với thể ます (bỏ　ます thay thành ない)\nNhóm III: しますー＞しない、きますー＞こない',
              example: 'nhóm I: 働かない、行かない　\nnhóm II: 食べない、忘れない \nnhóm III: 勉強しない、しない',
            },
            {
              nameLesson: 'Thể Dự định/Ý định',
              textMain: 'Thể dự định/Ý định được sử dụng trong câu văn với tư cách là thể thông thường của ましょう',
              textNote1: 'Tuy là ở được xem là ở thể thông thường nhưng việc tạo câu hỏi cũng không thể nào lược bỏ đuôi か.',
              textNote2: 'Cách đổi như sau:\nNhóm I: đổi âm cuối cùng いー＞âm お rồi thêm う vào sau\nNhóm II: thêm よう vào sau (lược bỏ　ます)\nNhóm III: きますー＞こよう、しますー＞しよう',
              example: 'nhóm I: 休もう、行こう　\nnhóm II: 寝よう、食べよう \nnhóm III: 勉強しよう、準備しよう',
            },
            {
              nameLesson: 'Thể Khả năng',
              textMain: 'Thể này được sử dụng trong các trường hợp người nói muốn cho người nghe biết về việc họ có thể làm được một việc gì đó.',
              textNote1: 'Tương đồng với ngữ pháp (động từ thể nguyên mẫu）+　ことができます cũng ám chỉ về việc có khả năng làm một việc gì đó thì ở đây động từ thể khả năng cũng ám chỉ tương tự thế.',
              textNote2: 'Cách chuyển đổi:\nNhóm I: động từ cuối đuôi い (bỏ　ます) -> える\nNhóm II: Thêm られる vào sau đuôi え (bỏ　ます)\nNhóm III: ～しますー＞できる、～きまー＞こられる。',
              example: 'nhóm I:　働ける、終われる　\nnhóm II: 忘れられる、食べられる \nnhóm III: 勉強できる、来られる',
            },
            

          ],
          phase_Lesson:[
              {
              nameLesson: 'Danh từ + は + danh từ ',
                textMain: 'Đây là mẫu câu đơn giản nhất, được sử dụng nhiều nhất. Với ý nghĩa là (danh từ 1) là/thì (danh từ 2)',
                textNote1: 'Chú ý, từ は trong mẫu câu này thay vì đọc là (ha) theo bảng chữ cái thì được đọc là (wa).',
                textNote2: '',
                example: '1.私はサトウです\n2.これは車です',
              },
              {
                nameLesson: 'Danh từ + も ...',
                textMain: 'Đây là mỗi câu lặp lại nội dung đã được nêu lên trước đó. Thường mang ý nghĩa rằng (danh từ) cũng...',
                textNote1: 'Người nói câu này chỉ cần lặp lại mẫu câu đã được nêu lên trước đó, thay vì dùng　は chỉ việc dùng も và lặp lại nội dung toàn bộ của người nói trước đó.',
                textNote2: 'Có thể lược bỏ nội dung phía sau.',
                example: 'Ａ：私は疲れたです\nＢ：私も',
              },
              {
                nameLesson: 'Danh từ + の + danh từ',
                textMain: 'Mẫu ngữ pháp này mang ý nghĩa rằng danh từ đứng sau の thuộc về danh từ đứng trước nó.\nNgoài ra nó còn mang ý nghĩa rằng danh từ trước の bổ nghĩa cho danh từ đứng phía sau. ',
                textNote1: 'Danh từ 1 + の + danh từ 2: (danh từ 2) của (danh từ 1) hoặc đây là (danh từ 1) về (danh từ 2). Ngoài ra nó còn mang ý nghĩa thuộc về khi người dùng muốn nói đến nơi làm việc của mình.',
                textNote2: 'Có thể lược bỏ danh từ sau の nếu nó là một vật hiển nhiên nào đó mà người nghe lẫn người nói đề biết rõ.',
                example: '１．これは私の本です\n２．写真の本です\n',
              },
              {
                nameLesson: 'Danh từ + が + danh từ です',
                textMain: 'Mẫu ngữ pháp này về mặt ngữ nghĩa thì nó tương đồng với (danh từ 1) + は + (danh từ 2). Tuy nhiên nó lại được sử dụng để tạo mẫu câu phụ, còn câu　は kia thì được dùng để tạo câu mang chủ đề chính.',
                textNote1: 'Trong một câu có thể sử dụng mẫu câu này nhiều lần, tuy nhiên mẫu câu (danh từ 1) + は + (danh từ 2) thì chỉ dùng được 1 lần vì nó mang chủ đề chính ở câu nói đó.',
                textNote2: 'Trong một câu không cần thiết phải có câu は khi sử dụng câu が\nNgoài ra câu này còn được dùng để nói rằng (danh từ 1) thì thích (好き）, ghét(きらい）, khéo léo(上手）, tệ(下手)',
                example: '１．この本が嫌いです\n２．あなたが上手ですね',
              },
              {
                nameLesson: 'Danh từ + ... でしょう',
                textMain: 'Đây cơ bản chỉ là mẫu câu mang hàm ý rằng người nghe chắc chắn sẽ tán thành với mình, thường có thái độ chắc chắn với hàm lượng thông tin mình nói ra là được người nghe đồng thuận.',
                textNote1: 'Vị trí thường ở cuối câu nói.',
                textNote2: 'Lưu ý câu này thường mang hàm ý chủ động khá cao, do đó nên thường người ta chỉ dùng câu Động từ thể ます + ませんか.',
                example: '1.こらはいいでしょう\n2. -一緒に食べでしょうか？ (thường mang ý nghĩa dám chắc người nghe sẽ ăn cùng mình)\n３．一緒に食べませんか?(có thể sẽ bị người nghe từ chối)',
              },
              {
                nameLesson: 'Đại từ chỉ đồ vật: これ、それ、あれ',
                textMain: 'Đồ vật trong tiếng nhật ngoài cách gọi tên nó người ta còn có thể sử dụng đại từ chỉ đồ vật để gọi.',
                textNote1: 'Đại từ chỉ đồ vật ở đây rất hữu dụng khi chúng không chỉ giúp người nghe nhận định được cái người nói muốn nói mà còn giúp họ xác định được vật đó đang ở phạm vi nào khi người nói muốn người nghe nhìn thấy.',
                textNote2: 'これ: sử dụng từ này khi đồ vật ở gần người nói\nそれ: khi vật ở gần người nghe\nあれ: khi vật ở xa cả người nói lẫn người nghe.',
                example: '１．これが私の本です\n２．それは何ですか？\n3．あれはサトウーさんです',
              },
              {
                nameLesson: 'Đại từ chỉ địa điểm: ここ、そこ、あそこ、こちら、そちら、あちら',
                textMain: 'Giống với đại từ chỉ đồ vật, tiếng nhật còn có đại từ chỉ địa điểm. Cách sử dụng chúng có đôi chút tương đồng với nhau, chỉ khác nhau chỗ đây là đại từ được dùng để chỉ địa điểm.',
                textNote1: 'Tương tự về mặt khoảng cách:\nここ: chỉ nơi mà người nói đang đứng\nそこ: chỉ nơi mà người nghe đang đứng (hoặc gần người nghe)\nあそこ: chỉ nơi xa cả 2 người nói và người nghe.',
                textNote2: 'こちら, そちら, あちら về mặt ngữ nghĩa thì cả 3 đều tương đồng với ここ、そこ、あそこ, tuy nhiên lại mang sắc thái lịch sự hơn.\nDùng どこ khi muốn hỏi về địa điểm.',
                example: '1.ここは私の大学校です\n2.そこはサトウーさんがいる\n3.これはどこですか？',
              },
              {
                nameLesson: 'Câu phủ định',
                textMain: 'Trong tiếng nhật, bên cạnh câu khẳng định cũng tồn tại câu phủ định',
                textNote1: 'Bằng cách sử dụng câu khẳng định, bỏ masu, thêm jya arimasen vào sau, nghĩa là không phải là',
                textNote2: 'Được sử dụng khi muốn phủ định bất cứ điều gì mà người hỏi dùng hỏi đến người nghe (mình).',
                example: '1.他紙は先生じゃありません\n2.これが私の本じゃありません',
              },
              {
                nameLesson: 'Câu hỏi',
                textMain: 'Câu hỏi trong tiếng Nhật rất dễ sử dụng, nó không phức tạp như các ngôn ngữ khác.\nĐể tạo câu hỏi, chúng ta chỉ việc thêm vào cuối câu từ か và nhấn âm phần này, sẽ tạo thành một câu hỏi tương ứng',
                textNote1: 'Người nghe sẽ trả lời lại bằng cách lặp lại câu trên và bỏ か, hoặc phủ định lại bằng cách sử dụng câu phủ định.',
                textNote2: 'Trong một số trường hợp không cần sử dụng từ か vẫn có thể tạo ra câu hỏi, bằng việc nhấn mạnh từ cuối cùng của câu khi trò chuyện, người nghe sẽ mặc nhiên hiểu rằng đấy chính là câu hỏi từ người nói.',
                example: 'あの人はサトウーさんですか？ー',
              },
              {
                nameLesson: 'Từ chỉ thời gian: 今　-時　-分です',
                textMain: 'Thời gian trong tiếng nhật, thời gian được tạo dựng thông qua 時(giờ)　分(phút). Cách đọc chúng tùy thuộc vào loại số đứng trước mà sẽ có các cách đọc khác nhau.',
                textNote1: '時 đọc là ji, nghĩa là giờ, không phân biệt khi đứng với bất kì số nào từ 1-10.\n分 mang ý nghĩa là phút, gồm 2 cách đọc khác nhau:\n1. Nếu đứng trước nó là 2, 5, 7, 9 thì sẽ được đọc là fun（ふん).\n2. Được đọc là bun（ぶん) khi trước nó là 1, 3, 4, 6, 8, 10.',
                textNote2: 'Lưu ý: với số 1, 6, 8, 10 sẽ được đọc tương ứng là （いっ）、（ろっ）、（はっ）、（じゅっ hoặc　じっ）\nVới câu hỏi, sử dụng 何(đọc là nan trong dạng câu này) kết hợp với 時 để hỏi giờ (hoặc cùng với 分 để hỏi cùng lúc cả 2).',
                example: '六時二十分(６時２０分)\n三時（３時）',
              },
              {
                nameLesson: 'Danh từ から danh từ まで',
                textMain: 'から ở đây dùng để biểu thị điểm bắt đầu của thời gian hoặc địa điểm, còn まで là biểu thị điểm kết thúc của thời gian hoặc địa điểm',
                textNote1: 'Cả 2 không nhất thiết phải được sử dụng cùng lúc với nhau, có thể sử dụng rời rạc để biểu thị điểm bắt đầu hoặc điểm kết thúc nào đó.',
                textNote2: 'Có thể dùng です với　から、 ～まで　và から～まで',
                example: '1.銀行は何時から何時まで働きますか\n2.これはいつまで終わりますか\n3.私は東京(toukyo）から大阪(oosaka）まで電車で行きます',
              },


          ],
          //thêm các thể loại khác để in ra màn hình
       };
       this.ghiNho = this.ghiNho.bind(this);
    }

    ghiNho(){
    	Alert.alert(
        "Cần nhớ",
        "Nội dung:\n" + this.state.lessonShowView.textMain,
      	[
        { text: "Ok", onPress: () => console.log("Ok!") },
      	],
      	{ cancelable: false });
          }

    componentDidMount(){
      var check = this.props.navigation.state.params.JSON_ListView_Clicked_Item;
      this.setState({letCheckType: check.checkLesson});
      this.setState({letCheckId: check.idLesson});
      if (check.checkLesson == 0){
        this.setState({lessonShowView: this.state.V_Lesson[check.idLesson]});
      }
      else{
        this.setState({lessonShowView: this.state.phase_Lesson[check.idLesson]});

      }

    }

  render() {
      return (
      <ImageBackground 
          style={{flex:1, height: undefined, width: undefined}}
          source={require('../Asset/Pic_Book_1.jpg')}
          >
        <View style={{alignItems:'center',}}>
            <View style={styles.box_View}>
              <View style = {styles.mainContent}>
              	<ScrollView contentContainerStyle ={{paddingBottom:10}}>
                <Text style = {{fontSize:17}}>
                  {this.state.lessonShowView.nameLesson}
                </Text>
                <Text style = {{fontSize:16}}> {this.state.lessonShowView.textMain} </Text>
                <Text style = {{fontSize:16}}> {this.state.lessonShowView.textNote1} </Text>
                <Text style = {{fontSize:16}}> {this.state.lessonShowView.textNote2} </Text>
              	</ScrollView>
              </View>
              <Text> Ví dụ </Text>
              <Text style = {{fontSize:14,paddingRight:5,paddingLeft:5}}>
                {this.state.lessonShowView.example}
              </Text>
              
            </View>

        </View>
        <View style = {styles.boxControl}>
            <View style = {styles.controlView_Ex}>
              <TouchableOpacity
                style={styles.controlButton}
                  // chức năng của button ở đây
                onPress={()=> {this.ghiNho()}} // () => this.ham()
              >
            
                <Text style = {{textAlign:'center'}}> Ghi nhớ </Text>
              </TouchableOpacity>
            </View>
            <View style = {styles.controlView_Out}>
              <TouchableOpacity
                style={styles.controlButton}
                  // chức năng của button ở đây
                onPress={()=> this.props.navigation.navigate('LessonScr')} // () => this.ham()
              >
            
                <Text style = {{textAlign:'center'}}> Out </Text>
              </TouchableOpacity>
            </View>
          </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  
  box_View:{
    borderColor: 'black',
    borderWidth: 2,
    width:'95%',
    height:'85%',
    marginTop:20,
    backgroundColor:'lightgray',
  },
  boxControl:{
    marginTop:5,
    flexDirection:'row',
    justifyContent: 'space-between',

  },
  controlView_Out:{
    marginRight:15,
  },
  controlView_Ex:{
    marginLeft:15,
  },
  controlButton:{
    width:50,
    height:50,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    borderRadius:25,
    justifyContent :'center',

  },
  mainContent:{
    
    paddingTop:10,
    paddingRight:10,
    paddingLeft:10,
    height: '73%',
    backgroundColor: 'yellow', 
  }
  
});
