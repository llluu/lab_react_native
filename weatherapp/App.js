import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex:1, width:50, height: 50, backgroundColor: 'green'}}></View>
        <View style={{flex:2, width:50, height: 50, backgroundColor: 'red'}}></View>
        <View style={{flex:1, width:50, height: 50, backgroundColor: 'blue'}}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
