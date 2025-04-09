import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaInicial from "./src/Telas/TelaInicial";
import TelaDicas from "./src/Telas/TelaDicas";
import TelaColeta from "./src/Telas/TelaColeta";
import TelaDenuncia from "./src/Telas/TelaDenuncia";
import TelaDesenvoledores from "./src/Telas/TelaDesenvolvedores";
import TelaHistDenuncias from "./src/Telas/TelaHistDenuncias";

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="TelaInicial" component={TelaInicial} options={{ headerShown: false }} />
        <Stack.Screen name="TelaDicas" component={TelaDicas} options={{ headerShown: false }} />
        <Stack.Screen name="TelaColeta" component={TelaColeta} options={{ headerShown: false }} />
        <Stack.Screen name="TelaDenuncia" component={TelaDenuncia} options={{ headerShown: false }} />
        <Stack.Screen name="TelaDesenvolvedores" component={TelaDesenvoledores} options={{ headerShown: false }} />
        <Stack.Screen name="TelaHistDenuncias" component={TelaHistDenuncias} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}