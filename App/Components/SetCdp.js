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
      showProgress: false
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
    AsyncStorage.setItem('CDP', this.state.cdp);

    //Backend Call
    // relayURL = relayURL + '?DoLogin';
    // var params = {id: 1, UserName: this.state.uname, Password: this.state.password, CDPName: this.state.cdp};

    // console.log(params);

    // fetch(relayURL, {
    //   method: "POST", 
    //   contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    //   body: JSON.stringify(params)
    // })
    // .then((textStatus) => textStatus.json())
    // .then((textStatus) => {

    //     console.log(textStatus);

    //     //Redirect to Search Page on success
    //     Actions.Search(); 
    // })
    // .done();

    //Redirect to Search Page on success
    Actions.Search(); 
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