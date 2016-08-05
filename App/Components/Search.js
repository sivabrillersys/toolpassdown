/**
 * Tool Pass Down Mob APP
 * Component: Search
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  TextInput,
  Picker,
  TouchableOpacity,
  View
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import ModalPicker from 'react-native-modal-picker'

import styles from '../Styles/style';

var relayURL = require('../settings').relayURL;

export default class SetCdp extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cdp: '',
      uname: '',
      password: '',
      cdplist: []
    };
  }

  componentDidMount() {  

    AsyncStorage.getItem('CDPLIST', (err, cdplist) => {
      this.setState({cdplist:JSON.parse(cdplist)});
      //console.log(this.state.cdplist);
    });

    AsyncStorage.getItem('UNAME', (err, uname) => {
      this.setState({uname:uname});
    });

    AsyncStorage.getItem('PASS', (err, password) => {
      this.setState({password:password});
    });

  }

  _onPressButton() {

  }

  render() {
  
    return (
      <View style={styles.containerBox}>
        
        <Text style={styles.label}>Equipment Type<Text style={styles.mandatory}>*</Text></Text>         
        <TextInput style={styles.input} editable={false} value='' />

        <Text style={styles.label}>Equipment<Text style={styles.mandatory}>*</Text></Text>         
        <TextInput style={styles.input} editable={false} value='' />

        <Text style={styles.label}>From Date<Text style={styles.mandatory}>*</Text></Text>         
        <TextInput style={styles.input} editable={false} value='07/05/2016 07:22 PM' />

        <Text style={styles.label}>To Date<Text style={styles.mandatory}>*</Text></Text>         
        <TextInput style={styles.input} editable={false} value='08/05/2016 07:22 PM' />

        <Text style={styles.label}>Search Text</Text>         
        <TextInput style={styles.input} value='' />

        <TouchableOpacity onPress={this._onPressButton.bind(this)} style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Get PassDown</Text>
        </TouchableOpacity> 

        <TouchableOpacity onPress={this._onPressButton.bind(this)} style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Add PassDown</Text>
        </TouchableOpacity> 
      </View>
    );
  }
}