'use strict';

import React, {Component, PropTypes} from "react";
import { View  } from 'react-native';
import { Drawer, Header, Card, CardItem, Container, Left, Right, Title,
        Content, Button, Text, Form, Item, Input, Body } from 'native-base';

import SideBar from '../components/SideBar';
import Movie from '../components/Movie';
import moviesList from '../data/movies';

import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends Component {

  constructor(props, context) {
    super(props, context);

    this.closeDrawer = this.closeDrawer.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
    this.renderMovies = this.renderMovies.bind(this);
  }

  closeDrawer(){
    this.drawer._root.close();
  }

  openDrawer(){
    this.drawer._root.open();
  }

  renderMovies() {
      let moviesArray = [];
      moviesList.forEach(function (movie) {
        moviesArray.push(<Movie video={movie} key={movie.id}  />)
      })
      return moviesArray;
  }

  render() {
    return (
      <Drawer
       ref={(ref) => { this.drawer = ref; }}
       content={<SideBar/>}
       onClose={() => this.closeDrawer()} >
       <Container>
           <Header >
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
                {this.renderMovies()}
                </View>

           </Content>
         </Container>
      </Drawer>
    );
  }
};

module.exports = Home;
