import TacheCard from "@/components/Tachecard";
import { COULEURS } from "@/styles/couleurs";
import { useEffect, useState } from "react";
import { Text, StyleSheet, View, FlatList, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AccueilScreen({ navigation, route }: any) {
  const { tache, category } = route.params || {};
  const [taches, setTaches] = useState([
    {
      id: "1",
      title: "Tache 1",
      category: "Categorie 1",
      isDone: false,
    },
    {
      id: "2",
      title: "Tache 2",
      category: "Categorie 2",
      isDone: false,
    },
    {
      id: "3",
      title: "Tache 3",
      category: "Categorie 3",
      isDone: false,
    },
    {
      id: "4",
      title: "Tache 4",
      category: "Categorie 4",
      isDone: true,
    },
    {
      id: "5",
      title: "Tache 5",
      category: "Categorie 5",
      isDone: false,
    },
  ]);

  useEffect(() => {
    if (!tache || !category) return;
    setTaches((prevTaches) => [
      ...prevTaches,
      {
        id: (prevTaches.length + 1).toString(),
        title: tache,
        category,
        isDone: false,
      },
    ]);
  }, [tache, category]);

  const handleDelete = (id: string) => {
    setTaches((prevTaches) => prevTaches.filter((tache) => tache.id !== id));
  };

  const handleCheck = (id: string) => {
    setTaches(
      taches.map((tache) =>
        tache.id === id ? { ...tache, isDone: !tache.isDone } : tache,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TaskFlow</Text>
        <Text style={styles.subtitle}>Vos tâches du moment</Text>
      </View>
      <View style={styles.button}>
        <Button
          title="Ajouter une tâche"
          onPress={() => navigation.navigate("Ajouter")}
          color={COULEURS.primaire}
        />
      </View>
      <FlatList
        data={taches}
        renderItem={({ item }) => (
          <TacheCard
            item={{
              ...item,
              onDelete: handleDelete,
              onCheck: handleCheck,
              onClick: () => navigation.navigate("Detail", { task: item }),
            }}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COULEURS.muted,
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
    marginLeft: 10,
  },
  button: {
    width: "40%",
    alignSelf: "center",
    padding: 10,
  },
});
