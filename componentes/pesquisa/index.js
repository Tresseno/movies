import {TextInput, View} from "react-native";
import styles from "./styles.js"

export default function Pesquisa() {
    return(
        <View style = {styles.containerSearch}>
            <TextInput style = {styles.InputSearch} placeholder = "Digite o filme que deseja buscar"></TextInput>
        </View>
    )
}