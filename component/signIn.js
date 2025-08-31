import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet, TextInput, Button } from "react-native";
import { auth } from "../firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore()

export default function Notes() {
    const navigation = useNavigation();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userName, setUserName] = useState("");

    getAuth().onAuthStateChanged((user) => {
        if (!user) {
            navigation.navigate("Home")
        }
    })

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserName(user.email);
            }
        });
        return subscribe;
    }, [])

    const handleSaveNote = async () => {
        if (!title.trim() || !content.trim()) {
            Alert.alert("Error", "Please fill in both title and content");
            return;
        }

        try {
            const user = auth.currentUser;

            if (!user) {
                Alert.alert("Error", "You must be logged in to add notes.");
                return;
            }

            await addDoc(collection(db, "notes"), {
                title,
                content,
                userId: user.uid,
                userName: userName,
                createdAt: new Date(),
            });

            Alert.alert("Success", "Note added successfully!");
            setTitle("");
            setContent("");
        } catch (error) {
            Alert.alert("Error", error.message);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ margin: 10, backgroundColor: "red", padding: 5, width: 80, borderRadius: 10}} onPress={() => auth.signOut()}>
                <Text style={{ color: "white" }}>Sign Out</Text>
            </TouchableOpacity>
            <TextInput
                placeholder="Note Title"
                value={title}
                onChangeText={setTitle}
                style={styles.input}
            />
            <TextInput
                placeholder="Note Content"
                value={content}
                onChangeText={setContent}
                style={[styles.input, { height: 120 }]}
                multiline
            />
            <Button title="Save Note" onPress={handleSaveNote} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
    },
});
