import {Text, Image} from "react-native";
import styles from './style.js'

export default function Banner(){

    return(
        <>
        <Text style={styles.textBanner}> Em Cartaz </Text>
    
        <Image style={styles.imageBanner} source={imagem}/>
        </>
    );
    
}