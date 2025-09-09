import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0d1b2a",
        padding: 10,
      },
      list: {
        paddingBottom: 20,
      },
      card: {
        backgroundColor: '#1b263b',
        borderRadius: 12,
        marginBottom: 16,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5,
      },
      poster: {
        width: "100%",
        height: 250,
        resizeMode: "cover",
      },
      info: {
        padding: 10,
      },
      title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 6,
      },
      rating: {
        fontSize: 14,
        color: "#FFD700",
        fontWeight: "600",
      },
    });

export default styles;