'use strict';

import React, {Component, PropTypes} from "react";
import {  ToastAndroid, View, Alert } from 'react-native';
import { Container, Content, Body, Title, Header, Button, Text, Form, Item, Input, Spinner } from 'native-base';
var OracleCloudServiceModule = require('react-native').NativeModules.OracleCloudServiceModule;

import Icon from 'react-native-vector-icons/FontAwesome';

class Login extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      usuario:'mcs-demo_user02',
      password:'ALlegeD@2Cedar',
      loading: false
    };

    this.onTapLogin = this.onTapLogin.bind(this);
  }

  onTapLogin(){
    this.setState({ loading: true });

    OracleCloudServiceModule.loginUser(this.state.usuario, this.state.password,
      (success, data) => {
        this.setState({ loading: false });

        if(success) {
          this.props.history.push('/home');
        } else {
          Alert.alert("", data);
        }
      });
  }

  renderSpinner() {
    if(this.state.loading) {
      return <Spinner color='red' />;
    }
  }

  render() {
    return (
       <Container>
         <Header>
           <Body>
              <Title>PeliApp</Title>
           </Body>
          </Header>
          <Content>
            <View style={{ alignItems: "center" }}>
                <Icon name="mobile" color="red" size={42}  />
                <Text>
                  Welcome to Oracle Developer Tour 2017!
                </Text>
            </View>
            <Form >
              <Item>
                <Input placeholder="Usuario"
                       value={this.state.usuario}
                       onChangeText={(usuario) => this.setState({usuario:usuario})} />
              </Item>
              <Item>
                <Input placeholder="Contraseña"
                       value={this.state.password}
                       onChangeText={(password) => this.setState({password:password})} />
              </Item>
            </Form>

            <View style={{ alignSelf: "center" }}>
                <Button style={{marginTop: 10}} onPress={this.onTapLogin} >
                  <Text>Ingresar</Text>
                </Button>
            </View>

            {this.renderSpinner()}

          </Content>
      </Container>
    );
  }
};



module.exports = Login;
