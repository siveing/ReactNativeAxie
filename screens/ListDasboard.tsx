import React from "react";
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';

var { width } = Dimensions.get("window");

const ListDasboard = (props) => {
    const { item } = props;
    return(
        props.key === 'total_axies'
        ?
        <TouchableOpacity style={{ width: '50%' }}>
            <View style={{ width: width / 2, backgroundColor: 'gainsboro'}}>
                <View style={style.container}>
                    <View style={style.card}>
                        <Text>{item.total_axies}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
        :
        props.key === 'total_game'
        ?
            <TouchableOpacity style={{ width: '50%' }}>
                <View style={{ width: width / 2, backgroundColor: 'gainsboro'}}>
                    <View style={style.container}>
                        <View style={style.card}>
                            <Text>{item.total_game}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        :
        <View></View>
    )
}

const style = StyleSheet.create({
    container: {
        width: width / 2 - 20,
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white'
    },
    card: {
        padding: 10,
        height: width / 2 - 20 - 100,
        backgroundColor: 'transparent',
        width: width / 2 - 20 - 10
    },
})

export default ListDasboard;