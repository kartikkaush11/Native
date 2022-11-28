import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function TextField(props) {
  const [select, selected] = useState(false);

  return (
    <View>
      {props.title && (
        <View>
          <Text style={styles.textFieldTitleText}>{props.title}</Text>
        </View>
      )}

      <TextInput
        {...props}
        style={select ? styles.selectedInput : styles.input}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        maxLength={props.maxLength}
        onFocus={() => selected(true)}
        onBlur={() => selected(false)}
      />

      {props.errorMessage && (
        <View style={{ marginTop: 8 }}>
          <Text>{props.errorMessage}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: "#6E6E6E",
  },
  selectedInput: {
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: "#2C99F0",
  },
  textFieldTitleText: {
    fontSize: 12,
  },
});
