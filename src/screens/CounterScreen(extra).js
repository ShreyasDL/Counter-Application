// Counter App built using Reducer 

import React, { useReducer } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

const reducer = (state, action) => {
	// state === { count : number}
	// action === { type : 'Increase' || 'Decrease' , payload : 1}
	switch(action.type){
		case 'Increase'  :
			return { ...state, count : state.count + action.payload}
		case 'Decrease' :
			return { ...state, count : state.count - action.payload}
		default : 
			return state
	}
}

const CounterScreen = () => {
	const [state, dispatch] = useReducer(reducer,{ count : 0})
	const { count } = state
	return (
				<View>
					<Text>Current Score : { count }</Text>
					<Button 
						title = 'Increase'
						onPress = { () => {
							dispatch({ type : 'Increase' , payload : 1 })
						}}
					/>

					<Button 
						title = 'Decrease'
						onPress = { () =>{
							dispatch({ type : 'Decrease' , payload : 1})
						}} 
					/>

				</View>
		)

}

const styles = StyleSheet.create({})

export default CounterScreen