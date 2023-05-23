import Home from './src/pages/Home/Index';
import Jogo from './src/pages/Jogo/Index';
import Ranking from './src/pages/Ranking/Index';
import Login from './src/pages/Login/Index';
import Login1 from './src/pages/Login/CriarConta';
import Jogo1 from './src/pages/Jogo/ModeFacil';
import Jogo2 from './src/pages/Jogo/ModeMedio';
import Jogo3 from './src/pages/Jogo/ModeDificil';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Criar Conta" component={Login1}/>
          <Stack.Screen name="Jogo" component={Jogo}/>
          <Stack.Screen name="Ranking" component={Ranking}/>
          <Stack.Screen name="MODO FACIL" component={Jogo1}/>
          <Stack.Screen name="MODO MEDIO" component={Jogo2}/>
          <Stack.Screen name="MODO DIFICIL" component={Jogo3}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

