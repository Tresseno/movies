import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import Banner from "../../componentes/banner";
import CardMovies from "../../componentes/cardsFilmes";
import Filmes from "../../componentes/movies.js";
import Filmes2 from "../../componentes/movies2.js";
import Pesquisa from "../../componentes/barraPesquisa";
import Cabecalho from "../../componentes/cabecalho";
import styles from "./style.js"


export default function Home(){
    return(
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

                <FlatList

                    horizontal = {true}

                    data = {Filmes2}

                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (

                    <CardMovies titulo = {item.nome} nota = {item.nota} imagem = {item.imagem}/>

                    )}

                />

                </View>

            </View>

        </ScrollView>
    )
}
