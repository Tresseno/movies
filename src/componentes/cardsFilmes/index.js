import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './style.js';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, Entypo } from '@expo/vector-icons';

export default function CardMovies({ titulo, imagem, restaurante, distancia, avaliacao, preco }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('Detalhes', { titulo, imagem })}>
            <Image style={styles.image} source={{ uri: imagem }} />

            <View style={styles.infoContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{titulo}</Text>
                    <View style={styles.subInfo}>
                        <Text style={styles.restaurante}>{restaurante}</Text>
                        <Entypo name="location-pin" size={14} color="#999" />
                        <Text style={styles.distancia}>{distancia}</Text>
                    </View>
                    <View style={styles.avaliacaoContainer}>
                        <FontAwesome name="star" size={14} color="#FFD700" />
                        <Text style={styles.avaliacaoText}>{avaliacao}</Text>
                    </View>
                </View>
                <View style={styles.precoContainer}>
                    <Text style={styles.preco}>R$ {preco}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
