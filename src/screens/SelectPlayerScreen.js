// src/screens/SelectPlayerScreen.js
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles/SelectPlayerScreenStyles";

function SelectPlayerScreen({ navigation }) {
    const selectPlayer = (player) => {
        navigation.navigate("Game", { firstPlayer: player });
    };

    return (
        <View style={styles.container}>
            <Image source={require("../../assets/logo.png")} style={styles.logo} />
            <Text style={styles.title}>Who is Playing First ?</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, styles.xButton]}
                    onPress={() => selectPlayer("X")}
                >
                    <Text style={styles.buttonText}>X</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.oButton]}
                    onPress={() => selectPlayer("O")}
                >
                    <Text style={styles.buttonText}>O</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SelectPlayerScreen;
