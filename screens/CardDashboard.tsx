import React from "react";
import { View, StyleSheet, Dimensions, Text } from 'react-native';

var { width } = Dimensions.get("window");

const CardDasboard = (props) => {
    const { item } = props;
    return(
        <View style={style.container}>
            <View style={style.card}>
                <Text>{item.name}</Text>
            </View>
        </View>
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
        height: width / 2 - 20 - 90,
        backgroundColor: 'transparent',
        width: width / 2 - 20 - 10
    },
})

export default CardDasboard;