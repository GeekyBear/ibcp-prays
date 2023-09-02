import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { FIRESTORE_DB } from "../database/firebase";
import { addDoc, collection } from "firebase/firestore";
import DropDownPicker from "react-native-dropdown-picker";

const initialState = {
  title: "",
  description: "",
};

const CreatePrayer = ({ navigation }) => {
  const [pray, setPray] = useState(initialState);
  const [open, setOpen] = useState(false);
  const [prayStatus, setPrayStatus] = useState(null);
  const [items, setItems] = useState([
    { label: "Pendiente", value: "pending" },
    { label: "Aprobada", value: "approved" },
    { label: "Rechazada", value: "rejected" },
  ]);

  const addPray = async () => {
    const doc = await addDoc(collection(FIRESTORE_DB, "prays"), {
      title: pray.title,
      description: pray.description,
      status: prayStatus,
    });
    setPray(initialState);
    setPrayStatus("");
    console.log("New prayer created! ", doc);
  };

  return (
    <View style={styles.form}>
      <TextInput
        onChangeText={(text) => setPray({ ...pray, title: text })}
        value={pray.title}
        style={styles.input}
        placeholder="Titulo"
      />
      <TextInput
        multiline
        numberOfLines={4}
        onChangeText={(text) => setPray({ ...pray, description: text })}
        value={pray.description}
        style={styles.input}
        placeholder="Descripcion"
      />
      <DropDownPicker
        open={open}
        value={prayStatus}
        items={items}
        setOpen={setOpen}
        setValue={setPrayStatus}
        setItems={setItems}
      />
      <Button onPress={() => addPray()} title="Add Pray" />
    </View>
  );
};

export default CreatePrayer;

const styles = StyleSheet.create({
  form: {
    display: "flex",
    marginVertical: 20,
    marginHorizontal: 32,
    gap: 12,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "wrap",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "white",
    color: "black",
  },
});
