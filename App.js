import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//importando os componentes de navegação
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, TransitionSpecs, CardStyleInterpolators } from "@react-navigation/native-stack";

//importando as telas de boas-vindas e cadastro
import Welcome from "./src/pages/Telas de Cadastro/welcome";
import CadastroUser from "./src/pages/Telas de Cadastro/cadastrouser";
//Importando a tela de pesquisa de áreas
import TagSearch from "./src/pages/Telas de Cadastro/tagsearch";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Colors } from "react-native/Libraries/NewAppScreen";


//criando o Stack navigator
const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="CadastroUser">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CadastroUser"
          component={CadastroUser}
          options={{
            headerShown: false,
            //'headerShow: false' faz com que o cabeçalho com o nome da página do topo fique invisível
          }}
        />
        <Stack.Screen
          name="Pesquisar por Áreas"
          component={TagSearch}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
