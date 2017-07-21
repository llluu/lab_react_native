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
    container: { height: 130 },
    bigText: {
        flex: 2,
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        color: "#FFFFFF"
    },
    mainText: { flex: 1, fontSize: 16, textAlign: "center", color: "#FFFFFF" }
})
