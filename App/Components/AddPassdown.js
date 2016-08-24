/**
 * Tool Pass Down Mob APP
 * Component: AddPassdown
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Image,
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

var Platform = require('react-native').Platform;
var ImagePicker = require('react-native-image-picker');

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
      passState: '',
      subState: '',
      substrateType: '',
      issue: '',
      subIssue: '',
      passDown: '',
      priorActivity: '',
      actionsTaken: '',
      errorMessages: '',
      attachments: [],
      avatarSource: null,

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

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      //console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        var source;

        // You can display the image using either:
        source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

        // Or:
        // if (Platform.OS === 'android') {
        //   source = {uri: response.uri, isStatic: true};
        // } else {
        //   source = {uri: response.uri.replace('file://', ''), isStatic: true};
        // }

        var newArray = this.state.attachments.slice();    
        newArray.push(source);   
        this.setState({attachments:newArray})
        //console.log(this.state.attachments);
        
        //this.setState({ avatarSource: source }); 
      }
    });
  }

  render() {
  
    return (
      <View style={styles.containerBody}>
        <ScrollView 
          showsVerticalScrollIndicator={true}
          automaticallyAdjustContentInsets={false}
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

            <Text style={styles.label}>CDP<Text style={styles.mandatory}>*</Text></Text>         
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

            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
              <View style={styles.selectPhoto}>
                <Text>Attach a Photo</Text>
              </View>
            </TouchableOpacity>

            <View>

            <TouchableOpacity onPress={this._onPressAddButton.bind(this)} style={[styles.button, {marginBottom: 15}]} activeOpacity={0.8}>
              <Text style={styles.buttonText}>Add PassDown</Text>
            </TouchableOpacity> 

          </View>
        </ScrollView>
      </View>
    );
  }
}