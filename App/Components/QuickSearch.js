/**
 * Tool Pass Down Mob APP
 * Component: QuickSearch
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../Styles/style';

export default class QuickSearch extends Component {
  
  constructor(props) {

    super(props);
    this.state = {
    };
  }

  render() {
  
    return (
      <View style={styles.quickContainer}>
        <TextInput
        style={styles.quickinput}
        placeholder="Search"
        onChangeText={(text) => console.log('searching for ', text)} />
      </View>
    );
  }
}