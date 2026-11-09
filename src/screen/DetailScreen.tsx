import { COULEURS } from "@/styles/couleurs";
import { Button, Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailScreen({ navigation, route }: any) {
  const { task } = route.params;
  const handleCheck = () => {
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView>
      <Text>{task.title}</Text>
      <Text>{task.category}</Text>
      <View style={styles.btn}>
        <Button
          color={COULEURS.accent}
          title="Marquer comme terminée"
          onPress={handleCheck}
        />
        <Button
          color={COULEURS.muted}
          title="Retour"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 10,
    borderRadius: 10,
    width: "48%",
  },
});
