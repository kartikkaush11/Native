import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function PopUp(props) {
  return (
    <TouchableWithoutFeedback>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={props.visible}
          onRequestClose={props.hide}
        >
          {props.children}
        </Modal>
      </View>
    </TouchableWithoutFeedback>
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
