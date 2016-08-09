/**
 * Tool Pass Down Mob APP
 * Component: AddPassdown
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
  View,
  ScrollView
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
      toDay: moment().format('MM/DD/YYYY hh:mm A'),
      searchText: '',
      equipTypeList: [],
      equipmentList: []
    };
  }

  componentDidMount() {  

  }

  _onPressButton() {

  }

  _onPressAddButton() {
    
  }

  render() {
  
    return (
      <ScrollView 
        showsVerticalScrollIndicator={true}
        automaticallyAdjustContentInsets={false}
        onScroll={() => { console.log('onScroll!'); }}
        scrollEventThrottle={200}
        style={styles.scrollView}>

        <View style={styles.containerBox}>
        
          <Text style={styles.label}>Equipment Type<Text style={styles.mandatory}>*</Text></Text>         
          <TextInput style={styles.input} editable={false} value='' />

          <Text style={styles.label}>Equipment<Text style={styles.mandatory}>*</Text></Text>         
          <TextInput style={styles.input} editable={false} value='' />

          <Text style={styles.label}>Date<Text style={styles.mandatory}>*</Text></Text>
          <DatePicker
            style={styles.input}
            date={this.state.toDay}
            mode="datetime"
            placeholder="placeholder"
            format="MM/DD/YYYY hh:mm A"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            onDateChange={(date) => {this.setState({toDay: date})}} />

          <Text style={styles.label}>State<Text style={styles.mandatory}>*</Text></Text>         
          <TextInput style={styles.input} editable={false} value='' />

          <Text style={styles.label}>Substate<Text style={styles.mandatory}>*</Text></Text>         
          <TextInput style={styles.input} editable={false} value='' />
          
          <Text style={styles.label}>Substrate Type</Text>         
          <TextInput style={styles.input} editable={false} value='' />

          <Text style={styles.label}>Issue<Text style={styles.mandatory}>*</Text></Text>         
          <TextInput style={styles.input} editable={false} value='' />

          <Text style={styles.label}>Sub-Issue<Text style={styles.mandatory}>*</Text></Text>         
          <TextInput style={styles.input} editable={false} value='' />

          <Text style={styles.label}>Passdown<Text style={styles.mandatory}>*</Text></Text>         
          <TextInput style={styles.input} multiline={true} value='' />

          <Text style={styles.label}>Prior Activites</Text>         
          <TextInput style={styles.input} multiline={true} value='' />

          <Text style={styles.label}>Actions Taken</Text>         
          <TextInput style={styles.input} multiline={true} value='' />

          <Text style={styles.label}>Error Messages</Text>         
          <TextInput style={styles.input} multiline={true} value='' />

          <TouchableOpacity onPress={this._onPressButton.bind(this)} style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Get PassDown</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}