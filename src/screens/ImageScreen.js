import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail.js';

const ImageScreen = ()=>{
    return <View>
        <Text>Image Screen</Text>
        <ImageDetail title="Forrest" imageSource={require('../../assets/forest.jpg')} score='1'/>
        <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} score='2'/>
        <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} score='3'/>
        
        
        </View>
};

const styles = StyleSheet.create({

})

export default ImageScreen;