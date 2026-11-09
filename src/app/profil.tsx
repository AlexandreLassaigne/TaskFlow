import { SafeAreaProvider } from "react-native-safe-area-context";
import ProfilScreen from "@/screen/ProfilScreen";

export default function Profil() {
  return (
    <SafeAreaProvider>
      <ProfilScreen />
    </SafeAreaProvider>
  );
}
