import {Text, Image} from "react-native";
import styles from './style.js'

// Array de imagens
const imagens = [
    require('../../../assets/1.jpg'),
    require('../../../assets/2.jpg'),
    require('../../../assets/3.jpg')
];

// Escolhe uma imagem aleatória
const imagem = imagens[Math.floor(Math.random() * imagens.length)];

export default function Banner(){

    return(
        <>

            <Text style={styles.textBanner}> Em Cartaz </Text>
            <Image style={styles.imageBanner} source={imagem}/>
        </>
    );
    
}