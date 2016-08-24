/**
 * Tool Pass Down Mob APP
 * Component: AddPassdown
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var serviceURL = require('../settings').serviceURL;

import styles from '../Styles/style';

export default class AddPassdown extends Component {
  
  constructor(props) {
    super(props);
    this.state = {

    };

    //Get Equipments
    var service = 'mobilePassDown.component.PassDown';
    var method = 'getEquipmentList';
    var args = {};

    var rpc = {
        action: 'Relay'
        , method: "binaryExecute"
        , data: [service, method, args]
        , type: 'rpc'
        , tid: 2
    };

    fetch(serviceURL, {
      method: "POST", 
      contentType: 'application/json',
      body: JSON.stringify(rpc)
    })
    .then((response) => response.json())
    .then((responseData) => {


        console.log(responseData);
    
    })
    .done();  
  }

  render() {
  
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome!
        </Text>
        <Text style={styles.instructions}>
          Pass Down VIEW!
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}