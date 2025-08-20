import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './style.js';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, Entypo } from '@expo/vector-icons';

export default function CardMovies({ titulo, imagem, restaurante, distancia, avaliacao, preco }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('Detalhes', { titulo, imagem })}>
            <Image style={styles.image} source={{ uri: `https://image.tmdb.org/t/p/original${imagem}` }} />

            <View style={styles.infoContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{titulo}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
