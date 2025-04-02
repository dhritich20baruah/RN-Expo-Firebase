import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default async function App() {
  try{
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      "testuser@example.com",
      "password123"
    )
    console.log("✅ Authentication is working! User:", userCredential.user)
  } catch (error){
    console.error("❌ Authentication Error:", error.message);
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! OK</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
