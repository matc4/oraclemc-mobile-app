import React, { Component } from 'react'
import {
  ScrollView,
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native'
import { Drawer, Header, Card, CardItem, Container, Left, Right, Title,
        Content, Button, Text, Icon, Form, Item, Input, Body } from 'native-base';

import Carousel from 'react-native-snap-carousel';
import SliderEntry from '../components/SliderEntry';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';


class MovieDetails extends Component {

  constructor(props, context) {
    super(props, context);

    this.onCloseDetails = this.onCloseDetails.bind(this);
  }

  onCloseDetails () {
      this.props.history.goBack();
  }

  _renderItem ({item, index}) {
      return (
          <SliderEntry
            data={item}
            even={(index + 1) % 2 === 0}
          />
      );
  }

  render() {

    const movie = this.props.history.location.state.movie;

    return (
      <Container>
        <Header>
          <Left>
             <Button transparent onPress={this.onCloseDetails}>
               <Icon name='arrow-back' />
             </Button>
           </Left>
          <Body>
            <Title>PeliApp</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <ScrollView style={styles.backgroundScreenStyle}>
            <View style={styles.imageAndTitleContainerStyle}>
              <Carousel
                data={movie.images}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                enableMomentum={true}
                activeSlideAlignment={'start'}
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContentContainer}
              />

              <View style={styles.containerRightSectionStyle}>
                <Text style={styles.titleStyle}>{movie.name}</Text>
                <Text style={styles.blackTextStyle}>
                  {movie.year} ·
                  {movie.duration} mins ·
                  {movie.clasification}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={[styles.blackTextStyle, { marginRight: 5 }]}>
                    Todos,
                  </Text>
                  <Text style={styles.blackTextStyle}>{movie.type}</Text>
                </View>
              </View>
            </View>
            <Text style={styles.blackTextStyle}>{movie.description}</Text>
            <View style={styles.newLineTextStyle}>
              <Text style={styles.blackTextStyle}>
                Protagonizada por:
              </Text>
              <Text style={styles.blackTextStyle}>{movie.staring}</Text>
            </View>
            <View style={styles.newLineTextStyle}>
              <Text style={styles.blackTextStyle}>
                Dirigida por:
              </Text>
              <Text style={styles.blackTextStyle}>{movie.director}</Text>
            </View>
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

const styles = {
  backgroundScreenStyle: {
    flex: 1,
    padding: 10
  },
  imageAndTitleContainerStyle: {
    marginBottom: 10
  },
  closeIconContainerStyle: {
    position: 'absolute',
    right: 0,
    paddingRight: 10,
    paddingLeft: 15,
    paddingBottom: 15
  },
  containerRightSectionStyle: {
    flexDirection: 'column',
    paddingLeft: 10
  },
  imageStyle: {
    height: 200,
    width: 115
  },
  titleStyle: {
    fontSize: 20,
    color: '#000'
  },
  blackTextStyle: {
    color: '#000'
  },
  newLineTextStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row'
  }
}

export default MovieDetails;
