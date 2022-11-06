import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useState, useEffect } from "react";
import { RadioButton } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  Alert,
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  Platform,
  View,
  Keyboard,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const App = () => {
  const [name, onChangeName] = useState(true);
  // radio button
  const [checked, setChecked] = useState("Yes");
  // nhập dữ liệu
  const [nameTrip, setNameTrip] = useState("");
  const [desination, onChangeDesination] = useState(true);
  // nhập dữ liệu
  const [desinationTrip, setDesinationTrip] = useState("");
  const [date, onchangeDate] = useState(true);
  // nhập dữ liệu
  const [dateTrip, setDateTrip] = useState("");
  // Date
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [description, onChangeDescription] = useState(true);
  const [riskTrip, setRiskTrip] = useState("");
  // nhập dữ liệu
  const [descriptionTrip, setDescriptionTrip] = useState();

  const onPressBtn = () => {
    if (!nameTrip.trim()) {
      alert("Please Enter Name");
      return;
    }
    if (!desinationTrip.trim()) {
      alert("Please Enter Desination");
      return;
    }
    if (!text.trim()) {
      alert("Please Enter Date of the Time");
      return;
    }
    if (!checked.trim()) {
      alert("Please Check Risk");
      return;
    }
    if (!descriptionTrip.trim()) {
      alert("Please Enter Description");
      return;
    }
    //Check for the Email TextInput
    // if (!textInputEmail.trim()) {
    //   alert("Please Enter Email");
    //   return;
    // }
    //Checked Successfully
    //Do whatever you want
    alert(
      "Name: " +
        nameTrip +
        "\n" +
        "Destination: " +
        desinationTrip +
        "\n" +
        "Date of the Trip: " +
        text +
        "\n" +
        "Risk Assesment: " +
        checked +
        "\n" +
        "Description: " +
        descriptionTrip
    );
  };
  const handleChangeName = (text) => {
    setNameTrip(text);
  };
  const handleChangeDesination = (text) => {
    setDesinationTrip(text);
  };

  const handleChangeDescription = (text) => {
    setDescriptionTrip(text);
  };
  const onChangeDate = (e, selectedDate) => {
    const currentDate = selectedDate || currentDateTime;
    setShow(Platform.OS === "ios");
    setCurrentDateTime(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    let fTime =
      "Hour: " + tempDate.getHours() + " | Minutes: " + tempDate.getMinutes();
    setText(fDate + "\n" + fTime);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  // Validation

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 50, marginHorizontal: 30 }}>
      <Text style={{ fontSize: 20 }}>Name*</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeName}
        value={name}
      />
      <Text style={{ fontSize: 20 }}>Desination*</Text>
      <TextInput style={styles.input} onChangeText={handleChangeDesination} />
      <Text style={{ fontSize: 20 }}>Date of the Trip**</Text>
      <Text style={{ fontSize: 20 }}>{text}</Text>
      <Button title="DatePicker" onPress={() => showMode("currentDateTime")} />

      <Text style={{ padding: 20, fontSize: 20 }}>
        Require Risks Assessment***
      </Text>
      {/*  Radio Button */}
      <View>
        <View style={styles.radioGroup}>
          <Text style={styles.radioText}>Yes</Text>
          <RadioButton
            value="Yes"
            status={checked === "Yes" ? "checked" : "unchecked"}
            onPress={() => setChecked("Yes")}
          />
          <Text style={styles.radioText}>No</Text>
          <RadioButton
            value="No"
            status={checked === "No" ? "checked" : "unchecked"}
            onPress={() => setChecked("No")}
          />
        </View>
      </View>
      <Text style={{ fontSize: 20 }}>Description*</Text>
      <TextInput
        style={{ height: 80, borderWidth: 1, padding: 10, marginBottom: 10 }}
        onChangeText={handleChangeDescription}
      />
      <Button
        onPress={onPressBtn}
        title="Add to Database"
        color="#4649FF"
        accessibilityLabel="Learn more about this purple button"
      />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={currentDateTime}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChangeDate}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  feeling: {
    fontSize: 18,
  },
  radioGroup: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  radioText: {
    fontSize: 18,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  mood: {
    marginHorizontal: 15,
    alignItems: "center",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    width: 15,
    height: 15,
    backgroundColor: "gray",
    borderRadius: 15,
  },
  outer: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  topSafeArea: {},
  headerText: {},
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 10,
  },
});

export default App;
