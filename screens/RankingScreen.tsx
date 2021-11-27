import React, {useState} from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, Alert, StatusBar, FlatList, SafeAreaView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import CardDasboard from './CardDashboard';

var { width } = Dimensions.get("window");
var { height } = Dimensions.get('window')

import axios from 'axios';

const Item = ({ item, onPress, backgroundColor, textColor, index }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{index+1}. {item.name}</Text>
    </TouchableOpacity>
);

export default function HomePageScreen({ navigation }: RootTabScreenProps<'Ranking'>) {

    const [dataDashboard, SetDataDashboard] = useState([]);

    const [selectedId, setSelectedId] = useState(null);

    //same as maping
    const renderItem = ({ item, index }) => {
      const backgroundColor = item.id === selectedId ? "white" : "white";
      const color = 'black';
      return (
        <Item
          item={item}
          onPress={() => navigation.navigate('Modal', { data: item })}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
          index = {index}
        />
      );
    };

    let url = "https://www.scholarship.siveing-dev.com/api/get-dashbaord?api=helloworld1234";
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const responseJson = await response.json();
            SetDataDashboard(responseJson.ranking);
           
        } catch (error) {
          Alert.alert("Cannot connect to Server!");
        }
    };
    fetchData();

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={dataDashboard}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginTop: 9,
    },
    title: {
        fontSize: 18,
    },
});
