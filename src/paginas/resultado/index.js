import { View, Text, Image, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';

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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTEyZWJkNTExZTdhZWQzNWZkNzE0MzE2ZTU0YmMwMCIsIm5iZiI6MTc1NTcwNjk5NS4wMDcsInN1YiI6IjY4YTVmNjczMzJjZGE4ZjBhZmZkMjc5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kVJb8PiBJYPHS9BfuRiNIP4o8NF-Ff26a2Qz8F-66Ew`
        }
      };

      const response = await fetch(url, options)
      const data = await response.json()
      setFilmes(data.results)
    }

    buscaFilmes()
  }, [route.params.pesquisa])

  return (
    <View>
      <FlatList
        data={pesquisaFilmes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Filme: {item.title}</Text>
            <Text>Nota: {item.vote_average}</Text>
            <Image
              style={{ width: "100%", height: 150 }}
              source={{ uri: `https://image.tmdb.org/t/p/original${item.poster_path}` }}
            />
          </View>
        )}
      />
    </View>
  )
}
