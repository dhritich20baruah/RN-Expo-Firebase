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

  export default function FireStorage(){
    return(
        <View style={styles.container}>
            <Text>FireStorage</Text>
        </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });