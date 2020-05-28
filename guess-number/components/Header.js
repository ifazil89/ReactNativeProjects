import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 90,
        backgroundColor: Colors.header,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 35,
    },

    headerTitle: {
        fontSize: 22,
        //fontWeight: "bold",
        color: "black",
        fontFamily: "open-sans-bold",
    },
});

export default Header;
