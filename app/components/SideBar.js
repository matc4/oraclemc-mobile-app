'use strict';

import React, {Component, PropTypes} from "react";
import { View  } from 'react-native';
import { Drawer, Container, Content, Button, Text, Form, Item, Input } from 'native-base';


class SideBar extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
        <View style={{flex:1, backgroundColor:"white"}}>
          <Text>
            HOLA
          </Text>
        </View>
    );
  }
};


module.exports = SideBar;
