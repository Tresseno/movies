
import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./style";

export default function Detalhes() {
  const route = useRoute();
  const navigation = useNavigation();

  const { width } = Dimensions.get("window");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.card, { flexDirection: width > 700 ? "row" : "column" }]}>
        
        {/* Imagem do filme */}
        <Image
          style={[
            styles.image,
            { 
              width: width > 700 ? 220 : "100%",
              height: width > 700 ? 320 : 420,
              marginBottom: width > 700 ? 0 : 16,
              marginRight: width > 700 ? 16 : 0,
            }
          ]}
          source={{ uri: (`https://image.tmdb.org/t/p/original/${route.params.imagem}`)}}
          resizeMode="cover"
        />

        {/* Infos */}
        <View style={styles.info}>
          <Text style={styles.title}>{route.params.titulo}</Text>
          <Text style={styles.rating}>⭐ Nota: {route.params.nota}</Text>
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