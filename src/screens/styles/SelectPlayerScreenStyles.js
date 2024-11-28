// src/screens/styles/SelectPlayerScreenStyles.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F5DC",
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 150,
        marginTop: 10,
    },

    title: {
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 80,
        marginBottom: 10,
        color: "#333",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "60%",
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 40,
        marginVertical: 10, 
        width: '45%',
    },
    xButton: {
        backgroundColor: "#7FAFFF",
    },
    oButton: {
        backgroundColor: "#FF7F7F",
    },
    buttonText: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
    },
});

export default styles;
