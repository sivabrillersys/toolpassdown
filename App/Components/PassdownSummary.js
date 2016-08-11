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
    var service = 'targetprecursor.component.TargetManagement';
    var method = 'getEquipments';
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
      
      //console.log(responseData);
    
    })
    .done();
  }

  _onPressButton() {

    
  }

  _onPressAddButton() {
    
    //Redirect to Add Pass Down Page
    Actions.AddPassdown(); 
  }

  render() {
  
    return (
      <View style={styles.containerBox}>

        <Text>Summary Goes Here....!</Text>         

      </View>
    );
  }
}