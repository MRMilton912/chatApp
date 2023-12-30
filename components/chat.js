import { StyleSheet, View, Text, Button } from "react-native";
import { useState, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";

const chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      <Button
        title="Go to Start"
        onPress={() => navigation.navigate("start")}
      />
      <Text>Chat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default chat;
