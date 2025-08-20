import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // fundo claro
  },

  content: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  backdrop: {
    width: "100%",
    minHeight: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  overlay: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.7)", // overlay claro
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    width: "90%",
    maxWidth: 850,
  },

  image: {
    width: 200,
    height: 300,
    borderRadius: 12,
    marginRight: 20,
  },

  textContainer: {
    flex: 1,
    justifyContent: "space-between",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 15,
  },

  ratingBox: {
    backgroundColor: "#4a90e2", // azul suave
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 20,
  },

  ratingText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },

  watchButton: {
    backgroundColor: "#6c63ff", // roxo claro
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 12,
  },

  watchButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  backButton: {
    backgroundColor: "#e0e0e0",
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: "center",
  },

  backButtonText: {
    color: "#333",
    fontSize: 14,
  },

});

export default styles;
