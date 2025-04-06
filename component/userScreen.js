import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { auth } from "../firebaseConfig";
import { getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

export default function User() {
  const navigation = useNavigation();

  getAuth().onAuthStateChanged((user)=> {
    if(!user) {
      navigation.navigate("Home")
    }
  })
  return (
    <View style={styles.container}>
      <Text>Hello User</Text>
      <TouchableOpacity style={{margin: 10, backgroundColor: "red", padding: 5}} onPress={()=>auth.signOut()}>
        <Text style={{color: "white"}}>Sign Out</Text>
      </TouchableOpacity>
    </View>
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
