import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListItem = (props) => {
    return (
        <View style={styles.item} key={props.index}>
            <Text style={styles.itemText}>#{props.index + 1}</Text>
            <Text style={styles.itemText}>{props.value}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    item: {
        //width: "100%",
        height: 40,
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    itemText: {
        fontWeight: "bold",
    },
});

export default ListItem;
