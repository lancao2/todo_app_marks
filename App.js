import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import InputToDo from "./components/InputToDo";
import Task from "./components/Task";

export default function App() {
  const [tesk, setTesk] = useState();
  const [toDo, setToDo] = useState([]);
  const [did, setDid] = useState([]);

  const handleAddTodo = () => {
    if (tesk) {
      setToDo([...toDo, tesk]);
      setTesk("");
    }
  };

  const markWithDid = (id) => {
    const markTask = toDo.filter((iten) => id === iten.id);
    setDid([...did, markTask[0]]);
    handleDeleteTaskTodo(id);
  };

  const markWithTodo = (id) => {
    const markTask = did.filter((iten) => id === iten.id);
    setToDo([...toDo, markTask[0]]);
    handleDeleteTaskDid(id);
  };

  const handleDeleteTaskTodo = (id) => {
    const deleteTodo = toDo.filter((iten) => id !== iten.id);
    setToDo(deleteTodo);
  };
  const handleDeleteTaskDid = (id) => {
    const deleteDid = did.filter((iten) => id !== iten.id);
    setDid(deleteDid);
  };

  return (
    <View style={styles.app}>
      <Text style={styles.listTitle}>To Do</Text>
      <ScrollView style={styles.containerList}>
        {toDo.map((iten, index) => {
          return (
            <Task
              key={index}
              id={iten.id}
              value={iten.value}
              markWithDid={markWithDid}
              handleDeleteTaskTodo={handleDeleteTaskTodo}
              handleDeleteTaskDid={handleDeleteTaskDid}
            />
          );
        })}
        {did.map((iten, index) => {
          return (
            <Task
              key={index}
              id={iten.id}
              value={iten.value}
              isConclued={true}
              markWithTodo={markWithTodo}
              handleDeleteTaskTodo={handleDeleteTaskTodo}
              handleDeleteTaskDid={handleDeleteTaskDid}
            />
          );
        })}
      </ScrollView>
      <InputToDo send={setTesk} handleAddTodo={handleAddTodo} tesk={tesk} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#eaeaea",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  containerList: {
    width: "100%",
    height: "100%",
    flex: 1,
  },

  listTitle: {
    width: "100%",
    paddingLeft: 40,
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 10,
    paddingTop: 35,
    color: "#1f6b5e",
  },
});
