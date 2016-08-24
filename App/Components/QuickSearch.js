/**
 * Tool Pass Down Mob APP
 * Component: QuickSearch
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  View
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import ModalPicker from 'react-native-modal-picker';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../Styles/style';

export default class QuickSearch extends Component {
  
  constructor(props) {

    super(props);
    this.state = {
      modalVisible: false
    };
  }

  _onPressSearchButton() {
    //Redirect to Search Page
    Actions.Search();
  }

  _onPressAddButton() {
    //Redirect to Add Page
    Actions.AddPassdown();
  }

  /*
        <TextInput
        style={styles.quickinput}
        placeholder="Search"
        onChangeText={(text) => console.log('searching for ', text)} />
  */

  render() {
  
    return (
      <View style={styles.quickContainer}>
        
        <TouchableOpacity onPress={this._showFilterModal.bind(this)} style={styles.quickAdd} activeOpacity={0.8}>
          <Text style={styles.buttonText}>
            Search 
          </Text>
        </TouchableOpacity> 

        <TouchableOpacity onPress={this._onPressAddButton.bind(this)} style={styles.quickAdd} activeOpacity={0.8}>
          <Text style={styles.buttonText}>
            Add
          </Text>
        </TouchableOpacity> 
      </View>
    );
  }
}