'use strict';

import React, {Component, PropTypes} from "react";
import {  ToastAndroid  } from 'react-native';
import { Container, Content, Button, Text, Form, Item, Input } from 'native-base';


class Login extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {usuario:'', password:''};

    this.onTapLogin = this.onTapLogin.bind(this);
  }

  onTapLogin(){
      ToastAndroid.show('Presiono Login !' + this.state.usuario, ToastAndroid.SHORT);
  }

  render() {
    return (
       <Container >
          <Content >
            <Form >
              <Item style={{width: 300}}>
                <Input placeholder="Usuario"
                       value={this.state.usuario}
                       onChangeText={(usuario) => this.setState({usuario:usuario})} />
              </Item>
              <Item last>
                <Input placeholder="Contraseña"
                       value={this.state.password}
                       onChangeText={(password) => this.setState({password:password})} />
              </Item>
            </Form>
            <Button style={{marginTop: 10}} onPress={this.onTapLogin} >
              <Text>Ingresar</Text>
            </Button>
          </Content>
      </Container>
    );
  }
};


module.exports = Login;
