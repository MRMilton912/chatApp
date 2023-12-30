import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-web";
import { useState } from "react";

const start = ({ navigation }) => {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder={"Type Something Here"}
      />
      <Button title="Go to Chat" onPress={() => navigation.navigate("chat")} />
      <TouchableOpacity>
        <Text>Opacity</Text>
      </TouchableOpacity>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "20%",
    borderColor: "black",
  },
});

export default start;
