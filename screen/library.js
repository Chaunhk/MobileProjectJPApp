import * as React from 'react';
import {AsyncStorage,ScrollView,Platfrom,StyleSheet,Text,View,Image,TextInput,TouchableOpacity,RefreshControl,ImageBackground} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Note from './Main';
export default class App extends React.Component {
constructor(props){
	super(props);
	this.state = { //[{note:'note test al',date:''},{note:'note test be',date:''},{note:'note test ga',date:''}]
		noteArray:[{note:'何 (なに)',date:''}],
		noteText:'',
		noteArr:[],
		noteArrayEx:[{note:'What',date:''}],
		noteTextEx:'',
		refreshing: false,
	}
	this.saveNoteArray=this.saveNoteArray.bind(this);
	this.getNoteArray=this.getNoteArray.bind(this);
}	
 _onRefresh = () => {
    this.setState({refreshing: true});
    this.setState({refreshing: false});
} 
	  
render (){
	let notes = this.state.noteArray.map((val,key)=>{
		
			{return <Note key={key} keyval={key} val={val}
			deleteMethod={()=> this.deleteNote(key)}/>
			}
	});
	let notesEx = this.state.noteArrayEx.map((val,key)=>{
		return <Note key={key} keyval={key} val={val}
		deleteMethod={()=> this.deleteNoteEx(key)}/>
	});
var i = 0;
  return(
  <ImageBackground 
          style={{flex:1, height: undefined, width: undefined}}
          source={require('../Asset/Pic_Book_1.jpg')}
          >
  <View style={{flex:1}}>
<Text style={{textAlign:'center',fontSize:20,paddingTop:20,color:'blue'}}>Pull down to refresh</Text>

  <ScrollView style={styles.container}
	refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
	}>
	<View style={{flex:1,flexDirection:'row',
    borderWidth: 0,paddingBottom:20}}>
		<View style={{flex:1,backgroundColor: 'rgba(255, 255, 255, 0.8)',paddingLeft:5,borderRightWidth:1,borderColor:'black',borderWidth:3,paddingBottom:20}}>
			<View style={{height:'18%',borderBottomWidth:2,border:'black'}}>
			<Text style={{fontSize:20}}>Input Romaji/Japanese</Text>
			</View>
				{notes}
			<TextInput 
			onChangeText={(noteText) => this.setState({noteText})}
			value={this.state.noteText}
			placeholder="Type something" 
			style={{fontSize:20}}>
			</TextInput>
			<Text style={{fontSize:280}}> </Text>
		</View>
		<View style={{flex:1,backgroundColor:'rgba(1000, 1000, 0, 0.8)',paddingLeft:5,borderLeftWidth:1,borderColor:'black',borderWidth:3,paddingBottom:20}}>
			<View style={{height:'18%',borderBottomWidth:2,border:'black'}}>
			<Text style={{fontSize:20}}>Input Note</Text>			
			</View>
				{notesEx}
			<TextInput
			onChangeText={(noteTextEx) => this.setState({noteTextEx})}
			value={this.state.noteTextEx}
			placeholder="Type something" 
			style={{fontSize:20}}></TextInput>
		</View>
	</View>
  </ScrollView>
	<TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addBtn}>
		<Text style={styles.addBtnText}>+</Text>
	</TouchableOpacity>
	
	<TouchableOpacity onPress={this.saveNoteArray.bind(this)} style={styles.saveBtn}>
		<Text style={styles.addBtnText}>S</Text>
	</TouchableOpacity>
	
	<TouchableOpacity onPress={this.getNoteArray.bind(this)}   style={styles.loadBtn}>
		<Text style={styles.loadBtnText}>GET</Text>
	</TouchableOpacity>
	
	<TouchableOpacity onPress={this.addNoteEx.bind(this)} style={styles.addBtnEx}>
		<Text style={styles.addBtnText}>+</Text>
	</TouchableOpacity>
	<TouchableOpacity
              style={styles.controlButton}
                  // chức năng của button ở đây
              onPress={()=> {this.props.navigation.navigate('Home')}} // () => this.ham()
            >
            
