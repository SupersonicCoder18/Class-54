import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class SteelBlueButton extends Component {
  displayAlert = () => {
    alert("I am the Supersonic Coder");
  }
  render(){
    return(
      <Button title = "WHO AM I????" color={this.props.color} onPress={this.displayAlert}/>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 100}}>
        <SteelBlueButton color = "steelblue" />
        <Text>I am the Supersonic Coder, and I rock!!!!</Text>
      </View>
    );
  }
}
