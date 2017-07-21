import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.main}</Text>
        <Text>{this.props.description}</Text>
        <Text>{this.props.temp} C</Text>
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
