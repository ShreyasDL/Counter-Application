import React , { useState } from 'react'
import { Text,View,StyleSheet,Button } from 'react-native'

const HomeScreen = () => {
	const [counter,setCounter] = useState(0)
	return (
		<View style = {styles.viewStyle} >

			<Text style = {styles.textStyle}>Current Score : {counter}</Text>
			<Text></Text>
			<Button 
				title = 'Increase' 
				onPress = { () => { 
									setCounter(counter+1)
								  }
				}
			/>
			<Text></Text>
			<Button 
				title = 'Decrease'
				onPress = { () => {
									setCounter(counter-1)
								  }

				}
			/>
			

		</View>

		)
}

const styles = StyleSheet.create({
	textStyle : {
		fontSize : 20,
		textAlign : 'center'
	},
	buttonStyle :{
		textAlign :'center',
		textAlignVertical : 'center'
	},
	viewStyle : {
		alignItems :'center',
		justifyContent :'center',
		flex :1
	}

})

export default HomeScreen