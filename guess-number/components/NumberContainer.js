import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const NumberContainer = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.numberValue}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 50,
        borderWidth: 3,
        borderColor: Colors.header,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginVertical: 10,
    },
    number: {
        fontWeight: "bold",
        fontSize: 16,
    },
});
export default NumberContainer;
