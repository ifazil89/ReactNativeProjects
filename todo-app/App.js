import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItems from "./components/GoalItems";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddModal, setIsAddModal] = useState(false);
    const addCourseGoal = (enteredGoal) => {
        console.log("addCourseGoal-app");
        setCourseGoals(() => [
            ...courseGoals,
            { id: Math.random().toString(), value: enteredGoal },
        ]);
        setIsAddModal(false);
    };

    const deleteGoal = (goalId) => {
        console.log(`delete invoked ${goalId}`);
        setCourseGoals(courseGoals.filter((goal) => goal.id !== goalId));
    };

    const cancelModal = () => {
        console.log("cancelModal-app");
        setIsAddModal(false);
    };

    return (
        <View style={styles.container}>
            <Button
                title="Add Goal"
                onPress={() => setIsAddModal(true)}
            ></Button>
            <GoalInput
                addCourseGoal={addCourseGoal}
                visibleModal={isAddModal}
                cancelModal={cancelModal}
            />
            <GoalItems courseGoals={courseGoals} deleteGoal={deleteGoal} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
        backgroundColor: "#fff",
    },
});
