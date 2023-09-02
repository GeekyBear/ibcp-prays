import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getStatusBarHeight } from "react-native-status-bar-height";

const initialState = {
  title: "",
  description: "",
  status: "approved",
};

const CreateLocal = ({ navigation }) => {
  const [pray, setPray] = useState([]);
  const [prayers, setPrayers] = useState([]);
  const [savingPrayer, setSavingPrayer] = useState(false);

  const storePrayers = async () => {
    if (!savingPrayer) return;
    try {
      await AsyncStorage.setItem("prayers", JSON.stringify(prayers));
      setSavingPrayer(false);
    } catch (error) {
      console.log(error);
    }
  };

  const clearPrayers = async () => {
    try {
      await AsyncStorage.setItem("prayers", JSON.stringify([]));
      getPrayers();
    } catch (error) {
      console.log(error);
    }
  };

  const getPrayers = async () => {
    try {
      const savedPrayers = await AsyncStorage.getItem("prayers");
      const currentPrayers = await JSON.parse(savedPrayers);
      setPrayers(currentPrayers);
    } catch (error) {
      console.log(error);
    }
  };
  const getDate = () => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    return `${date}/${month} a las ${hours}:${min}hs`;
  };

  const handleAdd = () => {
    setPrayers((prayers) => [
      ...prayers,
      {
        id: uuid.v4(),
        title: pray.title,
        description: pray.description,
        status: "approved",
        date: getDate(),
        favorite: false,
      },
    ]);

    setSavingPrayer(true);
    navigation.navigate("My prayers");
  };

  useEffect(() => {
    return function cleanup() {
      storePrayers();
    };
  }, [savingPrayer]);

  useEffect(() => {
    getPrayers();
  }, []);

  return (
    <View style={styles.form}>
      <TextInput
        onChangeText={(text) => setPray({ ...pray, title: text })}
        value={pray.title}
        style={styles.input}
        placeholder="Titulo"
      />
      <TextInput
        textAlignVertical="top"
        multiline
        numberOfLines={10}
        onChangeText={(text) => setPray({ ...pray, description: text })}
        value={pray.description}
        style={styles.input}
        placeholder="Descripcion"
      />
      <Button
        title="Cancelar"
        onPress={() => navigation.navigate("My prayers")}
      />
      <Button title="Agregar motivo" onPress={() => handleAdd()} />
      {/* <Button title="Borrar motivos" onPress={() => clearPrayers()} /> */}
    </View>
  );
};

export default CreateLocal;

const styles = StyleSheet.create({
  form: {
    marginTop: getStatusBarHeight(),
    display: "flex",
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 32,
    gap: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "white",
    color: "black",
    justifyContent: "center",
  },
});
