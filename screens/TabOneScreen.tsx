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
            <ListDasboard item={dataDashboard.total_axies} index={'total_axies'}/>
            <ListDasboard item={dataDashboard.total_joined} index={'total_joined'}/>
            <ListDasboard item={dataDashboard.total_manager} index={'total_manager'}/>
            <ListDasboard item={dataDashboard.total_ronin} index={'total_ronin'}/>
            <ListDasboard item={dataDashboard.total_scholar} index={'total_scholar'}/>
            <ListDasboard item={dataDashboard.total_slp} index={'total_slp'}/>
                
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
