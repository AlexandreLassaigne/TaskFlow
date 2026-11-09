import AccueilScreen from "@/screen/AccueilScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <AccueilScreen />
    </SafeAreaProvider>
  );
}
