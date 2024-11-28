// src/screens/styles/SelectPlayerScreenStyles.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f8f8",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "60%",
    },
    button: {
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        elevation: 3,
    },
    xButton: {
        backgroundColor: "#ff7f7f",
    },
    oButton: {
        backgroundColor: "#7fafff",
    },
    buttonText: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#fff",
    },
});

export default styles;
