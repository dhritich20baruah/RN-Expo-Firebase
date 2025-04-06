import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInUp from "./component/signInSignUp";
import User from "./component/userScreen";
import FireStorage from "./component/fireStorage";
import FirebaseData from "./component/firebaseDate";
import FirebaseFunctions from "./component/firebaseFunctions";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={SignInUp} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="FireStorage" component={FireStorage}/>
        <Stack.Screen name="FirebaseDate" component={FirebaseData}/>
        <Stack.Screen name="FirebaseFunctions" component={FirebaseFunctions}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
