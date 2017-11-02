'use strict';

import React, {Component, PropTypes} from "react";
import {  ToastAndroid  } from 'react-native';
import { Container, Content, Button, Text, Form, Item, Input } from 'native-base';


class Home extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
       <Container >
          <Content >
              <Text>Home</Text>
          </Content>
      </Container>
    );
  }
};


module.exports = Home;
