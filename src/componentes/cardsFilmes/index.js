import React, {use} from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style.js';
import {useNavigation} from '@react-navigation/native';

export default function CardMovies({titulo, imagem}){

    const navigation = useNavigation();

    return(

        <>
        <TouchableOpacity style={styles.viewFilmes} onPress={()=> navigation.navigate('Detalhes',{titulo, imagem})}>
            <View style = {styles.viewcontainer}>
                <Image style={styles.images} source={{uri:(imagem)}}/>  
            </View>
            
        </TouchableOpacity>

        </>
        
    );

    
}