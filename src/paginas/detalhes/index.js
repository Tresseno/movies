import { View, Text, TouchableOpacity, Image } from "react-native-web";
import {useNavigation} from "@react-navigation/native";
import {useRoute} from "@react-navigation/native";
import styles from "./style";

export default function Detalhes(){

    const route = useRoute();
    const navigation = useNavigation();

    return(
        <View>

            <Text> {route.params.titulo} </Text>
            <Image style = {styles.images} source={{uri:(route.params.imagem)}}></Image>  
            <Text> {route.params.nota} </Text>                                              
            <TouchableOpacity onPress = {() => navigation.goBack()}>Voltar</TouchableOpacity>
        </View>
    );
}