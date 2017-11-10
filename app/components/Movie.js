'use strict';

import React, {Component, PropTypes} from "react";
import { Text, TouchableWithoutFeedback, TouchableOpacity, View, Image } from 'react-native';

class Movie extends Component {

  onRowPress() {
    this.props.onPressMovie(this.props.video);
  }

  render() {
    const { name, duration, images } = this.props.video;
    return (
        <View style={styles.imgContainerStyle}>
          <TouchableOpacity onPress={this.onRowPress.bind(this)}>
            <Image style={styles.imageStyle} source={{ uri: images[0] }}  />
          </TouchableOpacity>
          <Text style={styles.titleStyle}>
            {name}
          </Text>
          <Text>
            {duration} mins
          </Text>
        </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 12,
    paddingTop: 5,
    fontWeight: '600',
    color: '#000',
    width: 115
  },
  imageStyle: {
    height: 200
  },
  imgContainerStyle: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    width: '30%'
  }
};

export default Movie;
