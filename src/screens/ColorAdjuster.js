import React, {useReducer} from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT= 25;

// First argument is the state object, second is the object that describes how we are supposed to change our state, i.e. the update we want to make
// state === {red: 0, green: 0, blue: 0}
// action === {colorToChange: 'change_red' || 'change_green' || 'change_blue', payload: 25 || -25}

const reducer = (state, action) => {
    switch (action.type){
        case 'change_red':
           return  state.red + action.payload>255 || state.red + action.payload <0 ? state: {...state, red: state.red + action.payload};
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload <0 ? state : {...state, green: state.green + action.payload};
        case 'change_blue':  
            return state.blue + action.payload >255 || state.blue + action.payload < 0 ? state : {...state, blue: state.blue + action.payload};
        default:
            return state;
    }
};

const ColorAdjuster = () => {

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const{red, green, blue} = state;

    return <View>
        <ColorCounter 
            onIncrease = {()=>dispatch({type: 'change_red', payload: COLOR_INCREMENT})} 
            onDecrease={()=>dispatch({type: 'change_red', payload: -1*COLOR_INCREMENT})} 
            color="Red"
        />
        <ColorCounter 
           onIncrease = {()=>dispatch({type: 'change_blue', payload: COLOR_INCREMENT})} 
            onDecrease={()=>dispatch({type: 'change_blue', payload: -1*COLOR_INCREMENT})} 
            color="blue"/>
        <ColorCounter 
           onIncrease = {()=>dispatch({type: 'change_green', payload: COLOR_INCREMENT})} 
            onDecrease={()=>dispatch({type: 'change_green', payload: -1*COLOR_INCREMENT})} 
            color="green"/>
        <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`, marginLeft: 110}} />
    </View>
};

const styles = StyleSheet.create({
   
});
export default ColorAdjuster;