import React, {useState} from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, Alert, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import CardDasboard from './CardDashboard';

var { width } = Dimensions.get("window");
var { height } = Dimensions.get('window')

import axios from 'axios';
import ListDasboard from './ListDasboard';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

    const [dataDashboard, SetDataDashboard] = useState({});

    let url = "https://www.scholarship.siveing-dev.com/api/get-dashbaord?api=helloworld1234";
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const responseJson = await response.json();
            // console.log(responseJson)
            SetDataDashboard(responseJson);
           
        } catch (error) {
          Alert.alert("Cannot connect to Server!");
        }
    };
    fetchData();

    return (
        <View style={styles.listContainer}>
            {/* list array */}
            {/* {dataDashboard.map((value, index) =>{
            return(
                <TouchableOpacity style={{ width: '50%' }} onPress={() => Alert.alert(value.name)}>
                    <View style={{ width: width / 2, backgroundColor: 'gainsboro'}}>
                        <CardDasboard key={index} item={value}/>
                    </View>
                </TouchableOpacity>
            )
            })} */}

            {/* list object */}
            <ListDasboard item={dataDashboard.total_axies} data={'Axies'}/>
            <ListDasboard item={dataDashboard.total_joined} data={'Players Joined'}/>
            <ListDasboard item={dataDashboard.total_manager} data={'Managers'}/>
            <ListDasboard item={dataDashboard.total_scholar} data={'Scholars'}/>
            <ListDasboard item={dataDashboard.total_game} data={'In Game'} value={'game'}/>
            <ListDasboard item={dataDashboard.total_ronin} data={'In Ronin'} value={'ronin'}/>
            <ListDasboard item={dataDashboard.total_slp} data={'Total'} value={'total'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listContainer: {
        height: height,
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        backgroundColor: "gainsboro",
    },
});
