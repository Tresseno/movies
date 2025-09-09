import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import styles from "./resul";

export default function PesquisaFilmes() {
  const route = useRoute();
  const [pesquisaFilmes, setFilmes] = useState([]);

  useEffect(() => {
    async function buscaFilmes() {
      const url = `https://api.themoviedb.org/3/search/movie?query=${route.params.pesquisa}&include_adult=false&language=pt-BR&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer SEU_TOKEN_AQUI`
        }
      };

      const response = await fetch(url, options);
      const data = await response.json();
      setFilmes(data.results);
    }

    buscaFilmes();
  }, [route.params.pesquisa]);

  return (
    <View style={styles.container}>
      <FlatList
        data={pesquisaFilmes}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              style={styles.poster}
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
            />
            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.rating}>⭐ {item.vote_average.toFixed(1)}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}