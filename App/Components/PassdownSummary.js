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
  ListView,
  TouchableOpacity,
  TouchableHighlight,
  View
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import QuickSearch from './QuickSearch';
import styles from '../Styles/style';

var moment = require('moment');
var serviceURL = require('../settings').serviceURL;
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class PassdownSummary extends Component {
  
  constructor(props) {

    super(props);
    this.state = {
        dataSource: ds.cloneWithRows([])
    };
  }

  componentDidMount() {  

    //Get Equipments
    var service = 'equipment.component.EquipmentStatus';
    var method = 'getEquipmentStatus';
    var args = {EQUIPMENTID:-1};

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

      if (responseData[0].result.ISOK == 1) //Data is OK
      {
        //console.log(responseData[0].result.DATA);
        this.setState({ dataSource: this.state.dataSource.cloneWithRows(responseData[0].result.DATA) });
      }
    
    })
    .done();
  }

  // _renderRow(rowData) {
  _renderRow = (rowData, sectionId, rowId) => {

    if (rowId % 2) { var highlight = styles.rowEven } else { var highlight = styles.rowOdd }

    var stateIcon;
    var statColor;

    switch (rowData.PassdownState) {

      case 'Up':
        statColor = '#00B400';
        stateIcon = 'arrow-circle-up';
      break;
      case 'Scheduled Down':
        statColor = '#0048FF';
        stateIcon = 'arrow-circle-down';
      break;
      case 'Unscheduled Down':
        statColor = '#FF2400';
        stateIcon = 'arrow-circle-down';
      break;
      case 'Scheduled CDP Activity':
        statColor = '#9900CC';
        stateIcon = 'history';
      break;
      case 'Tool Build':
        statColor = '#006666';
        stateIcon = 'cogs';
      break;
    }

    var LastTimeStamp = moment(rowData.LastTimestamp).format('YYYY/MM/DD HH:mm:ss');

    return (
      <TouchableHighlight onPress={() => this._onPressButton() }>
        <View style={[styles.row, highlight]}>

          <View style={styles.passIconRow}>
            <Icon name={stateIcon} size={20} color={statColor} />
          </View>

          <View style={styles.passDataRow}>
            <View style={styles.passRow}>
              <Text style={styles.equipName}>{rowData.ChamberName}</Text>
              <Text style={styles.passDate}>{LastTimeStamp}</Text>
            </View>
            <View style={styles.passRow}>
              <Text style={[styles.passStatus, {color: statColor}]}>{rowData.PassdownState}</Text>
            </View>
            <View style={styles.passRow}>
              <Text style={styles.equipType}>{rowData.Platform}</Text>
            </View>
            <View style={styles.passRow}>
              <Text style={styles.equipType}>{rowData.SubstrateID}</Text>
            </View>
            <View>
              <Text style={styles.passDesc} ellipsizeMode="middle" numberOfLines={2}>{rowData.ErrorDetail}</Text>
            </View>
          </View>
          
        </View>
      </TouchableHighlight>
    );
  }

  _onPressButton() {
   
    //Redirect to PassDown View Page
    // Actions.PassdownView(); 
  }

  _onPressAddButton() { 

    //Redirect to Add PassDown Page
    Actions.AddPassdown(); 
  }

  render() {
  
    return (
      <View style={styles.container}>

        <QuickSearch />

        <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow} 
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />} />        

      </View>
    );
  }
}