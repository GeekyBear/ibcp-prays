import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import {
  ChevronLeftIcon,
  BookmarkIcon,
  EllipsisHorizontalIcon,
} from "react-native-heroicons/solid";

const PrayDetail = ({ route, navigation }) => {
  const prayer = route.params.prayer;

  const handleBack = () => {
    navigation.navigate("My prayers");
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.back}>
          <TouchableOpacity onPress={() => handleBack()} style={styles.touch}>
            <ChevronLeftIcon color={"#6A3EA1"} width={20} height={20} />
            <Text style={styles.touchBack}>Volver</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{prayer.title}</Text>
        <View style={styles.descriptionView}>
          <Text style={styles.description}>{prayer.description}</Text>
        </View>
        <View style={styles.answerView}>
          <Text style={styles.description}>Respuesta:{prayer.answer}</Text>
        </View>
      </View>
      <View style={styles.taskBar}>
        <Text style={styles.lastEdit}>Ultima edición: {prayer.date}</Text>
        <View style={styles.iconsView}>
          {/* <MagnifyingGlassIcon color={"#6A3EA1"} width={24} height={24} /> */}
          <BookmarkIcon
            width={22}
            color={"#ccc"}
            height={22}
            style={{ margin: 8 }}
          />
          <View style={styles.ellipsis}>
            <EllipsisHorizontalIcon color={"white"} width={20} height={20} />
          </View>
        </View>
      </View>
    </>
  );
};

export default PrayDetail;

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
    fontSize: 32,
    fontWeight: "700",
  },
  descriptionView: { flex: 1 },
  answerView: { flex: 1 },
  description: {
    fontSize: 16,
    minHeight: 100,
    lineHeight: 20,
  },
  back: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    height: 54,
  },
  touch: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  touchBack: {
    fontSize: 16,
    fontWeight: "500",
    color: "#6A3EA1",
  },
  taskBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 48,
    alignItems: "center",
  },
  iconsView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  ellipsis: {
    height: 48,
    width: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6A3EA1",
  },
  lastEdit: {
    margin: 16,
  },
});
