import { NavigationContainer, View, TouchableOpacity, Text, Feather} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../paginas/home";
import Detalhes from "../paginas/detalhes";
import PesquisaFilmes from "../paginas/resultado"

export default function Rotas(){
    const stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <stack.Navigator screenOptions={{headerShown:false}}>
                <stack.Screen name="Home" component={Home}/>
                <stack.Screen name="Detalhes" component={Detalhes}/>
                <stack.Screen name="Pesquisa" component={PesquisaFilmes}
                options={{
                       headerShown:true}}
                ></stack.Screen>
            </stack.Navigator>
        </NavigationContainer>
    )
}