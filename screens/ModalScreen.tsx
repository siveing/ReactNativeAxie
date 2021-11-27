import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ModalScreen(props) {
  const result = props.route.params.data;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result.name}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.row}>
        <Text style={styles.text}>
          Today : {result.totalSlp} <TabBarIcon style={styles.icon} name="tint" color={'pink'}/>  
        </Text>
        <Text style={styles.text}>
          Yesterday : {result.yesterdaySlp} <TabBarIcon style={styles.icon} name="tint" color={'pink'}/>  
        </Text>
        <Text style={styles.text}>
          MMR : {result.mmr} 
        </Text>
        <Text style={styles.text}>
          Average : {result.average}  
        </Text>
        <Text style={styles.text}>
          Ronin : {result.roninSlp} <TabBarIcon style={styles.icon} name="tint" color={'pink'}/>  
        </Text>
        <Text style={styles.text}>
          Game : {result.gameSlp} <TabBarIcon style={styles.icon} name="tint" color={'pink'}/>  
        </Text>
        <Text style={styles.text}>
          Total : {result.totalSlp} <TabBarIcon style={styles.icon} name="tint" color={'pink'}/>  
        </Text>
      </View>
      
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    paddingTop: 50
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '90%',
  },
  text:{
    fontSize: 25,
    marginVertical: 10,
    marginLeft: 20
  },
  row:{
    width: '100%'
  },
  icon:{
    fontSize: 25,
  }
});

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
