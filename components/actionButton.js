import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function ActionButton(props) {
  return (
    <TouchableOpacity style={styles.actionButton} onPress={props.onPress}>
      <Text style={{ fontColor: "#7954FA" }}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  dangerActionButton: {
    backgroundColor: "#D6363F",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  actionButton: {
    backgroundColor: "#7954FA4D",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
});
