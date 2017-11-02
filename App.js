
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './app/screens/Login';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="mobile" color="red" size={42}  />
        <Text style={styles.welcome}>
          Welcome to Oracle Developer Tour 2017!
        </Text>
         <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
