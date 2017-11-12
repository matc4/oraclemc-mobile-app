import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../styles/SliderEntry.style';

export default class SliderEntry extends Component {

    get image () {
        return (
            <Image
              source={{ uri: this.props.data }}
              style={styles.image}
            />
        );
    }

    render () {
        const { even } = this.props;
        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
              >
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                    {this.image}
                    <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
                </View>
            </TouchableOpacity>
        );
    }
}
