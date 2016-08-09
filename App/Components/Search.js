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
import ModalPicker from 'react-native-modal-picker';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

var moment = require('moment');

import styles from '../Styles/style';

var serviceURL = require('../settings').serviceURL;

export default class SetCdp extends Component {
  
  constructor(props) {

    super(props);
    this.state = {
      equipmentType: '',
      equipment: '',
      fromDate: moment().subtract(1, 'months').format('MM/DD/YYYY hh:mm A'),
      toDate: moment().format('MM/DD/YYYY hh:mm A'),
      searchText: '',
      equipTypeList: [],
      equipmentList: []
    };
  }

  componentDidMount() {  

    //Get Equipments
    // var service = 'targetprecursor.component.TargetManagement';
    // var method = 'getEquipments';
    // var args = {};

    // var rpc = {
    //     action: 'Relay'
    //     , method: "binaryExecute"
    //     , data: [service, method, args]
    //     , type: 'rpc'
    //     , tid: 2
    // };

    // fetch(serviceURL, {
    //   method: "POST", 
    //   contentType: 'application/json',
    //   body: JSON.stringify(rpc)
    // })
    // .then((response) => response.json())
    // .then((responseData) => {
      
    //   console.log(responseData);
    
    // })
    // .done();
  }

  _onPressButton() {

    console.log( this.state.equipmentType + ' ' + this.state.equipment + ' ' + this.state.fromDate + ' ' + this.state.toDate + ' ' + this.state.searchText );
  }

  _onPressAddButton() {
    
    //Redirect to Add Pass Down Page
    Actions.AddPassdown(); 
  }

  render() {
  
    return (
      <View style={styles.containerBox}>

        <Text style={styles.label}>Equipment Type<Text style={styles.mandatory}>*</Text></Text>         
        <TextInput style={styles.input} editable={false} value='' />

        <Text style={styles.label}>Equipment<Text style={styles.mandatory}>*</Text></Text>         
        <TextInput style={styles.input} editable={false} value='' />

        <Text style={styles.label}>From Date<Text style={styles.mandatory}>*</Text></Text>
        <DatePicker
          style={styles.input}
          date={this.state.fromDate}
          mode="datetime"
          placeholder="placeholder"
          format="MM/DD/YYYY hh:mm A"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false}
          onDateChange={(date) => {this.setState({fromDate: date})}} />

        <Text style={styles.label}>To Date<Text style={styles.mandatory}>*</Text></Text>
        <DatePicker
          style={styles.input}
          date={this.state.toDate}
          mode="datetime"
          placeholder="placeholder"
          format="MM/DD/YYYY hh:mm A"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false}
          onDateChange={(date) => {this.setState({toDate: date})}} />

        <Text style={styles.label}>Search Text</Text>         
        <TextInput style={styles.input} value='' />

        <TouchableOpacity onPress={this._onPressButton.bind(this)} style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Get PassDown</Text>
        </TouchableOpacity> 

        <TouchableOpacity onPress={this._onPressAddButton.bind(this)} style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Add PassDown</Text>
        </TouchableOpacity> 
      </View>
    );
  }
}