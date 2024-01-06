import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import start from "./components/start";
import chat from "./components/chat";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const Stack = createNativeStackNavigator();

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAf0HsBHn2ZU1OOtwq1pfv6CFtLTy01Sww",
    authDomain: "meet-app-403718.firebaseapp.com",
    projectId: "meet-app-403718",
    storageBucket: "meet-app-403718.appspot.com",
    messagingSenderId: "11560537116",
    appId: "1:11560537116:web:2e131591537d14b58423d9",
    measurementId: "G-LL8H8JXL54",
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  //const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

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
