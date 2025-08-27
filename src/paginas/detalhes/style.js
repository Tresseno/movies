import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#0d1b2a", // fundo escuro
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },

  image: {
    width: "100%",
    height: 400,
    borderRadius: 12,
    resizeMode: "contain",
    marginBottom: 16,
  },

  card: {
    backgroundColor: "#1b263b", // oxford-blue
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
    width: "95%",
    maxWidth: 850,
    alignItems: "center",
  },

  info: {
    flex: 1,
    width: "100%",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#e0e1dd", // platinum
    marginBottom: 8,
    textAlign: "center",
  },

  rating: {
    fontSize: 16,
    fontWeight: "600",
    color: "#778da9", // silver-lake-blue
    marginBottom: 10,
    textAlign: "center",
  },

  description: {
    fontSize: 15,
    color: "#e0e1dd",
    marginBottom: 20,
    textAlign: "justify",
  },

  button: {
    backgroundColor: "#415a77", // yinmn-blue
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 12,
  },

  buttonText: {
    color: "#e0e1dd",
    fontSize: 16,
    fontWeight: "bold",
  },

  backButton: {
    backgroundColor: "#778da9",
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: "center",
  },

  backButtonText: {
    color: "#0d1b2a", // contraste no fundo claro
    fontSize: 14,
  },
});

export default styles;
