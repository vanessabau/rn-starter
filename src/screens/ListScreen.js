import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = ()=>{

    const friends = [
        {name: 'Friend #1', age: '37', key: '01'},
        {name: 'Friend #2', age: '83', key: '02'},
        {name: 'Friend #3', age: '18', key: '03'},
        {name: 'Friend #4', age: '47', key: '04'},
        {name: 'Friend #5', age: '32', key: '05'},
        {name: 'Friend #6', age: '22', key: '06'},
        {name: 'Friend #7', age: '48', key: '07'},
        {name: 'Friend #8', age: '26', key: '08'},
    ]

    const renderItem = ({item})=>(
            <Text>{item.name} - Age {item.age}</Text>   
    )

    return (
        <>
        <FlatList 
        data={friends} 
        renderItem={renderItem}
        keyExtractor={item => item.key}
        />
        <Text>ListScreen</Text>
        </>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;