// style.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textBanner: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  gifBanner: {
  width: "90%",
  height: undefined,     // deixa a altura ser calculada
  aspectRatio: 16 / 9,   // mantém proporção (aqui 16:9)
  alignSelf: "center",
  borderRadius: 12,
  },
});


export default styles;
