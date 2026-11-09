import TacheCard from "@/components/Tachecard";
import { COULEURS } from "@/styles/couleurs";
import { Text, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const tasks = [
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
];

export default function AccueilScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TaskFlow</Text>
        <Text style={styles.subtitle}>Vos tâches du moment</Text>
      </View>
      <ScrollView contentContainerStyle={styles.tasks}>
        {tasks.map((task) => {
          return <TacheCard key={task.id} item={task} />;
        })}
      </ScrollView>
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
  tasks: {
    flexGrow: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
