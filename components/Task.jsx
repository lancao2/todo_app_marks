import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Task({
  value,
  markWithDid,
  markWithTodo,
  isConclued = false,
  handleDeleteTaskDid,
  handleDeleteTaskTodo,
  id,
}) {
  return (
    <View style={styles.containerIten}>
      <View style={styles.containerItenLeft}>
        <TouchableOpacity
          style={[
            styles.containerItenLeftCircule,
            isConclued && { backgroundColor: "#1f6b5e" },
          ]}
          onPress={isConclued ? () => markWithTodo(id) : () => markWithDid(id)}
        ></TouchableOpacity>
        <Text style={styles.containerItenLeftText}>{value}</Text>
      </View>
      <TouchableOpacity
        style={styles.containerItenRightDelete}
        onPress={
          isConclued
            ? () => handleDeleteTaskDid(id)
            : () => handleDeleteTaskTodo(id)
        }
      >
        <Text style={styles.containerItenRightDeleteText}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerIten: {
    height: 60,
    width: "100%",
    borderBottomWidth: 0.5,
    borderBlockEndColor: "#bfbfbf",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  containerItenLeft: {
    height: "100%",
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 20,
  },
  containerItenLeftCircule: {
    height: "61%",
    width: "12%",
    borderRadius: 100,
    borderColor: "#1f6b5e",
    borderWidth: 4,
  },
  containerItenLeftText: {
    marginLeft: 15,
    fontSize: 16,
  },

  containerItenRightDelete: {
    width: "13%",
    alignItems: "center",
  },
  containerItenRightDeleteText: {
    fontWeight: "bold",
    color: "#ff8282",
  },
});
