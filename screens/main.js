import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomBar from "../components/bottomBar";
import TextField from "../components/textfield";

export default function Main({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passWord, setPassword] = useState("");
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [error, setError] = useState("");

  const handleCheckEmail = (text) => {
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    setEmail(text);

    if (regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const disableButton = () => {
    if (
      name.length === 0 ||
      email.length === 0 ||
      phoneNumber.length === 0 ||
      passWord.length === 0
    ) {
      return true;
    } else false;
  };

  const renderErrorMessage = () => {
    if (passWord.match("(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}")) {
      return setError(true);
    }
  };

  const checkPasswordValidity = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    const isContainsUpperCase = /^(?=.*[A-Z]).*$/;
    const isContainsLowerCase = /^(?=.*[a-z]).*$/;
    const isContainsNumber = /^(?=.*[0-9]).*$/;
    const isValidLength = /^.{8,16}$/;

    if (!isNonWhiteSpace.test(value)) {
      return "Space is not allowed";
    }
    if (!isContainsUpperCase.test(value)) {
      return "Password must have atleast one Uppercase Character";
    }
    if (!isContainsLowerCase.test(value)) {
      return "Password must have atleast one lowercase Character";
    }
    if (!isContainsNumber.test(value)) {
      return "Password must have atleast one Digit";
    }
    if (!isValidLength.test(value)) {
      return "Password must be 8-16 character long";
    }

    return null;
  };

  const handleRegister = () => {
    const checkPassword = checkPasswordValidity(passWord);
    localStorage.setItem("Username", JSON.stringify(name));
    localStorage.setItem("UserEmail", JSON.stringify(email));
    localStorage.setItem("UserphoneNumber", JSON.stringify(phoneNumber));
    localStorage.setItem("UserpassWord", JSON.stringify(passWord));

    if (!checkPassword) {
      localStorage.setItem("eventListArray", JSON.stringify([]));
      return navigation.navigate("ListScreen");
    } else {
      setError(checkPassword);
    }
  };

  const renderNameUI = () => {
    return (
      <View style={styles.mB16}>
        <TextField
          title="Name*"
          style={styles.input}
          onChangeText={(name) => setName(name)}
          value={name}
          placeholder="Enter your name"
        />
      </View>
    );
  };

  const renderEmailAddressUI = () => {
    return (
      <View style={styles.mB16}>
        <TextField
          title="Email ID*"
          style={styles.input}
          onChangeText={(text) => handleCheckEmail(text)}
          value={email}
          placeholder="Enter Email"
          errorMessage={checkValidEmail && "Enter Valid Email ID"}
        />
      </View>
    );
  };

  const renderPhoneNumberUI = () => {
    return (
      <View style={styles.mB16}>
        <TextField
          title="Mobile Number*"
          style={styles.input}
          onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
          // value={number}
          placeholder="Enter Phone Number*"
          keyboardType="numeric"
          maxLength={10}
        />
      </View>
    );
  };

  const renderPasswordUI = () => {
    return (
      <View style={styles.mB16}>
        <TextField
          title="Password*"
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={passWord}
          secureTextEntry={true}
          placeholder="Enter password"
          errorMessage={error}
        />
      </View>
    );
  };

  const renderLoginButtonUI = () => {
    return (
      <View style={styles.bottomBarPosition}>
        <BottomBar
          style={{ boxShadow: "0px !important" }}
          // disabled={disableButton()}
          title="Register"
          onPress={() => handleRegister()}
        />
      </View>
    );
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ padding: 16 }}>
        {renderNameUI()}
        {renderEmailAddressUI()}
        {renderPhoneNumberUI()}
        {renderPasswordUI()}
      </View>

      {renderLoginButtonUI()}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mB16: {
    marginBottom: 16,
  },
  bottomBarPosition: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  headerText: {
    fontSize: 24,
    fontWeight: 700,
  },
});
