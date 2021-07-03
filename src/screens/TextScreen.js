import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

//Getting access to data inside textInput
const TextScreen =()=>{
    const [name, setName] = useState('');
return <View>
    <TextInput 
        style={styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue)=>{setName(newValue)}}
    />
    <Text>My name is {name}</Text>
    {name.length <6 ? <Text>Please use at least 6 characters</Text> : null}
</View>
}

const styles=StyleSheet.create({
    input:{
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
    }
});
export default TextScreen;