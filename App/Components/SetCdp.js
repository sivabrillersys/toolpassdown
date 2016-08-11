/**
 * Tool Pass Down Mob APP
 * Component: SetCdp
 */

import React, { Component } from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Picker,
  TouchableOpacity,
  View
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import ModalPicker from 'react-native-modal-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../Styles/style';

var relayURL = require('../settings').relayURL;

export default class SetCdp extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cdp: '',
      uname: '',
      password: '',
      cdplist: [],
      showProgress: false,
      message: ''
    };
  }

  componentDidMount() {  

    AsyncStorage.getItem('CDPLIST', (err, cdplist) => {
      this.setState({cdplist:JSON.parse(cdplist)});
    });

    AsyncStorage.getItem('UNAME', (err, uname) => {
      this.setState({uname:uname});
    });

    AsyncStorage.getItem('PASS', (err, password) => {
      this.setState({password:password});
    });

  }

  _onPressButton() {

    this.setState({showProgress: true});

    if (this.state.cdp == '')
    {
      this.setState({message: 'You must select CDP to continue!'});
      this.setState({showProgress: false});
    } 
    else
    {
      AsyncStorage.setItem('CDP', this.state.cdp);

      //Backend Call
      relayURL = relayURL + '?method=DoLogin&id=1&UserName=' + this.state.uname + '&Password=' + this.state.password + '&CDPName=' + this.state.cdp;
      //var params = {id: 1, UserName: this.state.uname, Password: this.state.password, CDPName: this.state.cdp};

      fetch(relayURL, {
        method: "GET", 
        Accept: 'application/json',
        contentType: 'application/x-www-form-urlencoded',
        body: ''
      })
      .then((response) => { 

        // console.log(response);
        // response.json() 

        if (response.ok) {

          this.setState({showProgress: false});

          //Redirect to PassDwon Summary Page on success
          Actions.PassdownSummary();

          //Redirect to Search Page on success
          // Actions.Search();
        }

      })
      // .then((responseData) => {

      // })
      .catch((error) => {
        console.error(error);
      })
      .done();
    }
  }

  render() {
  
    return (
      <View style={styles.containerBox}>
        
        <View style={styles.header}>
          <Image source={require('../img/logo.png')} style={styles.logo} resizeMode='contain' />
        </View>

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
          <Icon name='angle-down' size={27} color='#333' style={styles.inputIcon}/>

        </ModalPicker>


        <TouchableOpacity onPress={this._onPressButton.bind(this)} style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity> 

        <ActivityIndicator
          animating={this.state.showProgress}
          style={[styles.centering, {height: 80}]}
          size="large"
          color='#00467f' />

      </View>
    );
  }
}