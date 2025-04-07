import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { db } from "../firebaseConfig";
import {
  collection,
  addDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { auth } from "../firebaseConfig";

export default function FirebaseData() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const auth = auth();
  const user = auth.currentUser;
  const todosCollection = collection(db, 'todos')

  return (
    <View style={styles.container}>
      <Text>Database</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
