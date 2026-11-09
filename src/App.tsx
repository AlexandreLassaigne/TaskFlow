import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccueilScreen from "./screen/AccueilScreen";
import DetailScreen from "./screen/DetailScreen";
import AjouterScreen from "./screen/AjouterScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Accueil"
          options={{ headerShown: false }}
          component={AccueilScreen}
        />
        <Stack.Screen name="Ajouter une tâche" component={AjouterScreen} />
        <Stack.Screen name="Détail de la tâche" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
