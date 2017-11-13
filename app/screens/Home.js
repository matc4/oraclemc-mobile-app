'use strict';

import React, {Component, PropTypes} from "react";
import { View, Alert } from 'react-native';
import { Drawer, Header, Icon, Card, CardItem, Container, Left, Right, Title, Spinner,
        Content, Button, Text, Form, Item, Input, Body } from 'native-base';

import SideBar from '../components/SideBar';
import Movie from '../components/Movie';
var OracleCloudServiceModule = require('react-native').NativeModules.OracleCloudServiceModule;

class Home extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      movies: [],
      loading: true
    };

    this.closeDrawer = this.closeDrawer.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
    this.renderMovies = this.renderMovies.bind(this);
    this.loadMovies = this.loadMovies.bind(this);
    this.loadMovies2 = this.loadMovies2.bind(this);
  }

  componentWillMount() {
      this.loadMovies();
  }

  loadMovies() {
    this.setState({ loading: true });

    OracleCloudServiceModule.invokeEndPoint("oracle_dev_api/movies",
      null, //Body
      OracleCloudServiceModule.HTTP_METHOD_GET,
      (success, data) => {
        this.setState({ loading: false });

        if(success) {
          var parsedObject = eval("(" + data + ")");
          this.setState({ movies: parsedObject.moviesList })
        } else {
          Alert.alert("Error", data);
        }
      });
  }

  loadMovies2(){
    this.setState({ loading: true });

    fetch('https://us-central1-oracle-developer-tour.cloudfunctions.net/app/movies')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({ loading: false, movies: responseJson });
    })
    .catch((error) => {
      this.setState({ loading: false });
      Alert.alert("Error", error);
    });
  }

  closeDrawer(){
    this.drawer._root.close();
  }

  openDrawer(){
    this.drawer._root.open();
  }

  renderMovies() {
    if(this.state.loading) {
      return <Spinner color='red'
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />;
    }else{
      let moviesArray = [];
      let onPressMovieFunc = this.onPressMovie;
      this.state.movies.forEach(function(movie) {
        moviesArray.push(<Movie video={movie} onPressMovie={onPressMovieFunc} key={movie.id} />)
      });
      return moviesArray;
    }
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
                         <Icon name='md-menu'/>
                       </Button>
                     </Left>
                     <Body>
                        <Title>PeliApp</Title>
                     </Body>
                     <Right>
                        <Button transparent onPress={this.loadMovies2}>
                          <Icon name='refresh'/>
                        </Button>
                      </Right>
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
