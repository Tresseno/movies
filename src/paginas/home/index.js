import { StyleSheet, View, FlatList, ScrollView } from 'react-native';
import Banner from "../../componentes/banner";
import CardMovies from "../../componentes/cardsFilmes";
import Pesquisa from "../../componentes/barraPesquisa";
import Cabecalho from "../../componentes/cabecalho";
import styles from "./style.js"
import { useState, useEffect } from 'react';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [movies2, setMovies2] = useState([]);
  const [movies3, setMovies3] = useState([]);

  useEffect(() => {
    async function buscarFilmes() {
      const url = 'https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer SEU_TOKEN_AQUI'
        }
      };

      const responses = await fetch(url, options)
      const data = await responses.json();
      setMovies(data.results)
    }
    buscarFilmes()
  }, [])

  useEffect(() => {
    async function buscarFilmes2() {
      const url = 'https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer SEU_TOKEN_AQUI'
        }
      };

      const responses = await fetch(url, options)
      const data2 = await responses.json();
      setMovies2(data2.results)
    }
    buscarFilmes2()
  }, [])

  useEffect(() => {
    async function buscarFilmes3() {
      const url = 'https://api.themoviedb.org/3/movie/upcoming?language=pt-BR&page=1';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer SEU_TOKEN_AQUI'
        }
      };

      const responses = await fetch(url, options)
      const data3 = await responses.json();
      setMovies3(data3.results)
    }
    buscarFilmes3()
  }, [])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerView}>
        <Cabecalho />
        <Pesquisa />
        <Banner />

        <View style={{ width: "90%" }}>
          <FlatList
            horizontal={true}
            data={movies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CardMovies titulo={item.title} nota={item.vote_average} imagem={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
            )}
          />

          <FlatList
            horizontal={true}
            data={movies2}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CardMovies titulo={item.title} nota={item.vote_average} imagem={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
            )}
          />

          <FlatList
            horizontal={true}
            data={movies3}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CardMovies
                titulo={item.title}
                nota={item.vote_average}
                imagem={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                descricao={item.overview}
              />
            )}
          />
        </View>
      </View>
    </ScrollView>
  )
}
