/**
 * Tool Pass Down Mob APP
 * Component: RootRouter
 */

'use strict';
console.disableYellowBox = true;

import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Router, Scene, ActionConst } from 'react-native-router-flux';

import styles from '../Styles/style';

import Login from './Login';
import Setcdp from './SetCdp';
import Search from './Search';
import PassdownList from './SearchList';
import PassdownView from './PassdownView';
import EditPassdown from './EditPassdown';
import AddPassdown from './AddPassdown';
import PassdownSummary from './PassdownSummary';

export default class RootRouter extends Component {

	componentDidMount() {
		
    }

    componentWillUnMount() {
        
    	AsyncStorage.getItem("LOGIN").then((value) => {
            if (value){
                Actions.Setcdp();
            }
        }).done();
    }

    render() {

        return (
        <Router navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} barButtonTextStyle={styles.barButtonTextStyle} barButtonIconStyle={styles.barButtonIconStyle}>
            <Scene key="root">
                <Scene component={Login} key='Login' name='Login' initial={true} hideNavBar={true} type={ActionConst.REPLACE} />
                <Scene component={Setcdp} key='Setcdp' name='Setcdp' hideNavBar={true} type={ActionConst.REPLACE} />
                <Scene component={PassdownSummary} key='PassdownSummary' name='PassdownSummary' title="Tool PassDown" hideNavBar={false} type={ActionConst.REPLACE} />
                <Scene component={Search} key='Search' name='Search' title="Tool PassDown" hideNavBar={false} />
                <Scene component={PassdownList} key='PassdownList' name='PassdownList' title="PassDown List" hideNavBar={false} />
                <Scene component={PassdownView} key='PassdownView' name='PassdownView' title="PassDown View" hideNavBar={false} />
                <Scene component={EditPassdown} key='EditPassdown' name='EditPassdown' title="PassDown Edit" hideNavBar={false} />
                <Scene component={AddPassdown} key='AddPassdown' name='AddPassdown' title="Add PassDown" hideNavBar={false} />
            </Scene>
        </Router>
        );
    }
}