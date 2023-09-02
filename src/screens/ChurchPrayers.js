import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { FIRESTORE_DB } from "../database/firebase";
import Prayer from "../components/Prayer";
import CreatePrayer from "./CreatePrayer";

const ChurchPrayers = ({ navigation }) => {
  const [prays, setPrays] = useState([]);
  const [showAddPray, setShowAddPray] = useState(false);

  useEffect(() => {
    const prayRef = collection(FIRESTORE_DB, "prays");

    const suscriber = onSnapshot(prayRef, {
      next: (snapshot) => {
        console.log("UPDATED");
        const prayers = [];
        snapshot.docs.forEach((doc) => {
          prayers.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPrays(prayers);
      },
    });
    return () => suscriber();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nuestros motivos de oración</Text>
      {prays.length > 0 ? (
        <FlatList
          data={prays}
          renderItem={(item) => <Prayer item={item} />}
          keyExtractor={(prayer) => prayer.id}
        />
      ) : (
        <Text>Loading</Text>
      )}
      {showAddPray ? (
        <>
          <Button title="Close" onPress={() => setShowAddPray(false)} />
          <CreatePrayer />
        </>
      ) : (
        <Button title="+" onPress={() => setShowAddPray(true)} />
      )}
    </View>
  );
};

export default ChurchPrayers;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    gap: 12,
    paddingTop: 24,
    paddingHorizontal: 16,
    backgroundColor: "#FAF8FC",
    marginTop: getStatusBarHeight(),
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
});
