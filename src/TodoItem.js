import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FAB } from "react-native-paper";

const TodoItem = ({ item, deleteHandler }) => {
  return (
    <View style={styles.taskView}>
      <View
        style={{
          flexGrow: 8,
          flexWrap: "wrap",
          justifyContent: "center",
          margin: 40,
        }}
      >
        <Text>{item.todo}</Text>
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
          style={styles.fab}
          icon="check"
          small
          onPress={() => deleteHandler(item.key)}
        ></FAB>
      </View>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  taskView: {
    flexDirection: "row",
    width: "100%",
  },
  fab: {
    backgroundColor: "#DEFDE0",
    margin: 20,
  },
});
