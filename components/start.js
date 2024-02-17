import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import { useState } from "react";

const Start = ({ navigation }) => {
  const [name, setName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const image = require("../assets/background.png");
  const icon = require("../assets/icon.png");

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.text}>Welcome!</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput} //expo input
            value={name}
            onChangeText={setName}
            placeholder={"Type your name here"}
            placeholderTextColor="#757083"
          />
        </View>
        <Text style={styles.chooseColor}>Choose Background Color</Text>
        <View style={styles.colorButtonsContainer}>
          <TouchableOpacity
            style={[
              styles.colorButton,
              {
                backgroundColor: "#090C08",
                opacity: selectedColor === "#090C08" ? 1 : 0.7,
              },
            ]}
            onPress={() => handleColorSelection("#090C08")}
          />
          <TouchableOpacity
            style={[
              styles.colorButton,
              {
                backgroundColor: "#474056",
                opacity: selectedColor === "#474056" ? 1 : 0.7,
              },
            ]}
            onPress={() => handleColorSelection("#474056")}
          />
          <TouchableOpacity
            style={[
              styles.colorButton,
              {
                backgroundColor: "#8A95A5",
                opacity: selectedColor === "#8A95A5" ? 1 : 0.7,
              },
            ]}
            onPress={() => handleColorSelection("#8A95A5")}
          />
          <TouchableOpacity
            style={[
              styles.colorButton,
              {
                backgroundColor: "#B9C6AE",
                opacity: selectedColor === "#B9C6AE" ? 1 : 0.7,
              },
            ]}
            onPress={() => handleColorSelection("#B9C6AE")}
          />
        </View>
        <Button
          title="Go to Chat"
          onPress={() => navigation.navigate("Chat", { name, selectedColor })}
          style={styles.chatButton}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    padding: "10%",
    flex: 6,
    //fontFamily: "Poppins-ExtraBold",
    fontSize: 45,
    fontWeight: "600",
    color: "white",
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    borderColor: "#757083",
    opacity: 50,
    marginTop: "8%",
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#757083",
    padding: 18,
    marginLeft: 20,
    marginRight: 20,
    marginTop: -10,
    marginBottom: 10,
    opacity: 0.5,
  },
  colorButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 10,
  },
  chatButton: {
    backgroundColor: "#757083",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  chooseColor: {
    fontSize: 16,
    color: "#757083",
    fontWeight: "300",
    opacity: 1,
    marginTop: 10,
  },
});

export default Start;
