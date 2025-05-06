import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#141a28',
      width: '100%',
      height: '100%'
    },
  
    containerView:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
    },
  
    textBanner: {
      fontSize: 30,
      color: "white",
      marginTop: 15,
      marginLeft: -180,
      fontWeight: 'bold'
    }
});

export default styles;