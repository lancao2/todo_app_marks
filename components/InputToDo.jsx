import {
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
} from "react-native";
import { v4 as uuidv4 } from "uuid";

export default function InputToDo({ send, handleAddTodo, tesk }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.containerInput}
    >
      <TextInput
        style={styles.inputTodo}
        placeholder={"Digite sua tarefa..."}
        value={tesk}
        onChangeText={(text) =>
          send({
            id: uuidv4(),
            value: text,
          })
        }
      ></TextInput>
      <TouchableOpacity
        title=">"
        style={styles.inputTodoButton}
        onPress={() => handleAddTodo()}
      >
        <Text style={styles.inputTodoButtonText}>+</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  containerInput: {
    position: "absolute",
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    bottom: 10,
  },
  inputTodo: {
    width: "83%",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 50,
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderWidth: 3,
    fontSize: 15,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.05,
  },
  inputTodoButton: {
    backgroundColor: "#000",
    width: "15%",
    paddingVertical: 1,
    borderRadius: 50,
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderWidth: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.05,
  },
  inputTodoButtonText: {
    width: "100%",
    height: "100%",
    fontSize: 30,
    textAlign: "center",
    marginTop: 2,
  },
});
