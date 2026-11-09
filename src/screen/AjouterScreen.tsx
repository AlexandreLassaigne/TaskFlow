import { COULEURS } from "@/styles/couleurs";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AjouterScreen(props: { navigation: any }) {
  const [tache, setTache] = useState("");
  const [category, setCategory] = useState("");

  const handleAjouterTache = () => {
    if (tache.trim() === "") {
      alert("Veuillez saisir le nom de la tâche");
      return;
    }
    props.navigation.navigate("Accueil", {
      tache: tache,
      category: category,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Ajouter une tâche</Text>
      <TextInput
        placeholder="Nom de la tâche"
        style={styles.input}
        value={tache}
        onChangeText={setTache}
      />
      <TextInput
        placeholder="Catégorie"
        style={styles.input}
        value={category}
        onChangeText={setCategory}
      />
      <Button
        title="Ajouter la tâche"
        color={COULEURS.primaire}
        onPress={handleAjouterTache}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "#663399",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
