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

export default function SignInUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) Alert.alert("User signed in");
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
      <TextInput placeholder="email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="password"
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={signIn}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signUp}>
        <Text>Create Account</Text>
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
