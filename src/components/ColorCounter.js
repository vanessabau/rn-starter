import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {

    return <View>
    
        <Text style={styles.textPlace}>{color}</Text>
        <Button onPress={()=>onIncrease()} title={`Increase ${color}`}/>
        <Button onPress={()=>onDecrease()} title={`Decrease ${color}`} />
       
    </View>
};

const styles=StyleSheet.create({
     textPlace: {
        marginLeft: '45%',
    },
});

export default ColorCounter;