import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function User() {
  return (
    <View style={styles.container}>
      <Text>Hello User</Text>
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
