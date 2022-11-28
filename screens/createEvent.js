import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TextField from "../components/textfield";
import BottomBar from "../components/bottomBar";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function CreateEvent({ navigation }) {
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [startCalender, setStartCalender] = useState(false);
  const [endDate, setEndDate] = useState(new Date());
  const [endCalender, setEndCalender] = useState(false);

  const checkEvantname = () => {
    if (eventName.length === 0) {
      return true;
    } else false;
  };

  const renderEventNameUI = () => {
    return (
      <View style={{ marginBottom: 16 }}>
        <TextField
          title="Event Name"
          onChangeText={(text) => setEventName(text)}
          value={eventName}
          placeholder="Enter Event name"
        />
      </View>
    );
  };

  const renderEventDescriptionUI = () => {
    return (
      <TextField
        title="Description"
        onChangeText={(text) => setDescription(text)}
        value={description}
        placeholder="Enter Event name"
      />
    );
  };

  const renderStartDateUi = () => {
    return (
      <View>
        <Text style={{ fontSize: 12 }}>Start Date</Text>
        <TouchableOpacity
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#6E6E6E",
            height: 40,
          }}
          onPress={() => setStartCalender(true)}
        >
          <Text>{`${new Date(startDate).toLocaleDateString("en-GB")}`}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderEndDateUi = () => {
    return (
      <View>
        <Text style={{ fontSize: 12 }}>End Date</Text>
        <TouchableOpacity
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#6E6E6E",
            height: 40,
          }}
          onPress={() => setEndCalender(true)}
        >
          <Text>{`${new Date(endDate).toLocaleDateString("en-GB")}`}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const handleCreateEvent = () => {
    const eventArray = JSON.parse(localStorage.getItem("eventListArray"));
    localStorage.setItem(
      "eventListArray",
      JSON.stringify([
        ...eventArray,
        {
          id: eventArray.length + 1,
          eventName: eventName,
          description: description,
          startDate: startDate,
          endDate: endDate,
        },
      ])
    );
    return navigation.navigate("ListScreen", {
      eventName: eventName,
      description: description,
      startDate: startDate,
      endDate: endDate,
    });
  };

  const renderCreateEventButton = () => {
    return (
      <View style={styles.bottomBarPosition}>
        <BottomBar
          disabled={checkEvantname()}
          title="Proceed"
          onPress={() => handleCreateEvent()}
        />
      </View>
    );
  };

  const handleStartDate = (event, date) => {
    const {
      type,
      nativeEvent: { timestamp },
    } = event;
    if (event?.type === "set") {
      setStartCalender(false);
      setStartDate(date);
    } else {
      setStartCalender(false);
      setStartDate(new Date());
    }
  };

  const handleEndDate = (event, date) => {
    const {
      type,
      nativeEvent: { timestamp },
    } = event;
    if (event?.type === "set") {
      setEndCalender(false);
      setEndDate(date);
    } else {
      setEndCalender(false);
      setEndDate(new Date());
    }
  };

  console.log("date1- ", startDate);

  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        {renderEventNameUI()}
        {renderEventDescriptionUI()}
        {renderStartDateUi()}
        {renderEndDateUi()}
        {renderCreateEventButton()}
      </KeyboardAvoidingView>

      {startCalender && (
        <DateTimePicker
          minimumDate={new Date()}
          mode="date"
          value={startDate}
          onChange={handleStartDate}
        />
      )}

      {endCalender && (
        <DateTimePicker
          minimumDate={new Date()}
          mode="date"
          value={endDate}
          onChange={handleEndDate}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
});
