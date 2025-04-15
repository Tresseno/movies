import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList} from 'react-native';
import {Feather} from '@expo/vector-icons'
import Cabecalho from './src/componentes/cabecalho/index.js'
import Pesquisa from './src/componentes/barraPesquisa/index.js'
import Banner from './src/componentes/banner/index.js'
import Filmes from './src/componentes/movies.js'
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

        <View style={{width:"90%"}}>

          <FlatList

            horizontal = {true}

            data = {Filmes}

            keyExtractor={(item) => item.id}
            renderItem={({item}) => (

              <CardMovies titulo = {item.nome} nota = {item.nota} imagem = {item.imagem}/>
              
            )}

          />

        </View>

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
