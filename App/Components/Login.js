/**
 * Tool Pass Down Mob APP
 * Component: Login
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
  TouchableOpacity,
  View
} from 'react-native';

import {Actions} from 'react-native-router-flux';

var serviceURL = require('../settings').serviceURL;

import styles from '../Styles/style';

export default class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      uname: 'ramesh.palleri',
      password: 'briller@inter1',
      message: '',
      showProgress: false
    };    
  }

  _onPressButton() {

    this.setState({showProgress: true});
    
    if (this.state.uname == '')
    {
      this.setState({message: 'Enter Username'});
      this.setState({showProgress: false});
    } 
    else if (this.state.password == '')
    {
      this.setState({message: 'Enter Password'});
      this.setState({showProgress: false});
    } 
    else
    {
      //Check Database with Login Credentials
      var service = 'informatics.component.login';
      var method = 'preLogin';
      var args = {UserName: this.state.uname, Password: this.state.password};

      var rpc = {
          action: 'Relay'
          , method: "guestBinaryExecute"
          , data: [service, method, args]
          , type: 'rpc'
          , tid: 1
      };

      fetch(serviceURL, {
        method: "POST", 
        contentType: 'application/json',
        body: JSON.stringify(rpc)
      })
      .then((response) => response.json())
      .then((responseData) => {

          //console.log(responseData);

          if (responseData[0].result.ISAUTHENTICATED) //Success
          {
            AsyncStorage.setItem('UNAME', this.state.uname);
            AsyncStorage.setItem('PASS', this.state.password);
            AsyncStorage.setItem('LOGIN', JSON.stringify(responseData[0].result.ISAUTHENTICATED));
            AsyncStorage.setItem('CDPLIST', JSON.stringify(responseData[0].result.qryCDP));

            //Redirect to Set CPD page on success login
            Actions.Setcdp();            
          }
          else //Failed
          {
            this.setState({message: responseData[0].result.ERRORMESSAGE});
            this.setState({showProgress: false});
          }
      })
      .catch((error) => {
        console.error(error);
      })
      .done();
    }
  }

  focusNextField(nextField) {
    this.refs[nextField].focus();
  }

  render() {
  
    return (
      <View style={styles.containerBox}>

        <View style={styles.header}>
          <Image source={require('../img/logo.png')} style={styles.logo} resizeMode='contain' />
        </View>

        <Text style={styles.error}>{this.state.message}</Text>

        <TextInput
          ref="1"
          style={styles.input}
          returnKeyType='next' 
          autoCapitalize='none' 
          autoCorrect={false} 
          autoFocus={true} 
          keyboardType='default' 
          maxLength={75} 
          placeholder='Username' 
          value={this.state.uname}
          blurOnSubmit={false}
          onSubmitEditing={() => this.focusNextField('2')}
          onChangeText={(uname) => this.setState({uname})} />

        <TextInput
          ref="2"
          style={styles.input}
          returnKeyType='go' 
          autoCapitalize='none' 
          autoCorrect={false} 
          keyboardType='default' 
          maxLength={75} 
          placeholder='Password'
          value={this.state.password}
          secureTextEntry={true} 
          onChangeText={(password) => this.setState({password})} />

        <TouchableOpacity onPress={this._onPressButton.bind(this)} style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Sign In</Text>
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