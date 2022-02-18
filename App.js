import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import TodoItem from "./src/TodoItem";
import AddTodo from "./src/AddTodo";
import { Headline } from "react-native-paper";

export default function App() {
  const [tasks, updateTasks] = useState([
    { key: 1, todo: "Create your first task" },
  ]);

  const deleteHandler = (key) => {
    const newTasks = tasks.filter((task) => task.key !== key);
    updateTasks(newTasks);
  };

  const addHandler = (todo) => {
    updateTasks((prevTasks) => {
      return [...prevTasks, { todo: todo, key: tasks.length + 1 }];
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.container}>
        <View style={{ width: "85%" }}>
          <View style={styles.header}>
            <Headline>Complete your tasks</Headline>
          </View>
          <View style={styles.addTodo}>
            <AddTodo addHandler={addHandler} />
          </View>
          <View style={styles.todoList}>
            <FlatList
              data={tasks}
              renderItem={({ item }) => (
                <TodoItem item={item} deleteHandler={deleteHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    ...Platform.select({
      ios: {
        backgroundColor: "#b7e5fb",
      },
      android: {
        backgroundColor: "#fab7b7",
      },
      default: {
        backgroundColor: "#ded6f5",
      },
    }),
  },
  header: {
    width: "100%",
    height: 150,
    position: "relative",
    marginTop: 50,

    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        backgroundColor: "#b7e5fb",
      },
      android: {
        backgroundColor: "#fab7b7",
      },
      default: {
        backgroundColor: "#ded6f5",
      },
    }),
  },
  addTodo: {
    width: "100%",
    position: "relative",
    ...Platform.select({
      ios: {
        backgroundColor: "#b7e5fb",
      },
      android: {
        backgroundColor: "#fab7b7",
      },
      default: {
        backgroundColor: "#ded6f5",
      },
    }),
  },
  todoList: {
    width: "100%",
    marginBottom: "20%",
    position: "relative",
    ...Platform.select({
      ios: {
        backgroundColor: "#DEF3FD",
      },
      android: {
        backgroundColor: "#FDDFDF",
      },
      default: {
        backgroundColor: "#F2EFFB",
      },
    }),
  },
});
