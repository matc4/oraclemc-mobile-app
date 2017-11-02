
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { NativeRouter, Route, Link } from 'react-router-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './app/screens/Login'; 


export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
         <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
