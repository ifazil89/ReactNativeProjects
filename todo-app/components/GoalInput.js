import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Text } from "react-native";

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState("");
    const [inputValidationMessage, setinputValidationMessage] = useState();
    const [validation, setValidation] = useState(() => false);

    //console.log(validation);
    const goalTextChange = (goal) => {
        //console.log(goal);
        if (goal.length > 0) {
            setValidation(false);
        } else {
            setValidation(true);
        }
        setEnteredGoal(goal);
    };

    const addCourseGoal = () => {
        console.log("addCourseGoal");
        if (enteredGoal && enteredGoal.length > 0) {
            props.addCourseGoal(enteredGoal);
            setEnteredGoal("");
            setValidation(false);
        } else {
            setValidation(true);
            setinputValidationMessage("Please enter goal to add.");
        }
    };

    return (
        <Modal visible={props.visibleModal} animationType="slide">
            <View style={styles.inputContainer} animationType="slide">
                <View style={validation == true ? {} : { display: "none" }}>
                    <Text style={styles.validationMessage}>
                        {inputValidationMessage}
                        {validation}
                    </Text>
                </View>

                <TextInput
                    placeholder="Enter Course Goal"
                    style={styles.textField}
                    onChangeText={goalTextChange}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addCourseGoal} />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="CANCEL"
                            color="red"
                            onPress={() => {
                                setValidation(false);
                                props.cancelModal();
                            }}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        margin: 10,
    },
    textField: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        marginBottom: 5,
    },

    buttonContainer: {
        width: "60%",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    button: {
        borderWidth: 1,
        borderColor: "#fff",
        alignContent: "center",
    },
    validationMessage: {
        color: "#B83227",
        backgroundColor: "#DAE0E2",
        width: "80%",
        marginBottom: 5,
        fontWeight: "bold",
        paddingVertical: 10,
        fontSize: 15,
    },
});
