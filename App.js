import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import {Feather} from '@expo/vector-icons'
import Cabecalho from './src/componentes/cabecalho/index.js'
import Pesquisa from './src/componentes/barraPesquisa/index.js'
import Banner from './src/componentes/banner/index.js'

export default function App() {
  // Array de imagens
  const imagens = [
    require('./assets/1.jpg'),
    require('./assets/2.jpg'),
    require('./assets/3.jpg'),
    require('./assets/4.jpg')
  ];

  // Escolhe uma imagem aleatória
  const imagem = imagens[Math.floor(Math.random() * imagens.length)];

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
