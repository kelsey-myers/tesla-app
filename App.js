import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CarItem from "./components/CarItem";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CarItem
        name="Model X"
        tagLine="Starting from £69,420"
        image={require("./assets/images/ModelX.jpeg")}
      />
      <CarItem
        name="Model S"
        tagLine="Order Online for "
        taglineCTA="Touchless Delivery"
        image={require("./assets/images/ModelS.jpeg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