              <Text style = {{fontSize:10}}> Back </Text>
            </TouchableOpacity>
  </View>
  <Text></Text>
  </ImageBackground>
  );
}
	addNote(){
		if(this.state.noteText){
		var d =new Date();
		this.state.noteArray.push({
			'date': d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear(),
			'note': this.state.noteText
		});
		this.setState({noteArray: this.state.noteArray})
		this.setState({noteText:''});
		this.state.noteArr.push({});
	}
	}
	addNoteEx(){
		if(this.state.noteTextEx){
			var d =new Date();
			this.state.noteArrayEx.push({
				'date': d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear(),
				'note': this.state.noteTextEx
			});
			this.setState({noteArrayEx: this.state.noteArrayEx})
			this.setState({noteTextEx:''});
		}
	}
	deleteNote(key){
		this.state.noteArray.splice(key,1);
		this.setState({noteArray: this.state.noteArray})
	}
	deleteNoteEx(key){
		this.state.noteArrayEx.splice(key,1);
		this.setState({noteArrayEx: this.state.noteArrayEx})
	}
	saveNoteArray = async (noteArray)=>{
		try{
				const noteArrayStrSize=JSON.stringify(this.state.noteArray.length);
				AsyncStorage.setItem("@async:keysize",noteArrayStrSize);			
			}
			catch(e){alert(e);}
		for (var i =0 ; i < this.state.noteArray.length ;){
			try{
				const noteArrayStr=JSON.stringify(this.state.noteArray[i].note);
				AsyncStorage.setItem("@async:key"+i,noteArrayStr);
				i++;
			}
			catch(e){alert(e);}
		}
			try{
				const noteArrayStrSizeEx=JSON.stringify(this.state.noteArrayEx.length);
				AsyncStorage.setItem("@async:keysizeEx",noteArrayStrSizeEx);
			}
			catch(e){alert(e);}
		for (var i =0 ; i < this.state.noteArrayEx.length ;){
			try{
				const noteArrayStrEx=JSON.stringify(this.state.noteArrayEx[i].note);
				AsyncStorage.setItem("@async:keyEx"+i,noteArrayStrEx);
				i++;
			}
			catch(e){alert(e);}
		}
	}
	getNoteArray = async()=>{
		var t = 0;
		var tt= 0;
		try{
				const noteArrayStrSize = await AsyncStorage.getItem("@async:keysize");
				if (noteArrayStrSize !== null){
				t = JSON.parse(noteArrayStrSize);
				}
				const noteArrayStrSizeEx = await AsyncStorage.getItem("@async:keysizeEx");
				if (noteArrayStrSizeEx !== null){
				tt = JSON.parse(noteArrayStrSizeEx);
				}
				alert("Refresh to get your data");
			}
			catch(e){alert(e);}
		
		for (var i =0 ; i <t ; i++){
			try{
				const noteArrayStr = await AsyncStorage.getItem("@async:key"+i);
				if (noteArrayStr !== null&&JSON.parse(noteArrayStr)!== ''&&JSON.parse(noteArrayStr)!=='type sth below'){
				const noteArray = JSON.parse(noteArrayStr);
				this.state.noteArray.push({
					'note': noteArray
				});
				}
				
			}
			catch(e){alert(e);}
		}
		for (var i =0 ; i <tt ; i++){
			try{
				const noteArrayStrEx = await AsyncStorage.getItem("@async:keyEx"+i);
				if (noteArrayStrEx !== null&&JSON.parse(noteArrayStrEx)!== ''&&JSON.parse(noteArrayStrEx)!=='type sth below'){
				const noteArrayEx = JSON.parse(noteArrayStrEx);
				this.state.noteArrayEx.push({
					'note': noteArrayEx
				});
				}
				
			}
			catch(e){alert(e);}
		}			
		
	}	
		saveNoteArrayEx = async (noteArray)=>{
		try{
				const noteArrayStrSizeEx=JSON.stringify(this.state.noteArrayEx.length);
				AsyncStorage.setItem("@async:keysizeEx",noteArrayStrSizeEx);
				alert('saved');
				
			}
			catch(e){alert(e);}
		for (var i =0 ; i < this.state.noteArrayEx.length ;){
			try{
				const noteArrayStrEx=JSON.stringify(this.state.noteArrayEx[i].note);
				AsyncStorage.setItem("@async:keyEx"+i,noteArrayStrEx);
				i++;
			}
			catch(e){alert(e);}
		}
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	marginLeft:10,
	borderColor:'black',
    borderWidth: 2,
	width:'100%',
    paddingLeft:10,
	borderWidth:5,
	borderColor:'blue',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 50
  },
  countText: {
    color: 'green'
  },
  addBtn:{
	  position:'absolute',
	  zIndex:11,
	  left:20,
	  bottom:20,
	  backgroundColor: '#E91E63',
	  width:40,
	  height:40,
	  borderRadius:25,
	  alignItems:'center',
	  justifyContent:'center',
	  elevation:8
  },
  addBtnEx:{
	  position:'absolute',
	  zIndex:11,
	  right:20,
	  bottom:20,
	  backgroundColor: '#E91E63',
	  width:40,
	  height:40,
	  borderRadius:25,
	  alignItems:'center',
	  justifyContent:'center',
	  elevation:8
  },
  saveBtn:{
	  position:'absolute',
	  zIndex:11,
	  left:70,
	  bottom:20,
	  backgroundColor: '#E91E63',
	  width:40,
	  height:40,
	  borderRadius:25,
	  alignItems:'center',
	  justifyContent:'center',
	  elevation:8
  },
  loadBtn:{
	  position:'absolute',
	  zIndex:11,
	  right:70,
	  bottom:20,
	  backgroundColor: '#E91E63',
	  width:40,
	  height:40,
	  borderRadius:25,
	  alignItems:'center',
	  justifyContent:'center',
	  elevation:8
  },
  addBtnText:{
	  color:'#fff',
	 fontSize:44
  },
   loadBtnText:{
	  color:'#fff',
	 fontSize:15
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
	position:'absolute',
	  
	  left:20,
	  top:10,
  }
})


	