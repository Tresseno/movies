import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import {Feather} from '@expo/vector-icons'

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

      <View style={styles.viewHeader}>
        <TouchableOpacity>
          <Feather style={{marginLeft: -70}} name='menu' size={36} color='#fff'/>
        </TouchableOpacity>

        <Text style={styles.textHeader}> TEC FILMES </Text>
      </View>

      <View style={styles.containerSearch}>
        <TextInput 
          style={styles.inputSearch} 
          placeholder="Digite o Filme que deseja buscar"
        />
      </View>

      <Text style={styles.textBanner}> Em Cartaz </Text>

      <Image style={styles.imageBanner} source={imagem} />

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

  viewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    marginLeft: 10
  },

  textHeader: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    marginRight: 75
  },

  containerSearch: {
    flexDirection: "row",
    width: '90%',
    backgroundColor: "transparent",
    marginTop: 30,
    alignItems: "center",
    borderRadius: 3
  },

  inputSearch: {
    height: 35,
    width: '100%',
    marginLeft: 5,
    borderColor: "white",
    borderWidth: 3,
    borderRadius: 20,
    padding: 25,
    color: "white",
    fontSize: 15
  },

  imageBanner: {
    width: '92%',
    height: 200,
    marginTop: 15,
    borderRadius: 10
  },

  textBanner: {
    fontSize: 30,
    color: "white",
    marginTop: 15,
    marginLeft: -180,
    fontWeight: 'bold'
  },

  filmeCartaz: {
    width: '50%',
    height: 150,
    marginTop: 15,
    borderRadius: 10
  }
});
