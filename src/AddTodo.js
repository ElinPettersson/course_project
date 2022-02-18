import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { FAB } from "react-native-paper";

const AddTodo = ({ addHandler }) => {
  const [todo, setTodo] = useState("");
  const inputHandler = (val) => {
    console.log(val);
    setTodo(val);
  };

  return (
    <View style={styles.adding}>
      <View
        style={{
          flexGrow: 8,
          flexWrap: "wrap",
          justifyContent: "center",
          margin: 40,
        }}
      >
        <TextInput
          placeholder="Write your new task here"
          onChangeText={inputHandler}
          style={styles.input}
        />
      </View>

      <View
        style={{
          flexGrow: 1,
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FAB
          icon="plus"
          style={styles.fab}
          small
          onPress={() => addHandler(todo)}
        ></FAB>
      </View>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  adding: {
    flexDirection: "row",
    width: "100%",
  },
  fab: {
    backgroundColor: "#FCF7DE",
    margin: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});
