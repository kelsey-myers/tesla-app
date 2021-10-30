import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import cars from "./cars";
import CarItem from "../CarItem";

export default function CarsList(props) {
  return (
    <View style={styles.container}>
      <FlatList
        bounces={false}
        data={cars}
        renderItem={({ item }) => <CarItem key={item} car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
}
