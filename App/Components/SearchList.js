/**
 * Tool Pass Down Mob APP
 * Component: SearchList
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

export default class SearchList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
  
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome!
        </Text>
        <Text style={styles.instructions}>
          Search Resluts!
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}