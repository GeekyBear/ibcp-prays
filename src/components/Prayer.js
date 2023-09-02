import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import optionsIcon from "../assets/Prayer/icon.png";
// import deleteIcon from "../assets/Prayer/delete-icon.png";

const Prayer = ({ item, navigation }) => {
  const prayer = item.item;

  const handlePress = () => {
    navigation.navigate("Pray detail", { prayer });
  };

  return (
    <TouchableOpacity
      onPress={() => handlePress()}
      key={prayer.id}
      style={styles.container}
    >
      <View style={styles.note}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{prayer.title}</Text>
          <TouchableOpacity style={{ flexDirection: "row", gap: 2 }}>
            <Image source={optionsIcon} alt="options" />
            <Image source={optionsIcon} alt="options" />
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <Text style={styles.description}>{prayer.description}</Text>
        <Text>{prayer.status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Prayer;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingHorizontal: 4,
    minHeight: 124,
    marginVertical: 12,
  },
  note: {
    flex: 1,
    padding: 16,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F7F6D4",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  divider: {
    height: 1,
    marginVertical: 8,
    backgroundColor: "gray",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "bold",
  },
  description: {
    lineHeight: 24,
  },
});
