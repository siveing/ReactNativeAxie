import React from "react";
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';

var { width } = Dimensions.get("window");

const ListDasboard = (props) => {
    const { item, data } = props;
    return(
        // <TouchableOpacity style={{ width: '50%' }}>
            <View style={{ width: width / 2, backgroundColor: 'gainsboro'}}>
                <View style={[style.container, style.bgDash]}>
                    <View style={[style.card, style.bgDash]}>
                        <Text style={style.fontTitle}>{data}</Text>
                        <Text style={style.fontItem}>{item}</Text>
                    </View>
                </View>
            </View>
        // </TouchableOpacity>
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
    bgDash:{
        backgroundColor: '#7DA0FA',
    }, 
    fontItem:{
        fontSize: 25,
        fontWeight: 'bold', 
        color: 'white'
    },
    fontTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 7
    }
})

export default ListDasboard;