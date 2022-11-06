import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useState, useEffect } from "react";

import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

const Home = () => {
  const [mood, setMood] = useState("");
  const [name, onChangeName] = useState(true);
  const [isValidName, setValidName] = useState(true);
  const [desination, onChangeDesination] = useState(true);
  const [isValidDesination, setValidDesination] = useState(true);
  const [date, onchangeDate] = useState(true);
  const [isValidDate, setValidDate] = useState(true);
  const [description, onChangeDescription] = useState(true);
  const [isValidDescription, setValidDescription] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 50, marginHorizontal: 30 }}>
      <Text style={{ fontSize: 20 }}>Name*</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          onChangeName(text);
          const isValid = verifyName(text);
          isValid ? setValidName(true) : setValidName(false);
        }}
        value={name}
      />
      <Text style={{ padding: 10, fontSize: 16, color: "red" }}>
        Name is invalid!
      </Text>
      <Text style={{ fontSize: 20 }}>Desination*</Text>
      <TextInput style={styles.input} />
      <Text style={{ padding: 10, fontSize: 16, color: "red" }}>
        Desination is invalid!
      </Text>
      <Text style={{ fontSize: 20 }}>Date of the Trip**</Text>

      <TextInput style={styles.input} />
      <Text style={{ padding: 10, fontSize: 16, color: "red" }}>
        Date is invalid!
      </Text>
      <Text style={{ padding: 20, fontSize: 20 }}>
        Require Risks Assessment***
      </Text>
      <View style={styles.wrapper}>
        {["Yes", "No"].map((feeling) => (
          <View key={feeling} style={styles.mood}>
            <Text style={styles.feeling}>{feeling}</Text>
            <TouchableOpacity
              style={styles.outer}
              onPress={() => setMood(feeling)}
            >
              {mood === feeling && <View style={styles.inner}></View>}
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <Text style={{ fontSize: 20 }}>Description*</Text>
      <TextInput style={{ height: 80, borderWidth: 1, padding: 10 }} />
      <Text style={{ padding: 10, fontSize: 16, color: "red" }}>
        Description is invalid!
      </Text>
      <Button
        title="Add to Database"
        color="#4649FF"
        accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  feeling: {
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
});
export default Home;
