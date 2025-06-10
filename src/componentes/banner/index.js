// index.js
import React from 'react';
import { Text, View } from 'react-native';
import { Video } from 'expo-av';
import styles from './style';

export default function Banner() {
    return (
        <View>
            <Text style={styles.textBanner}> Em Cartaz </Text>
            <Video
                source={require('../../../assets/gif.mp4')} // ou use um link externo como uri
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={styles.videoBanner}
            />
        </View>
    );
}
