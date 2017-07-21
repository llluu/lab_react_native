import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Forecast from './Forecast.js';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      zip: 22000,
      forecast: {
        main: '-',
        description: '-',
        temp: 0
      }
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Chanthaburi zip code is {this.state.zip}</Text>
        {/* <Forecast main={this.state.forecast.main}/> */}
        <Forecast {...this.state.forecast}/>


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
