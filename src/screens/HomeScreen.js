import React from "react";
import { Text, StyleSheet, View, Button} from "react-native";

// Destucture from props.navigation.navigate -> navigation.navigate
const HomeScreen = ({navigation}) => {

  return (
  <View>
  <Text style={styles.text}>Hi There</Text>
  <Button title="Go to Components Demo" onPress={()=>navigation.navigate('Components')}/>
   <Button title="Go to List Demo" onPress={()=>navigation.navigate('List')}/>
   <Button title="Go to Image Screen Demo" onPress={()=>navigation.navigate('Image')}/>
   <Button title="Go to Counter Screen Demo" onPress={()=>navigation.navigate('Counter')}/>
   <Button title="Go to Color Screen Demo" onPress={()=>navigation.navigate('Color')}/>
   <Button title="Go to Color Adjuster Demo" onPress={()=>navigation.navigate('Adjust')}/>
    <Button title="Go to Text Demo" onPress={()=>navigation.navigate('Text')}/>
      <Button title="Go to BoxScreen Demo" onPress={()=>navigation.navigate('Box')}/>
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
