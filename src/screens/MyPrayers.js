import { View, Text, StyleSheet, Button, FlatList, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Prayer from "../components/Prayer";

const MyPrayers = ({ navigation }) => {
  const [prayers, setPrayers] = useState([]);

  const getPrayers = async () => {
    try {
      const savedPrayers = await AsyncStorage.getItem("prayers");
      const currentPrayers = await JSON.parse(savedPrayers);
      setPrayers(currentPrayers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPrayers();
  }, []);

  useEffect(() => {
    const focusHandler = navigation.addListener("focus", () => {
      setTimeout(() => {
        getPrayers();
      }, 1000);
    });

    return focusHandler;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis motivos de oración</Text>
      {prayers.length > 0 && (
        <FlatList
          data={prayers}
          renderItem={(item) => <Prayer navigation={navigation} item={item} />}
          keyExtractor={(prayer) => prayer.id}
        />
      )}

      <Button
        title="Go to create"
        onPress={() => navigation.navigate("Create local prayer")}
      />
    </View>
  );
};

export default MyPrayers;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: getStatusBarHeight(),
    flex: 1,
    gap: 12,
    paddingHorizontal: 16,
    backgroundColor: "#FAF8FC",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
});
