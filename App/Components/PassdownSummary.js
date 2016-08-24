/**
 * Tool Pass Down Mob APP
 * Component: Search
 */

import React, { Component } from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  ListView,
  TextInput,
  Picker,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  View
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import DatePicker from 'react-native-datepicker';
import ModalPicker from 'react-native-modal-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../Styles/style';

var moment = require('moment');

var moment = require('moment');
var serviceURL = require('../settings').serviceURL;
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class PassdownSummary extends Component {
  
  constructor(props) {

    super(props);
    this.state = {
      dataSource: ds.cloneWithRows([]),
      fromDate: moment().subtract(1, 'months').format('MM/DD/YYYY hh:mm A'),
      toDate: moment().format('MM/DD/YYYY hh:mm A'),
      modalVisible: false,
      showProgress: false,
      filtState: '#666',
    };
  }

  componentDidMount() { 

    var args = {EQUIPMENTID:-1}; 

    this._getEquipmentStatus(args);
  }

  _getEquipmentStatus(args) {

    this.setState({showProgress: true});

    //Get Equipments
    var service = 'equipment.component.EquipmentStatus';
    var method = 'getEquipmentStatus';

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
        this.setState({showProgress: false});
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
      <TouchableHighlight onPress={() => this._onPressViewButton() }>
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

  _onPressViewButton() {
    //Redirect to PassDown View Page
    // Actions.PassdownView(); 
  }

  _onPressAddButton() {
    //Redirect to Add Page
    Actions.AddPassdown();
  }

  _onPressFilterButton() {
    this.setState({filtState: '#00467f'});
    var args = {EQUIPMENTID: 235}; 
    this._getEquipmentStatus(args);
    this._setFilterModalStatus()
  }

  _onPressResetFilterButton() {
    this.setState({filtState: '#666'});
    var args = {EQUIPMENTID: -1}; 
    this._getEquipmentStatus(args);
    this._setFilterModalStatus() 
  }

  _setFilterModalStatus() {
    this.setState({modalVisible: !this.state.modalVisible});
  }

  render() {
  
    return (

      <View style={styles.container}>

        <Modal animationType={"slide"} transparent={true} visible={this.state.modalVisible} >

          <View style={styles.modalContainer}>
            <View style={styles.modalContainerBox}>

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
              <TextInput
                style={styles.input}
                returnKeyType='next' 
                autoCapitalize='none' 
                autoCorrect={false} 
                keyboardType='default' 
                maxLength={75} 
                placeholder='' 
                value={this.state.searchText}
                blurOnSubmit={false}
                onChangeText={(searchText) => this.setState({searchText})} />

              <TouchableOpacity onPress={this._onPressFilterButton.bind(this)} style={styles.button} activeOpacity={0.8}>
                <Text style={styles.buttonText}>Apply Filter</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={this._onPressResetFilterButton.bind(this)} style={styles.button} activeOpacity={0.8}>
                <Text style={styles.buttonText}>Clear Filter</Text>
              </TouchableOpacity>

            </View>
          </View>
        </Modal>

        <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow} 
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />} /> 

        <View style={styles.quickContainer}>         
          <TouchableOpacity onPress={this._setFilterModalStatus.bind(this)} style={styles.quickAdd} activeOpacity={0.8}>
            <Text style={[styles.quickButtonText, {color: this.state.filtState}]}>
              Filter By
            </Text>
          </TouchableOpacity> 

          <TouchableOpacity onPress={this._onPressAddButton.bind(this)} style={styles.quickAdd} activeOpacity={0.8}>
            <Text style={styles.quickButtonText}>
              Add PassDown
            </Text>
          </TouchableOpacity> 
        </View>

      </View>
    );
  }
}