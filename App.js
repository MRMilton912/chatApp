import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Start from "./components/Start";
import Chat from "./components/Chat";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; //getDocs, collections

const Stack = createNativeStackNavigator();

//useEffect(() => {}, [`${lists}`]);

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAf0HsBHn2ZU1OOtwq1pfv6CFtLTy01Sww",
    authDomain: "meet-app-403718.firebaseapp.com",
    projectId: "meet-app-403718",
    storageBucket: "meet-app-403718.appspot.com", //chatApp
    messagingSenderId: "11560537116",
    appId: "1:11560537116:web:2e131591537d14b58423d9",
    measurementId: "G-LL8H8JXL54",
  };

  const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);

  //  const db = getFirestore(app); //chat, FlatList

  return (
    //{props => <Chat db={db} {...props} />}
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
