import React from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './style.js';

export default function CardMovies(){
    return(

        <View style={styles.containerFilmes}>
            <View style={styles.viewPrincipalFilmes}>
                <TouchableOpacity style={styles.viewFilmes}>
                    <Image style={styles.images} source={require(`../../../assets/Annabelle.png`)}/>
                    <Text style={styles.titulo}> ANNABELLE </Text>

                    <Text style={styles.titulo}> NOTA DO FILME: 0,2 </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.viewFilmes}>
                    <Image style={styles.images} source={require(`../../../assets/Hulk.png`)}/>
                    <Text style={styles.titulo}> O INCRÍVEL HULK </Text>

                    <Text style={styles.titulo}> NOTA DO FILME: 8,5 </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.viewPrincipalFilmes}>
                <TouchableOpacity style={styles.viewFilmes}>
                    <Image style={styles.images} source={require(`../../../assets/Mufasa.png`)}/>
                    <Text style={styles.titulo}> MUFASA </Text>

                    <Text style={styles.titulo}> NOTA DO FILME: 6,2 </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.viewFilmes}>
                    <Image style={styles.images} source={require(`../../../assets/Planeta dos macacos.png`)}/>
                    <Text style={styles.titulo}> PLANETA DOS MACACOS - O CONFRONTO </Text>

                    <Text style={styles.titulo}> NOTA DO FILME: 9,5 </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.viewPrincipalFilmes}>
                <TouchableOpacity style={styles.viewFilmes}>
                    <Image style={styles.images} source={require(`../../../assets/A fuga das galinha.png`)}/>
                    <Text style={styles.titulo}> A FUGA DAS GALINHAS </Text>

                    <Text style={styles.titulo}> NOTA DO FILME: 7,2 </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.viewFilmes}>
                    <Image style={styles.images} source={require(`../../../assets/Barbie.png`)}/>
                    <Text style={styles.titulo}> BARBIE BUTTERFLY </Text>

                    <Text style={styles.titulo}> NOTA DO FILME: 9,5 </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.viewPrincipalFilmes}>
                <TouchableOpacity style={styles.viewFilmes}>
                    <Image style={styles.images} source={require(`../../../assets/Cap América.png`)}/>
                    <Text style={styles.titulo}> CAPITÃO AMÉRICA - GUERRA CIVIL </Text>

                    <Text style={styles.titulo}> NOTA DO FILME: 8,5 </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.viewFilmes}>
                    <Image style={styles.images} source={require(`../../../assets/DW.png`)}/>
                    <Text style={styles.titulo}> DEADPOOL & WOLVERINE </Text>

                    <Text style={styles.titulo}> NOTA DO FILME: 7,5 </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.viewPrincipalFilmes}>
                <TouchableOpacity style={styles.viewFilmes}>
                    <Image style={styles.images} source={require(`../../../assets/Doutor Estranho ML.png`)}/>
                    <Text style={styles.titulo}> DOUTOR ESTRANHO - MULTIVERSO DA LOUCURA </Text>

                    <Text style={styles.titulo}> NOTA DO FILME: 8,5 </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.viewFilmes}>
                    <Image style={styles.images} source={require(`../../../assets/Rua do Medo.png`)}/>
                    <Text style={styles.titulo}> RUA DO MEDO </Text>

                    <Text style={styles.titulo}> NOTA DO FILME: 7,5 </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.viewPrincipalFilmes}>
                <TouchableOpacity style={styles.viewFilmes}>
                    <Image style={styles.images} source={require(`../../../assets/Ultimato.png`)}/>
                    <Text style={styles.titulo}> VINGADORES ULTIMATO </Text>

                    <Text style={styles.titulo}> NOTA DO FILME: 8,5 </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.viewFilmes}>
                    <Image style={styles.images} source={require(`../../../assets/Iron_Man_3.png`)}/>
                    <Text style={styles.titulo}> HOMEM DE FERRO 3 </Text>

                    <Text style={styles.titulo}> NOTA DO FILME: 7,5 </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.viewPrincipalFilmes}>
                <TouchableOpacity style={styles.viewFilmes}>
                    <Image style={styles.images} source={require(`../../../assets/4fantastico.png`)}/>
                    <Text style={styles.titulo}> QUARTETO FANTÁSTICO E O SURFISTA PRATEADO </Text>

                    <Text style={styles.titulo}> NOTA DO FILME: 8,5 </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.viewFilmes}>
                    <Image style={styles.images} source={require(`../../../assets/barbie_popstar.png`)}/>
                    <Text style={styles.titulo}> BARBIE A PRINCESA E A POPSTAR </Text>

                    <Text style={styles.titulo}> NOTA DO FILME: 7,5 </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.viewPrincipalFilmes}>
                <TouchableOpacity style={styles.viewFilmes}>
                    <Image style={styles.images} source={require(`../../../assets/homem_aranha.png`)}/>
                    <Text style={styles.titulo}> HOMEM ARNHA ATRAVÉS DO ARANHAVERSO </Text>

                    <Text style={styles.titulo}> NOTA DO FILME: 8,5 </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.viewFilmes}>
                    <Image style={styles.images} source={require(`../../../assets/haikyuu.png`)}/>
                    <Text style={styles.titulo}> HAIKYUU - A BATALHA DO LIXÃO </Text>

                    <Text style={styles.titulo}> NOTA DO FILME: 7,5 </Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}