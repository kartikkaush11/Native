import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActionSheetIOS,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Filter from "../components/filter";
import Card from "../components/card";
import ActionButton from "../components/actionButton";
import PopUp from "../components/popup";

export default function ListScreen({ route, navigation }) {
  const [selectFilter, setSelectedFilter] = useState("daily");
  const [eventName, setEventName] = useState("");
  let eventlist = JSON.parse(localStorage.getItem("eventListArray"));
  const [eventArray, setEventArray] = useState(eventlist);

  console.log("eventlist- ", eventArray);

  const filter = [
    {
      id: "daily",
      title: "Daily",
    },
    {
      id: "weekly",
      title: "Weekly",
    },
    {
      id: "monthly",
      title: "Monthly",
    },
    {
      id: "yearly",
      title: "Yearly",
    },
  ];

  const action = [
    {
      danger: false,
      title: "Show",
    },
    {
      danger: false,
      title: "Edit",
    },
    {
      danger: true,
      title: "Delete",
    },
  ];

  const renderCreateButton = () => {
    return (
      <View style={styles.createButtonPosition}>
        <Text style={{ fontSize: 18 }}>Event List</Text>
        <Button
          style={styles.createButton}
          title="Create Event"
          onPress={() => navigation.navigate("CreateEvent")}
        />
      </View>
    );
  };

  const renderFilterUi = () => {
    return (
      <View style={styles.filterContainer}>
        {filter.map((filterName, index) => {
          return (
            <Filter
              selected={selectFilter === filterName["id"]}
              title={filterName["title"]}
              onPress={() => setSelectedFilter(filterName["id"])}
            />
          );
        })}
      </View>
    );
  };

  const handleclickitem = (title, item) => {
    if (title === "Delete") {
      localStorage.setItem(
        "eventListArray",
        JSON.stringify(eventlist.filter((elem) => elem.id !== item.id))
      );
      setEventArray(JSON.parse(localStorage.getItem("eventListArray")));
    }

    if (title === "Show") {
      return navigation.navigate("DetailView");
    }
  };

  const renderItem = ({ item }) => {
    return (
      <Card
        eventName={item.eventName}
        description={item.description}
        startDate={new Date(item.startDate).toLocaleDateString("en-GB")}
        endDate={new Date(item.endDate).toLocaleDateString("en-GB")}
        seperator={true}
      >
        <View style={styles.filterContainer}>
          {action.map((actionName, index) => {
            return (
              <ActionButton
                key={`${actionName}- ${index}`}
                type={actionName["type"]}
                title={actionName["title"]}
                onPress={() => handleclickitem(actionName["title"], item)}
              />
            );
          })}
        </View>
      </Card>
    );
  };

  return (
    <>
      <View style={styles.container}>
        {renderCreateButton()}
        {renderFilterUi()}
        {console.log("eventlist1 -", eventlist)}
        {eventlist.length > 0 && (
          <FlatList
            data={eventlist}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eff3f6",
    padding: 16,
    width: "100%",
  },
  createButtonPosition: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
});
