import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const MainButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.8}>
            <View style={{ ...styles.button, ...props.style }}>
                <Text style={{ ...styles.buttonText }}>
                    {props.title} {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#0A79DF",
        minWidth: 100,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
    },
    buttonText: {
        color: "white",
        //textTransform: "uppercase",
        padding: 5,
    },
});

export default MainButton;
