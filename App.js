import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import {Feather} from '@expo/vector-icons'
import Cabecalho from './src/componentes/cabecalho/index.js'
import Pesquisa from './src/componentes/barraPesquisa/index.js'
import Banner from './src/componentes/banner/index.js'
import CardMovies from './src/componentes/cardsFilmes/index.js';
import { ScrollView } from 'react-native-web';

export default function App() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.containerView}>

        <Cabecalho/>

        <Pesquisa/>

        <Banner/>

        <Text style={styles.textBanner}>Filmes</Text>

        <CardMovies/>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141a28',
    width: '100%',
    height: '100%'
  },

  containerView:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },

  textBanner: {
    fontSize: 30,
    color: "white",
    marginTop: 15,
    marginLeft: -180,
    fontWeight: 'bold'
  }
});
