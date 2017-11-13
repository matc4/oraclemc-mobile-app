'use strict';

import React, {Component, PropTypes} from "react";
import {Container, Content, Left, Right, Form, ListItem,List, Icon, Body, Text, Switch } from 'native-base';


class SideBar extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Container style={{flex:1, backgroundColor:"white"}}>
        <Content>
          <List>
            <ListItem icon>
              <Left>
                <Icon name="plane" />
              </Left>
              <Body>
                <Text>Offline Mode</Text>
              </Body>
              <Right>
                <Switch value={false} />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="film" />
              </Left>
              <Body>
                <Text>Peliculas</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="cart" />
              </Left>
              <Body>
                <Text>Comprar</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
};


module.exports = SideBar;
