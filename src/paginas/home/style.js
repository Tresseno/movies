import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#000',
      width: '100%',
      height: '100%'
    },
  
    containerView:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
    },
  
    textHeader: {
      fontSize: 25,
      color: "white",
      fontWeight: "bold",
    }
});

export default styles;