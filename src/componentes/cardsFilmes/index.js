import React from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './style.js';

export default function CardMovies(){
    return(

        <View style={styles.containerFilmes}>
            <View style={styles.viewPrincipalFilmes}>
                <TouchableOpacity>
                    <Image style={styles.images} source={require(`../../../assets/Annabelle.png`)}/>
                    <Text style={styles.titulo}> ANNABELLE </Text>

                    <Text style={styles.titulo}> NOTA DO FILME: 0,2 </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={styles.images} source={require(`../../../assets/Hulk.png`)}/>
                    <Text style={styles.titulo}> O INCRÍVEL HULK </Text>

                    <Text style={styles.titulo}> NOTA DO FILME: 8,5 </Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}