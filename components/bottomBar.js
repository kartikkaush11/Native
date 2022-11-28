import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CTA from "./button";

export default function BottomBar(props) {
  return (
    <View style={styles.bottomBarContainer}>
      <Button
        disabled={props.disabled}
        title={props.title}
        onPress={props.onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBarContainer: {
    backgroundColor: "#fff",
    padding: 16,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
