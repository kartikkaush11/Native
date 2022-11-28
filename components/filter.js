import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Filter(props) {
  return (
    <TouchableOpacity
      style={
        props.selected ? styles.selectedFilterContainer : styles.filterContainer
      }
      onPress={props.onPress}
    >
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    borderWidth: 1,
    borderColor: "#C0C0C0",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  selectedFilterContainer: {
    borderWidth: 1,
    borderColor: "#7954FA",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
});
