import { StyleSheet, View, FlatList, ScrollView } from 'react-native';
import Banner from "../../componentes/banner";
import CardMovies from "../../componentes/cardsFilmes";
import Filmes from "../../componentes/movies.js";
import Filmes2 from "../../componentes/movies2.js";
import Pesquisa from "../../componentes/barraPesquisa";
import Cabecalho from "../../componentes/cabecalho";
import styles from "./style.js"
import { useState, useEffect } from 'react';


export default function Home() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {


        async function buscarFilmes() {
            const url = 'https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1';
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2E4YTdjNDM1N2Q2YzJhZDEyZDhkY2M2YzYzYzY0MSIsIm5iZiI6MTc1NTcyMDM2OS42MzUsInN1YiI6IjY4YTYyYWIxZDc3YjhhYWYwNTI1ZjI3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dzhyvx57UH1wuaYS3Cz15Hx9_roVopeAh-qNKkB-gzY'
                }
            };

            const responses = await fetch(url, options)
            const data = await responses.json();
            console.log(data);

            setMovies(data.results)
        }
        buscarFilmes()

    }, [])

    const [movies2, setMovies2] = useState([]);

    useEffect(() => {


        async function buscarFilmes2() {
            const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2E4YTdjNDM1N2Q2YzJhZDEyZDhkY2M2YzYzYzY0MSIsIm5iZiI6MTc1NTcyMDM2OS42MzUsInN1YiI6IjY4YTYyYWIxZDc3YjhhYWYwNTI1ZjI3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dzhyvx57UH1wuaYS3Cz15Hx9_roVopeAh-qNKkB-gzY'
                }
            };


            const responses = await fetch(url, options)
            const data2 = await responses.json();
            console.log(data2);

            setMovies2(data2.results)
        }
        buscarFilmes2()

    }, [])

    const [movies3, setMovies3] = useState([]);

    useEffect(() => {


        async function buscarFilmes3() {
            const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
            const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2E4YTdjNDM1N2Q2YzJhZDEyZDhkY2M2YzYzYzY0MSIsIm5iZiI6MTc1NTcyMDM2OS42MzUsInN1YiI6IjY4YTYyYWIxZDc3YjhhYWYwNTI1ZjI3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dzhyvx57UH1wuaYS3Cz15Hx9_roVopeAh-qNKkB-gzY'
            }
            };


            const responses = await fetch(url, options)
            const data3 = await responses.json();
            console.log(data3);

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

                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (

                            <CardMovies titulo={item.title} nota={item.note_avarage} imagem={item.poster_path} />

                        )}

                    />

                    <FlatList

                        horizontal={true}

                        data={movies2}

                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (

                            <CardMovies titulo={item.title} nota={item.note_avarage} imagem={item.poster_path} />

                        )}

                    />

                    <FlatList

                    horizontal={true}

                    data={movies3}

                    keyExtractor={(item) => item.id}
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
