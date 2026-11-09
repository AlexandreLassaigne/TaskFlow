import { COULEURS } from "@/styles/couleurs";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface Task {
  id: string;
  title: string;
  category: string;
  isDone: boolean;
  onDelete: (id: string) => void;
  onCheck: (id: string) => void;
  onClick: (id: string) => void;
}

export default function TacheCard({ item }: { item: Task }) {
  return (
    <Pressable style={styles.container} onPress={() => item.onClick(item.id)}>
      <View style={styles.taskInfo}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>
      <View style={styles.taskActions}>
        <Text
          style={{ ...styles.status, color: item.isDone ? "green" : "grey" }}
        >
          {item.isDone ? "Terminé" : "À faire"}
        </Text>
        {!item.isDone && (
          <Pressable onPress={() => item.onCheck(item.id)}>
            <Text style={styles.checkButton}>Fait</Text>
          </Pressable>
        )}
      </View>
      <Pressable onPress={() => item.onDelete(item.id)}>
        <Text>Supprimer</Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: COULEURS.fond,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: "90%",
    alignSelf: "center",
  },
  taskInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  category: {
    backgroundColor: COULEURS.accent,
    fontSize: 16,
    fontWeight: "bold",
    color: COULEURS.texte,
    padding: 5,
    borderRadius: 10,
  },
  status: {
    fontSize: 16,
    fontWeight: "bold",
  },
  taskActions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  checkButton: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "green",
    color: "white",
    padding: 5,
    borderRadius: 10,
  },
});
