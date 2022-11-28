import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function CTA(props) {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={props.onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 16,
    paddingHorixontal: 8,
    backgroundColor: "#7954FA",
    width: "100%",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 500,
  },
});
