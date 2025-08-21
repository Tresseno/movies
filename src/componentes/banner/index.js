// index.js
import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style';

export default function Banner() {
    return (
        <View>
            <Text style={styles.textBanner}>Em Cartaz</Text>
            <Image
                source={require('../../../assets/tanjiro-demon-slayer.gif')}
                style={styles.gifBanner}
                resizeMode="cover"
            />
        </View>
    );
}
