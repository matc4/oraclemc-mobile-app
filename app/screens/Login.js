'use strict';

import React, {Component, PropTypes} from "react";
import {  ToastAndroid, View, Alert, NativeModules } from 'react-native';
import { Container, Icon, Content, Body, Title, Header, Button, Text, Form, Item, Input, Spinner } from 'native-base';
var OracleMobileCloud = NativeModules.OracleMobileCloud;

class Login extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      usuario:'mcs-demo_user02',
      password:'ALlegeD@2Cedar',
      loading: false
    };

    this.onTapLogin = this.onTapLogin.bind(this);
    this.onTapLogin2 = this.onTapLogin2.bind(this);
    this.onTapLoginAnonymous = this.onTapLoginAnonymous.bind(this);
  }


  onTapLoginAnonymous() {
    this.setState({ loading: true });

    OracleMobileCloud.loginAnonymous(
      (success, data) => {
        this.setState({ loading: false });

        if(success) {
          this.props.history.push('/home');
        } else {
          Alert.alert("Error", data);
        }
      });
  }

  onTapLogin(){
    this.setState({ loading: true });

    OracleMobileCloud.loginUser(this.state.usuario, this.state.password,
      (success, data) => {
        this.setState({ loading: false });

        if(success) {
          //Alert.alert("Success", JSON.stringify(data));
          this.props.history.push('/home');
        } else {
          Alert.alert("Error", data);
        }
      });
  }

  onTapLogin2(){
      this.setState({ loading: true });

      fetch(`https://us-central1-oracle-developer-tour.cloudfunctions.net/app/login?user=${this.state.usuario}&pass=${this.state.password}`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ loading: false });
        if(responseJson === 'Usuario autenticado correctamente') {
          this.props.history.push('/home');
        }
        else {
          Alert.alert("Error", responseJson);
        }
      })
      .catch((error) => {
        this.setState({ loading: false });
        Alert.alert("Error", error);
      });
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
                <Icon name="md-phone-portrait" style={{fontSize: 42, color: 'red'}}  />
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

                <Button style={{marginTop: 10}} onPress={this.onTapLoginAnonymous} >
                  <Text>Ingresar Anonymous </Text>
                </Button>
            </View>

            {this.state.loading ? <Spinner color='red' /> : null}
          </Content>
      </Container>
    );
  }
};

module.exports = Login;
