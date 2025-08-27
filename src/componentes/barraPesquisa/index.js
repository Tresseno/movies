import {Text, View, TextInput, TouchableOpacity} from "react-native";
import styles from "./style";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
 
 
export default function Pesquisa(){
 
  const[Pesquisa,setPesquisa] = useState('');
 
  const navigation = useNavigation();
 
  function testeBotao(){
    console.log(Pesquisa)
  }
 
    return(
 
        <View style={styles.containerSearch}>
 
 
        <TextInput onChangeText={(texto)=>setPesquisa(texto)} style={styles.inputSearch} placeholder="Digite o filme que deseja buscar"></TextInput>
 
        <TouchableOpacity onPress={() => navigation.navigate('Pesquisa', { pesquisa: Pesquisa })} style={{marginLeft:-40}}>
            <EvilIcons name="search" size={24} color="black" />
        </TouchableOpacity>

 
      </View>
    )
}
 