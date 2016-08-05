/**
 * Tool Pass Down Mob APP
 * Default Page
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import RootRouter from './App/Components/RootRouter';

class toolsPassDown extends Component {
  
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
        <RootRouter />
    );
  }
}

AppRegistry.registerComponent('toolsPassDown', () => toolsPassDown);