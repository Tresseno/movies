import {Text, View, TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons';
import styles from './styles'  

export default function Cabecalho (){
    return(

    <View style = {styles.viewHeader}>

    <TouchableOpacity> 
        <Feather style = {{marginLeft : -70}} name = 'menu' size = {36} color = "#FFF"/>
    </TouchableOpacity>

    <Text style = { styles.textHeader}>FILMES</Text>

    </View>
);
}