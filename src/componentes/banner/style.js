// style.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    videoBanner: {
        width: '92%',
        height: 200,
        marginTop: 15,
        borderRadius: 10,
        backgroundColor: '#000',
    },    
    
    textBanner: {
        fontSize: 30,
        color: "black", // corrigido aqui
        marginTop: 15,
        fontWeight: 'bold'
    },
});

export default styles;
