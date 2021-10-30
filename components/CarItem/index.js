import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

export default function CarItem() {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Starting at £69,420</Text>
      </View>

      <StyledButton
        type="primary"
        content="Custom Order"
        onPress={() => {
          console.warn("custom order pressed");
        }}
      />
      <StyledButton
        type="secondary"
        content="Existing Inventory"
        onPress={() => {
          console.warn("existing inventory pressed");
        }}
      />
    </View>
  );
}
