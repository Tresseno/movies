import { StyleSheet, View, FlatList} from 'react-native';
import Cabecalho from './componentes/cabecalho';
import Pesquisa from './componentes/pesquisa';
import CardMovies from './componentes/cards';
import Banner from './componentes/banner';
import Filmes from './componentes/data/movies';

export default function App() {
const imagem = Math.floor(Math.random() * 4 +1);

  return (
    <View style={styles.container}>

        <Cabecalho/>
        <Pesquisa/>
        <Banner/>


        <View style = {{width: '90%'}}>
          <FlatList
            horizontal = {true}

            data={Filmes}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <CardMovies
              titulo = {item.nome}
              nota= {item.nota}
              imagem = {item.imagem}/>
            )}
          />
        </View>
        

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#141a29',
    alignItems:"center",
  },


})