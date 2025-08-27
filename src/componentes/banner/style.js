// style.js
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const largura = Dimensions.get('screen').width

const styles = StyleSheet.create({
  textBanner: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
    color: '#fff'
  },
  gifBanner: {
  width: largura - 90,
  padding: 16,
  alignSelf: "center",
  borderRadius: 12,
  },

});


export default styles;
