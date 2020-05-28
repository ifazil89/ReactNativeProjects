import React from "react";
import { StyleSheet, FlatList } from "react-native";
import GoalItem from "./GoalItem";
const GoalItems = (props) => {
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={props.courseGoals}
            renderItem={(itemData) => {
                return (
                    <GoalItem
                        goalId={itemData.item.id}
                        enteredGoal={itemData.item.value}
                        deleteGoal={props.deleteGoal}
                    />
                );
            }}
        />
    );
};

export default GoalItems;
