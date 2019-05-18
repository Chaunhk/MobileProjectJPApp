import * as React from 'react';
import {ScrollView,Platfrom,StyleSheet,Text,View,Image,TextInput,TouchableOpacity} from 'react-native';

export default class Note extends React.Component {

render (){
  return(
		<View key={this.props.keyval} style={styles.note}>
				
			
			<Text style={styles.nodeText}>{this.props.val.note}</Text>
			
			<TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
				<Text style={styles.nodeDel}>x</Text>
			</TouchableOpacity>	
		</View>
  
  );
}
	
}

const styles = StyleSheet.create({
	note:{
		position:'relative',
		padding:5,
		paddingRight:5,
		
		borderBottomWidth:2,
		borderColor: 'grey',
	},
	nodeText:{
		paddingLeft:2,
		
		borderColor: 'black',
		fontSize:15,
	},
	noteDelete: {
		position:'absolute',
		justifyContent:'center',
		alignItems: 'center',
		backgroundColor: 'lightgrey',
		padding: 3,
		paddingTop:5,
		backgroundColor:'#2980b9',
		top:4,
		
		bottom:4,
		right:5,
	},
	nodeDel:{
		color:'white',
		fontSize:30,
		paddingBottom:10,
	},

})