import React from "react";
import { TextInput, StyleSheet } from "react-native";

const TextField = (props) => {
    return <TextInput {...props} style={{ ...styles.text, ...props.style }} />;
};

const styles = StyleSheet.create({
    text: {
        marginVertical: 10,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        height: 30,
        textAlign: "center",
    },
});
export default TextField;
