import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{width:50, height: 50, backgroundColor: 'green'}}></View>
        <View style={{width:50, height: 50, backgroundColor: 'red'}}></View>
        <View style={{width:50, height: 50, backgroundColor: 'blue'}}></View>
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
