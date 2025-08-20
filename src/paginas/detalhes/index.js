import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native-web";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./style";

export default function Detalhes() {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{ uri: route.params.imagem }}
          resizeMode="cover"
        />
        <View style={styles.info}>
          <Text style={styles.title}>{route.params.titulo}</Text>
          <Text style={styles.rating}>Nota: {route.params.nota}</Text>
          <Text style={styles.description}>
            {route.params.descricao || "Descrição não disponível para este filme."}
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>▶ Assistir</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
