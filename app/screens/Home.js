'use strict';

import React, {Component, PropTypes} from "react";
import { View  } from 'react-native';
import { Drawer, Header, Card, CardItem, Container, Left, Right, Title,
        Content, Button, Text, Form, Item, Input, Body } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

import SideBar from '../components/SideBar';

class Home extends Component {

  constructor(props, context) {
    super(props, context);

    this.closeDrawer = this.closeDrawer.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
  }

  closeDrawer(){
    this.drawer._root.close();
  }

  openDrawer(){
    this.drawer._root.open();
  }

  render() {
    return (
      <Drawer
       ref={(ref) => { this.drawer = ref; }}
       content={<SideBar/>}
       onClose={() => this.closeDrawer()} >
       <Container>
           <Header>
                    <Left>
                       <Button transparent onPress={this.openDrawer}>
                         <Icon name='bars' size={26} color="white" />
                       </Button>
                     </Left>
                     <Body>
                        <Title>PeliApp</Title>
                     </Body>
                     <Right/>
           </Header>
           <Content>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', paddingBottom:70}}>
                    <Text>HOLA</Text>
                </View>
           </Content>
         </Container>
      </Drawer>
    );
  }
};

module.exports = Home;
