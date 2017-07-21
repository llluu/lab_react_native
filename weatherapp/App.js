import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
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
        <Image source={require('./weather-bg.jpg')}
          resizeMode='cover'
          style={styles.backdrop}>
        <View style={styles.overlay}>  
          <Text>Chanthaburi zip code is {this.state.zip}</Text>
          {/* <Forecast main={this.state.forecast.main}/> */}
          <Forecast {...this.state.forecast}/>
        </View>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column'
  },
  overlay: {
    height: 200,
    paddingTop: 30,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  mainText: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
  }

});