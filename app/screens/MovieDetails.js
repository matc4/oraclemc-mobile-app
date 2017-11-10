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


class VideoDetails extends Component {

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

  render () {
     const {
      name,
      type,
      year,
      clasification,
      duration,
      description,
      staring,
      director,
      images
    } = this.props.history.location.state.movie

    const {
      backgroundScreenStyle,
      imageAndTitleContainerStyle,
      closeIconContainerStyle,
      containerRightSectionStyle,
      titleStyle,
      imageStyle,
      playButtonStyle,
      blackTextStyle,
      newLineTextStyle
    } = styles

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
          <ScrollView style={backgroundScreenStyle}>
            <View style={imageAndTitleContainerStyle}>
              <Carousel
                data={images}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                enableMomentum={true}
                activeSlideAlignment={'start'}
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContentContainer}
              />

              <View style={containerRightSectionStyle}>
                <Text style={titleStyle}>{name}</Text>
                <Text style={blackTextStyle}>
                  {year} ·
                  {duration} mins ·
                  {clasification}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={[blackTextStyle, { marginRight: 5 }]}>
                    Todos,
                  </Text>
                  <Text style={blackTextStyle}>{type}</Text>
                </View>
              </View>
            </View>
            <Text style={blackTextStyle}>{description}</Text>
            <View style={newLineTextStyle}>
              <Text style={blackTextStyle}>
                Protagonizada por:
              </Text>
              <Text style={blackTextStyle}>{staring}</Text>
            </View>
            <View style={newLineTextStyle}>
              <Text style={blackTextStyle}>
                Dirigida por:
              </Text>
              <Text style={blackTextStyle}>{director}</Text>
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

export default VideoDetails
