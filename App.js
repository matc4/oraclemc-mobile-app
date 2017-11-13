
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { NativeRouter, Route, Link } from 'react-router-native';
import Login from './app/screens/Login';
import Home from './app/screens/Home';
import MovieDetails from './app/screens/MovieDetails';

export default class App extends Component<{}> {
  render() {
    return (
        <NativeRouter>
          <View style={styles.container}>
            <Route exact path="/" component={Login}/>
            <Route path="/home" component={Home}/>
            <Route path="/movieDetails" component={MovieDetails}/>
          </View>
        </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
