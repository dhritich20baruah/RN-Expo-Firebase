import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebaseConfig";
import { useNavigation } from "@react-navigation/native";

export default function SignInUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        navigation.navigate("FirebaseDate");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.log(error);
      alert("sign in failed" + error.message);
    }
  };

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) Alert.alert("User created");
    } catch (error) {
      console.log(error);
      alert("sign in failed" + error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Login In</Text>
      <TextInput
        placeholder="email"
        value={email}
        onChangeText={setEmail}
        style={{
          margin: 10,
          padding: 5,
          border: "gray",
          borderWidth: 1,
          width: "70%",
          borderRadius: 5,
        }}
      />
      <TextInput
        placeholder="password"
        value={password}
        onChangeText={setPassword}
        style={{
          margin: 10,
          padding: 5,
          border: "gray",
          borderWidth: 1,
          width: "70%",
          borderRadius: 5,
        }}
      />
      <TouchableOpacity onPress={signIn} style={{margin: 10, backgroundColor: "green", padding: 5}}>
        <Text style={{color: "white"}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signUp} style={{margin: 10, backgroundColor: "blue", padding: 5}}>
        <Text style={{color: "white"}}>Create Account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
