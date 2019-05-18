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
  Alert,
} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0, id : 0, count_True: 0, get_Num: 0,
      check_Quest: {
        Quest: 'AAA',
        bold_Quest: '',
        cauA: 'A',
        cauB: 'B',
        cauC: 'C',
        cauD: 'D',
        Ans: 'Check',
        Hint: '',
      },
      chars_Quest: [
        {
          Quest: 'chữ か đọc là gì?',
          bold_Quest: 'か',

          cauA: 'sa',
          cauB: 'ga',
          cauC: 'ka',
          cauD: 'ya',
          Ans: 'C',
          hint: 'chữ đứng đầu ở hàng k',
        },
        {
          Quest: 'chữ イ đọc là gì?',
          bold_Quest: 'イ',
          cauA: 'sa',
          cauB: 'u',
          cauC: 'i',
          cauD: 'ya',
          Ans: 'C',
          hint: 'chữ đứng kế chữ ウ',
        },
        {
          Quest: 'chữ gu viết như thế nào?',
          bold_Quest: 'gu',

          cauA: 'ち',
          cauB: 'き',
          cauC: 'た',
          cauD: 'ぐ',
          Ans: 'D',
          hint: 'chữ có cách đọc khá tương đồng với ku',
        },
        {
          Quest: 'chữ ヌ đọc là gì?',
          bold_Quest: 'ヌ',

          cauA: 'nu',
          cauB: 'shi',
          cauC: 'ta',
          cauD: 'fu',
          Ans: 'A',
          hint: 'chữ đứng kế ね',
        },
        {
          Quest: 'chữ ho viết như thế nào?',
          bold_Quest: 'ho',

          cauA: 'な',
          cauB: 'あ',
          cauC: 'ほ',
          cauD: 'き',
          Ans: 'C',
          hint: 'chữ đứng kế へ',
        },
        {
          Quest: 'chữ じ đọc là gì?',
          bold_Quest: 'じ',
          cauA: 'sa',
          cauB: 'ji',
          cauC: 'di',
          cauD: 'chi',
          Ans: 'B',
          hint: 'chữ có cách đọc gần giống với し',
        },
        {
          Quest: 'chữ モ - katakana đọc là gì?',
          bold_Quest: 'モ',
          cauA: 'sa',
          cauB: 'mo',
          cauC: 'ka',
          cauD: 'ya',
          Ans: 'B',
          hint: 'chữ có cách đọc giống với も',
        },
        {
          Quest: 'chữ hi　-　katakana viết như thế nào?',
          bold_Quest: 'hi',
          cauA: 'グ',
          cauB: 'シ',
          cauC: 'チ',
          cauD: 'ヒ',
          Ans: 'D',
          hint: 'chữ đứng kế ハ',
        },
        {
          Quest: 'chữ he　-　katakana viết như thế nào?',
          bold_Quest: 'he',
          cauA: 'ヘ',
          cauB: 'ゲ',
          cauC: 'キ',
          cauD: 'ユ',
          Ans: 'A',
          hint: 'chữ đứng kế フ',
        },
        {
          Quest: 'chữ ゆ đọc là gì?',
          bold_Quest: 'ゆ',
          cauA: 'da',
          cauB: 'yu',
          cauC: 'ya',
          cauD: 'yo',
          Ans: 'B',
          hint: 'chữ có cách đọc giống với ユ',
        },
        {
          Quest: 'chữ を đọc là gì?',
          bold_Quest: 'を',
          cauA: 'chi',
          cauB: 'no',
          cauC: 'wo',
          cauD: 'o',
          Ans: 'C',
          hint: 'chữ có cách đọc tương tự với お',
        },

      ],


      kanji_Quest: [
        {
          Quest: 'chữ 日 nghĩa là gì?',
          bold_Quest: '日',

          cauA: 'ngày',
          cauB: 'màu trắng',
          cauC: 'mặt trăng',
          cauD: 'đọc',
          Ans: 'A',
          hint: 'nói về một loại màu sắc.',
        },
        {
          Quest: 'chữ 一 đọc theo âm hán nhật (on) là gì?',
          bold_Quest: '一',

          cauA: 'hito',
          cauB: 'ichi',
          cauC: 'nichi',
          cauD: 'ni',
          Ans: 'B',
          hint: 'đọc theo âm đếm số.',
        },
        {
          Quest: 'chữ 国 nghĩa là gì?',
          bold_Quest: '国',

          cauA: 'đất nước',
          cauB: 'nước',
          cauC: 'tiền',
          cauD: 'ngày',
          Ans: 'A',
          hint: 'đồng nghĩa với quốc gia',
        },
        {
          Quest: 'chữ 人 đọc theo âm thuần nhật (kun) là gì?',
          bold_Quest: '人',

          cauA: 'chuu',
          cauB: 'nin',
          cauC: 'hito',
          cauD: 'kito',
          Ans: 'C',
          hint: 'Không có hint, từ này là từ cơ bản',
        },
        {
          Quest: 'chữ 年 nghĩa là gì?',
          bold_Quest: '年',

          cauA: 'tháng',
          cauB: 'ngày',
          cauC: 'giờ',
          cauD: 'năm',
          Ans: 'D',
          hint: '365 ngày là gì?',
        },
        {
          Quest: 'chữ　大 đọc theo âm thuần nhật (kun) là gì?',
          bold_Quest: '大',

          cauA: 'oo',
          cauB: 'dai',
          cauC: 'nagai',
          cauD: 'chuu',
          Ans: 'A',
          hint: 'Cách đọc khá giống với 多',
        },
        {
          Quest: 'chữ 十 nghĩa là gì?',
          bold_Quest: '十',

          cauA: 'hai',
          cauB: 'trên',
          cauC: 'mười',
          cauD: 'bố',
          Ans: 'C',
          hint: 'chữ số lớn nhất từ 0-10',
        },
        {
          Quest: 'chữ 二 đọc theo âm Hán nhật (on) là gì?',
          bold_Quest: '二',

          cauA: 'nyuu',
          cauB: 'ni',
          cauC: 'mi',
          cauD: 'san',
          Ans: 'B',
          hint: 'cách đọc khá giống với に',
        },
        {
          Quest: 'chữ 本 nghĩa là gì?',
          bold_Quest: '本',

          cauA: 'sách',
          cauB: 'cành cây',
          cauC: 'dài',
          cauD: 'tiền',
          Ans: 'A',
          hint: 'một vật dày với nhiều tờ giấy bên trong',
        },
        {
          Quest: 'chữ 中	 nghĩa là gì?',
          bold_Quest: '中	',

          cauA: 'trong, tâm',
          cauB: 'mười',
          cauC: 'phía trên',
          cauD: 'bảy',
          Ans: 'A',
          hint: 'mang ý nghĩa giống với từ giữa',
        },
        {
          Quest: 'chữ 長	 nghĩa là gì?',
          bold_Quest: '長	',

          cauA: 'bên ngoài',
          cauB: 'ngắn',
          cauC: 'dài',
          cauD: 'cao',
          Ans: 'C',
          hint: 'ngoài rộng ta còn có?',
        },
        {
          Quest: 'chữ 出	 đọc theo âm thuần nhật (kun) là gì?',
          bold_Quest: '出	',

          cauA: 'de',
          cauB: 'nyuu',
          cauC: 'sui',
          cauD: 'ji',
          Ans: 'A',
          hint: 'cách đọc giống với で',
        },
        {
          Quest: 'chữ 三	 nghĩa là gì?',
          bold_Quest: '三',

          cauA: 'ba',
          cauB: 'bốn',
          cauC: 'hai',
          cauD: 'năm',
          Ans: 'A',
          hint: 'số gì chia 3 = 1?',
        },
        {
          Quest: 'chữ 時 nghĩa là gì?',
          bold_Quest: '時',

          cauA: 'giờ',
          cauB: 'thời gian',
          cauC: 'sáu',
          cauD: 'không biết',
          Ans: 'A',
          hint: 'không có hint, từ cơ bản',
        },
        {
          Quest: 'chữ 行 đọc theo âm Hán nhật (on) là gì?',
          bold_Quest: '行',

          cauA: 'i(ku)',
          cauB: 'koo, gyoo',
          cauC: 'go, goin',
          cauD: 'run, runin',
          Ans: 'B',
          hint: 'Ngân hàng (銀行）đọc như thế nào?',
        },
        {
          Quest: 'chữ 見	 nghĩa là gì?',
          bold_Quest: '見	',

          cauA: 'nhìn, ý kiến',
          cauB: 'mặt trăng',
          cauC: 'ngày, mặt trời',
          cauD: 'sáu',
          Ans: 'A',
          hint: 'không có hint, từ cơ bản',
        },
        {
          Quest: 'chữ 月	 nghĩa là gì?',
          bold_Quest: '月	',

          cauA: 'tháng',
          cauB: 'năm',
          cauC: 'bốn',
          cauD: 'nhìn',
          Ans: 'A',
          hint: 'chữ này có ý nghĩa là mặt trăng với ?',
        },
        {
          Quest: 'chữ 間	 nghĩa là gì?',
          bold_Quest: '間	',

          cauA: 'nói',
          cauB: 'viết',
          cauC: 'nghe',
          cauD: 'khoảng, trung gian',
          Ans: 'D',
          hint: 'Không nhầm lẫn với các động từ chỉ hành động',
        },
        {
          Quest: 'chữ 四 nghĩa là gì?',
          bold_Quest: '四',

          cauA: 'bốn',
          cauB: 'phía tây',
          cauC: 'màu trắng',
          cauD: 'nước',
          Ans: 'A',
          hint: 'từ có cách viết khá giống với một từ chỉ phương hướng',
        },
        {
          Quest: 'chữ 後	 nghĩa là gì?',
          bold_Quest: '後	',

          cauA: 'phía trước',
          cauB: 'phía trên',
          cauC: 'phía dưới',
          cauD: 'phía sau',
          Ans: 'D',
          hint: 'Hãy quay lại phía sau lưng của bạn, đáp án đang ở đó!',
        },
        {
          Quest: 'chữ 金	 đọc theo âm Hán nhật (kun) là gì?',
          bold_Quest: '金	',

          cauA: 'ima',
          cauB: 'kin',
          cauC: 'kan',
          cauD: 'kyuu',
          Ans: 'B',
          hint: 'tiền đọc như thế nào?',
        },
        {
          Quest: 'chữ 円 nghĩa là gì?',
          bold_Quest: '円',

          cauA: 'tròn',
          cauB: 'miệng',
          cauC: 'cổng',
          cauD: 'bốn',
          Ans: 'A',
          hint: 'đồng yên đọc như thế nào ?',
        },
        {
          Quest: 'chữ 八 nghĩa là gì?',
          bold_Quest: '八',

          cauA: 'tám',
          cauB: 'chín',
          cauC: 'nhập',
          cauD: 'bảy',
          Ans: 'A',
          hint: 'cách viết của nó khá tương tự với chữ ハ',
        },
        {
          Quest: 'chữ 下 đọc theo âm thuần Nhật (on) là gì?',
          bold_Quest: '下',

          cauA: 'sata',
          cauB: 'shita',
          cauC: 'kata',
          cauD: 'sita',
          Ans: 'B',
          hint: 'cách đọc là し＋？',
        },
        {
          Quest: 'chữ 入 nghĩa là gì?',
          bold_Quest: '入',

          cauA: 'ra',
          cauB: 'đến',
          cauC: 'vào',
          cauD: 'tám',
          Ans: 'C',
          hint: 'đồng nghĩa với nhập?',
        },
        {
          Quest: 'chữ 東 nghĩa là gì?',
          bold_Quest: '東',

          cauA: 'phía đông',
          cauB: 'chuyển động',
          cauC: 'phía nam',
          cauD: 'xe',
          Ans: 'A',
          hint: 'mang ý nghĩa là phía ?',
        },
        {
          Quest: 'chữ 女	 nghĩa là gì?',
          bold_Quest: '女	',

          cauA: 'phụ nữ',
          cauB: 'đàn ông',
          cauC: 'đứa trẻ',
          cauD: 'sáu',
          Ans: 'A',
          hint: 'từ cơ bản, không có hint',
        },
        {
          Quest: 'chữ 北 nghĩa là gì?',
          bold_Quest: '北',

          cauA: 'phía bắc',
          cauB: 'phía nam',
          cauC: 'bên trên',
          cauD: 'cái gì',
          Ans: 'A',
          hint: 'mang ý nghĩa là phía?',
        },
        {
          Quest: 'chữ 書 nghĩa là gì?',
          bold_Quest: '書',

          cauA: 'viết',
          cauB: 'nghe',
          cauC: 'nói',
          cauD: 'đọc',
          Ans: 'A',
          hint: 'làm gì khi cầm bút ?',
        },
        {
          Quest: 'chữ 話 nghĩa là gì?',
          bold_Quest: '話',

          cauA: 'nghe',
          cauB: 'đọc',
          cauC: 'viết',
          cauD: 'nói',
          Ans: 'D',
          hint: 'khi giao tiếp ta thường ?',
        },
        {
          Quest: 'chữ 名 đọc theo âm Hán nhật (on) là gì?',
          bold_Quest: '名',

          cauA: 'na',
          cauB: 'mei',
          cauC: 'sho',
          cauD: 'mae',
          Ans: 'B',
          hint: 'めい',
        },
        {
          Quest: 'chữ 先	 nghĩa là gì?',
          bold_Quest: '先	',

          cauA: 'cao',
          cauB: 'trước',
          cauC: 'sống',
          cauD: 'vàng',
          Ans: 'B',
          hint: 'có ý nghĩa khá giống với 前',
        },
        {
          Quest: 'chữ 父 nghĩa là gì?',
          bold_Quest: '父',

          cauA: 'bố',
          cauB: 'mẹ',
          cauC: 'học',
          cauD: 'tiền',
          Ans: 'A',
          hint: 'người đàn ông trong già đình bạn (đương nhiên không phải ông hàng xóm)',
        },
        {
          Quest: 'chữ 水	 nghĩa là gì?',
          bold_Quest: '水	',

          cauA: 'lửa',
          cauB: 'đàn ông',
          cauC: 'nước',
          cauD: 'trắng',
          Ans: 'B',
          hint: 'cái gì mắt bạn thấy màu xanh, nhưng lại không phải màu xanh?',
        },
        {
          Quest: 'chữ 川 	 nghĩa là gì?',
          bold_Quest: '川',

          cauA: 'sông',
          cauB: 'sống',
          cauC: 'nước',
          cauD: 'số ba',
          Ans: 'A',
          hint: 'con gì dài nhất?',
        },
        {
          Quest: 'chữ 西 nghĩa là gì?',
          bold_Quest: '西',

          cauA: 'phía tây',
          cauB: 'phía đông',
          cauC: 'phía nam',
          cauD: 'phía bắc',
          Ans: 'A',
          hint: 'mặt trời không thể lên ở hướng ?',
        },
        {
          Quest: 'chữ 土	 nghĩa là gì?',
          bold_Quest: '土	',

          cauA: 'trên',
          cauB: 'dưới',
          cauC: 'mười',
          cauD: 'đất',
          Ans: 'D',
          hint: 'bạn đang đứng trên?',
        },
        {
          Quest: 'chữ 何	 nghĩa là gì?',
          bold_Quest: '何	',

          cauA: 'cái gì',
          cauB: 'vàng',
          cauC: 'bạc',
          cauD: 'bây giờ',
          Ans: 'A',
          hint: 'từ cơ bản, không có hint',
        },
        {
          Quest: 'chữ 南	 nghĩa là gì?',
          bold_Quest: '南	',

          cauA: 'phía tây',
          cauB: 'phía nam',
          cauC: 'phía bắc',
          cauD: 'phía đông',
          Ans: 'B',
          hint: 'có 2 cực, thì cực này nằm ở phía mà không quốc gia nào có chủ quyền?',
        },
        {
          Quest: 'chữ 毎 nghĩa là gì?',
          bold_Quest: '毎',

          cauA: 'biển',
          cauB: 'mọi',
          cauC: 'ngày',
          cauD: 'mẹ',
          Ans: 'B',
          hint: 'làm thường xuyên nhiều ngày gọi là ?',
        },
        {
          Quest: 'chữ 白 nghĩa là gì?',
          bold_Quest: '白',

          cauA: 'trắng',
          cauB: 'đen',
          cauC: 'tháng',
          cauD: 'ngày',
          Ans: 'A',
          hint: 'một từ nói về màu sắc?',
        },
        {
          Quest: 'chữ 天	 nghĩa là gì?',
          bold_Quest: '天	',

          cauA: 'trời, thiên',
          cauB: 'mười',
          cauC: 'dài, chiều dài',
          cauD: 'người',
          Ans: 'A',
          hint: 'phía trên thì có gì ?',
        },
        {
          Quest: 'chữ 読	 đọc theo âm Hán nhật (on) là gì?',
          bold_Quest: '読	',

          cauA: 'doku',
          cauB: 'yomu',
          cauC: 'deki',
          cauD: 'shita',
          Ans: 'A',
          hint: 'どく đọc là gì?',
        },
        {
          Quest: 'chữ 母	 nghĩa là gì?',
          bold_Quest: '母	',

          cauA: 'đàn bà',
          cauB: 'bà già',
          cauC: 'mẹ',
          cauD: 'con gái',
          Ans: 'C',
          hint: 'ngày phụ nữ mà bạn yêu quý nhất?',
        },
        {
          Quest: 'chữ 雨	 đọc theo âm Thuần nhật (kun) là gì?',
          bold_Quest: '雨	',

          cauA: 'u',
          cauB: 'ame',
          cauC: 'name',
          cauD: 'kame',
          Ans: 'B',
          hint: 'từ cơ bản, không có hint',
        },
        {
          Quest: 'chữ 火	 nghĩa là gì?',
          bold_Quest: '火	',

          cauA: 'lửa',
          cauB: 'nước',
          cauC: 'sống',
          cauD: 'hồ',
          Ans: 'A',
          hint: 'cái gì vừa nóng vừa khô vừa có màu đỏ?',
        },
        {
          Quest: 'chữ 右 đọc theo âm Hán nhật (on) là gì?',
          bold_Quest: '右',

          cauA: 'migi',
          cauB: 'hidari',
          cauC: 'yuu',
          cauD: 'nyuu',
          Ans: 'C',
          hint: 'Bên phải đọc là gì?',
        },
        {
          Quest: 'chữ 小 nghĩa là gì?',
          bold_Quest: '小',

          cauA: 'nhỏ, bé',
          cauB: 'phụ nữ',
          cauC: 'một chút, chút nữa',
          cauD: 'cây, gỗ',
          Ans: 'A',
          hint: 'từ cơ bản, không có hint',
        },
        {
          Quest: 'chữ 気 nghĩa là gì?',
          bold_Quest: '気',

          cauA: 'khí, không khí',
          cauB: 'hiện tại, lúc này',
          cauC: 'màu trắng, bạch',
          cauD: 'phía dưới',
          Ans: 'A',
          hint: 'từ cơ bản, không có hint',
        },
        {
          Quest: 'chữ 今	 nghĩa là gì?',
          bold_Quest: '今	',

          cauA: 'ngay bây giờ, lúc này',
          cauB: 'vàng, kim, tiền',
          cauC: 'lạnh, khí lạnh',
          cauD: 'chút nữa',
          Ans: 'A',
          hint: 'từ cơ bản không có hint',
        },
        {
          Quest: 'chữ 高	 nghĩa là gì?',
          bold_Quest: '高	',

          cauA: 'đen',
          cauB: 'thấp',
          cauC: 'cao',
          cauD: 'ngắn',
          Ans: 'C',
          hint: 'từ cơ bản không có hint',
        },


      ],
      sentence_Quest: [
        {
          Quest: 'どちらせいこうか？',
          bold_Quest:'私。。。学生です',

          cauA: 'は',
          cauB: 'が',
          cauC: 'に',
          cauD: 'を',
          Ans: 'A',
          hint: 'dịch: tôi...học sinh',
        },
        {
          Quest: 'どちらせいこうか？',
          bold_Quest:'学校。。。行きます',

          cauA: 'が',
          cauB: 'へ',
          cauC: 'の',
          cauD: 'を',
          Ans: 'B',
          hint: 'dịch: ...đến trường.',
        },
        {
          Quest: 'どちらせいこうか？',
          bold_Quest:'どこか電話。。。あるか',

          cauA: 'を',
          cauB: 'が',
          cauC: 'に',
          cauD: 'ない',
          Ans: 'B',
          hint: 'dịch: điện thoại...có ở đâu?',
        },
        {
          Quest: 'どちらせいこうか？',
          bold_Quest:'これは。。。ください',

          cauA: '読め',
          cauB: '読みて',
          cauC: '読み',
          cauD: '読む',
          Ans: 'A',
          hint: 'dịch: làm ơn hãy ... cái này',
        },
        {
          Quest: 'どちらせいこうか？',
          bold_Quest:'これは私。。。カバンです',

          cauA: 'は',
          cauB: 'が',
          cauC: 'に',
          cauD: 'の',
          Ans: 'D',
          hint: 'dịch: cái cặp đó là ... tôi',
        },
        {
          Quest: 'どちらせいこうか？',
          bold_Quest:'銀行がいつ。。。いつ。。。働きますか',

          cauA: 'とーと',
          cauB: 'からーまで',
          cauC: 'うえーした',
          cauD: 'しーし',
          Ans: 'B',
          hint: 'dịch: ngân hàng thì làm việc ... mấy giờ ... mấy giờ?',
        },
        {
          Quest: 'どちらせいこうか？',
          bold_Quest:'昨日、あなたは何を。。。ます?',

          cauA: '寝',
          cauB: '着',
          cauC: 'し',
          cauD: '行き',
          Ans: 'C',
          hint: 'dịch: hôm qua, bạn ... cái gì?',
        },
        {
          Quest: 'どちらせいこうか？',
          bold_Quest:'Ａ：昨日、私は犬。。。散歩しました',

          cauA: 'は',
          cauB: 'が',
          cauC: 'と',
          cauD: 'を',
          Ans: 'C',
          hint: 'dịch: hôm qua, tôi ... đi dạo với con chó của mình. ',
        },
        {
          Quest: 'どちらせいこうか？',
          bold_Quest:'私のカバンはまた。。。',

          cauA: '忘れました',
          cauB: '綺麗です',
          cauC: '見えます',
          cauD: '知らない',
          Ans: 'A',
          hint: 'dịch: tội lại ... cặp rồi',
        },
        {
          Quest: 'どちらせいこうか？',
          bold_Quest:'とりのおと。。。ますか',

          cauA: '見え',
          cauB: '聞こえ',
          cauC: '読め',
          cauD: '話られ',
          Ans: 'B',
          hint: 'dịch: bạn có ... tiếng chim hót không?',
        },
        {
          Quest: 'どちらせいこうか？',
          bold_Quest:'私。。。学生です',

          cauA: 'は',
          cauB: 'が',
          cauC: 'に',
          cauD: 'を',
          Ans: 'A',
          hint: 'dịch: tôi ... học sinh',
        },

      ],

    };
    this.alertText = this.alertText.bind(this);
    this.alertHint = this.alertHint.bind(this);
    this.reNewQs = this.reNewQs.bind(this);
    this.setAns = this.setAns.bind(this);
    }

    ham(){
          }
     // alert Thông tin
    alertText(item){
     if (item == this.state.check_Quest.Ans) this.setState({count_True: this.state.count_True+1});
     if (this.state.number <=4){
      Alert.alert(
        "Đáp án là: " ,
        this.state.check_Quest.Ans,
      [
        { text: "Ok", onPress: () => this.setAns(this.state.id,this.state.get_Num)},
      ],
      { cancelable: false });
  		}
  	 else{
      let check_TrueAns = this.state.count_True;
      if (item == this.state.check_Quest.Ans) check_TrueAns = check_TrueAns + 1;

  	 	Alert.alert(
        "Kết thúc",
        "END, số câu đúng là: " + check_TrueAns + "/5" ,
      [
        { text: "Ok", onPress: () => this.props.navigation.navigate('Test')},
      ],
      { cancelable: false });
  	 }
    }
    alertHint(item){
    	Alert.alert(
        "Gợi ý",
        "Đây là gợi ý:\n" + this.state.check_Quest.hint,
      [
        { text: "Ok", onPress: () => console.log("Ok!") },
      ],
      { cancelable: false });
    }
    
    //change nội dung Question
    reNewQs(item){
    	
    		this.alertText(item);	
    	
    }

    setAns(intA,intRD){
      if (intA == 1){
        if ( intRD > 10) intRD = intRD % 10;
      this.state.check_Quest = this.state.chars_Quest[intRD]; 
      this.setState({get_Num: intRD + 3});
      this.setState({number: this.state.number+1});   
      }
      if (intA == 2){
        if (intRD > 50) intRD = intRD % 50 - intRD%10%3;
        this.state.check_Quest = this.state.kanji_Quest[intRD]; 
        this.setState({get_Num: intRD + 13});
        this.setState({number: this.state.number+1});  

      }
      if (intA == 3){
        if ( intRD > 10) intRD = intRD % 10;
      this.state.check_Quest = this.state.sentence_Quest[intRD]; 
      this.setState({get_Num: intRD + 3});
      this.setState({number: this.state.number+1});   
      }
    }

    //change component
    componentDidMount(){
     
      var id_Qt = this.props.navigation.state.params.JSON_ListView_Clicked_Item;
      let x = id_Qt.code;
      x++;
      this.setState({number: x});
      this.setState({id: id_Qt.id});
      var randomNumber = (Math.floor(Math.random() * 100) + 1);
      get_Num = randomNumber;
      this.setAns (id_Qt.id,get_Num);


  	   
    }

  render() {
  	
    return (
      <ImageBackground 
          style={{flex:1, height: undefined, width: undefined}}
          source={require('../Asset/Pic_Book_1.jpg')}
          >
        <View style = {{flex:1}}>
          <View style = {{height:'5%',justifyContent: 'center',}}>
          	<Text> Câu: {this.state.number}/5 </Text>
          </View>
          <View style = {styles.boxQuest}>
          	<Text style = {{fontSize:20,textAlign:'center'}}> {this.state.check_Quest.Quest} </Text>
            <Text style = {{fontSize:50,textAlign:'center',color: 'black'}}> {this.state.check_Quest.bold_Quest} </Text>
          </View>
          <View style = {styles.boxAns}>
            <TouchableOpacity
              style={styles.button}
              // chức năng của button ở đây
              onPress={()=> {this.reNewQs("A")}} // () => this.ham()
            >
            
              <Text style={styles.textInButton}> {this.state.check_Quest.cauA} </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              // chức năng của button ở đây
              onPress={()=> {this.reNewQs("B")}} // () => this.ham()
            >
            
              <Text style={styles.textInButton}> {this.state.check_Quest.cauB} </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              // chức năng của button ở đây
              onPress={()=> {this.reNewQs("C")}} // () => this.ham()
            >
            
              <Text style={styles.textInButton}> {this.state.check_Quest.cauC} </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              // chức năng của button ở đây
              onPress={()=> {this.reNewQs("D")}} // () => this.ham()
            >
            
              <Text style={styles.textInButton}> {this.state.check_Quest.cauD} </Text>
            </TouchableOpacity>

          </View>
          <View style = {styles.boxControl}>
            <View style = {styles.controlView_Hint}>
              <TouchableOpacity
                style={styles.controlButton}
                  // chức năng của button ở đây
                onPress={()=> {this.alertHint("Không có gợi ý")}} // () => this.ham()
              >
            
                <Text> Hint </Text>
              </TouchableOpacity>
            </View>
            <View style = {styles.controlView_Out}>
              <TouchableOpacity
                style={styles.controlButton}
                  // chức năng của button ở đây
                onPress={()=> this.props.navigation.navigate('Test')} // () => this.ham()
              >
            
                <Text> Out </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  boxQuest: {
    height:'55%',
    backgroundColor: 'lightgray',
    marginRight: 15,
    marginLeft:15,
    justifyContent: 'center',
  },
  boxAns: {
    height:'25%',
    marginTop:15,
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',


  },
  button: {
    width:'30%',
    height:'30%',
    marginBottom:15,
    backgroundColor: 'lightgray',
    marginLeft:35,
    marginRight:35,
    alignItems: 'center',
    borderRadius:20,
    justifyContent: 'center',


  },
  textInButton:{
    fontSize:14,
  },
  boxControl:{
    flexDirection:'row',
    justifyContent: 'space-between',

  },
  controlView_Out:{
    marginRight:15,
  },
  controlView_Hint:{
    marginLeft:15,
  },
  controlButton:{
    width:40,
    height:40,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    borderRadius:20,
    justifyContent :'center',

  }
  
  
});
