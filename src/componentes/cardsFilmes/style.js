import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    containerFilmes:{
        paddingTop:20,
        paddingBottom:16,
        paddingRight:16,
        width:140,
        height:28
    },

    viewPrincipalFilmes:{
        display:'flex',
        gap:'20px',
        flexDirection:'row',
        marginLeft:'-93px',
        marginBottom:'20px'
    },

    viewFilmes:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        padding:'15px',
        marginBottom: '10px',
        marginRight: '20px',
        width:'150px'
    },

    titulo:{
        color: '#fff',
        fontSize:12,
        paddingTop:8,
    },
    images:{
        width:'130px',
        height:170,
        borderRadius:8
    },
    viewCards:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})

export default styles