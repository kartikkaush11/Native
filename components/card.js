import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Card(props) {
  return (
    <View style={styles.cardContainer}>
      <View style={{ marginBottom: 8 }}>
        <Text style={{ fontSize: 16 }}>{props.eventName}</Text>
      </View>

      <Text style={{ fontSize: 14 }} numberOfLines={2}>
        {props.description}
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 12,
        }}
      >
        <Text style={{ fontColor: "#6E6E6E" }}>{props.startDate}</Text>

        <View>
          <Text style={{ fontColor: "#6E6E6E" }}>{props.endDate}</Text>
        </View>
      </View>
      {props.seperator && (
        <View
          style={{
            borderBottomColor: "#6E6E6E80",
            borderBottomWidth: 1,
            marginTop: 8,
          }}
        />
      )}

      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginTop: 16,
  },
});
