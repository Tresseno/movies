import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import {Feather} from '@expo/vector-icons'
import Cabecalho from './src/componentes/cabecalho/index.js'
import Pesquisa from './src/componentes/barraPesquisa/index.js'
import Banner from './src/componentes/banner/index.js'

export default function App() {
  return (
    <View style={styles.container}>

      <Cabecalho/>

      <Pesquisa/>

      <Banner/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141a29',
    alignItems: "center",
    width: '100%',
    height: '100%'
  },
});
