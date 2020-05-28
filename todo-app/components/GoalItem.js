import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.4}
            onLongPress={() => {
                props.deleteGoal(props.goalId);
            }}
        >
            <View style={styles.listItem}>
                <Text>{props.enteredGoal}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    listItem: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#ccc",
        paddingVertical: 5,
        marginVertical: 5,
    },
});
