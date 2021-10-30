import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import cars from "./cars";
import CarItem from "../CarItem";

export default function CarsList(props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem key={item} car={item} />}
      />
    </View>
  );
}
