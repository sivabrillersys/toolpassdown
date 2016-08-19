import React, { Component } from 'react';
import {
  AlertIOS,
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import TouchID from "react-native-touch-id";
import {Actions} from 'react-native-router-flux';

export default class TouchIDExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    
    this._authHandler();

  }

  render() {
    return (
      <View>
      </View>
    );
  }

  _authHandler() {
    //console.log(TouchID);
    TouchID.isSupported()
      .then(authenticate)
      .catch(error => {
        console.log('TouchID Not Supported!');
        //Redirect to login if TouchID not supported
        Actions.Login();  
      });
  }
}

const errors = {
  "LAErrorAuthenticationFailed": "Authentication was not successful because the user failed to provide valid credentials.",
  "LAErrorUserCancel": "Authentication was canceled by the user—for example, the user tapped Cancel in the dialog.",
  "LAErrorUserFallback": "Authentication was canceled because the user tapped the fallback button (Enter Password).",
  "LAErrorSystemCancel": "Authentication was canceled by system—for example, if another application came to foreground while the authentication dialog was up.",
  "LAErrorPasscodeNotSet": "Authentication could not start because the passcode is not set on the device.",
  "LAErrorTouchIDNotAvailable": "Authentication could not start because Touch ID is not available on the device",
  "LAErrorTouchIDNotEnrolled": "Authentication could not start because Touch ID has no enrolled fingers.",
  "RCTTouchIDUnknownError": "Could not authenticate for an unknown reason.",
  "RCTTouchIDNotSupported": "Device does not support Touch ID."
};

function authenticate() {
  return TouchID.authenticate()
    .then(success => {
      //Redirect to login if TouchID not supported
      Actions.Login();
    })
    .catch(error => {
      console.log(error)
      AlertIOS.alert(error.message);
    });
}