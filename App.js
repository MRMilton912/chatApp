import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import start from "./components/start";
import chat from "./components/chat";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="start">
        <Stack.Screen name="start" component={start} />
        <Stack.Screen name="chat" component={chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textInput: {
    width: "88%",
    borderWidth: 1,
    height: 50,
    padding: 10,
  },
  textDisplay: {
    height: 50,
    lineHeight: 50,
  },
});

export default App;
