import {Text, View, TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons';
import styles from './style.js';

export default function Cabecalho(){

    return(


        <View style={styles.viewHeader}>

            <TouchableOpacity>

            <Feather  name='menu' size={36} color='black'/>

            </TouchableOpacity>

            <Text style={styles.textHeader}> APPLE </Text>

        </View>

    );
}