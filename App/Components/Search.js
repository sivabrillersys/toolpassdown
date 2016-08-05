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

    AsyncStorage.setItem('CDP', this.state.cdp);

    //Backend Call
    // relayURL = relayURL + '?DoLogin';
    // var params = {id: 1, UserName: this.state.uname, Password: this.state.password, CDPName: this.state.cdp};

    // console.log(params);

    // fetch(relayURL, {
    //   method: "POST", 
    //   contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    //   body: params
    // })
    // .then((response) => response.json())
    // .then((responseData) => {

    //     console.log(responseData);

        // if (responseData[0].result.ISAUTHENTICATED) //Success
        // {
        //   AsyncStorage.setItem('CDP', this.state.cdp));

        
        // }
        // else //Failed
        // {
        //   this.setState({message: responseData[0].result.ERRORMESSAGE});
        // }
    // })
    // .done();

    //Redirect to Search Page on success
    Actions.Search(); 
  }

  render() {
  
    return (
      <View style={styles.containerBox}>
        
        <Text style={styles.error}>{this.state.message}</Text>

        <ModalPicker
        data={this.state.cdplist}
        initValue="Select CDP"
        onChange={(option)=>{this.setState({cdp:option.CDPName})}}>

          <TextInput
          style={styles.input}
          editable={false}
          placeholder="Select CDP"
          value={this.state.cdp} />

        </ModalPicker>

        <TouchableOpacity onPress={this._onPressButton.bind(this)} style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity> 

      </View>
    );
  }
}