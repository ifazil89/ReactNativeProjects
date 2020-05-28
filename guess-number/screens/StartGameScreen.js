import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/Colors";
import TextField from "../components/TextField";
import NumberContainer from "../components/NumberContainer";
import DefaultStyle from "../constants/default-styles";
import MainButton from "../components/MainButton";

const StartGameScreen = (props) => {
    const [enterdNumber, setEnterdNumber] = useState();
    const [confirmed, setConfirmed] = useState();
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = (text) => {
        setEnterdNumber(text.replace(/[^0-9]/g, ""));
    };

    const resetHandler = () => {
        setEnterdNumber("");
    };
    const confirmHandler = () => {
        const inputNumber = parseInt(enterdNumber);
        if (isNaN(inputNumber) || inputNumber < 1 || inputNumber > 100) {
            Alert.alert(
                "Invalid Number",
                "Please provide invalid number from 1 to 99",
                [{ text: "Ok", style: "destructive", onPress: resetHandler }]
            );
            return;
        }

        setConfirmed(true);
        setSelectedNumber(inputNumber);
    };

    let confirmedMessage;
    if (confirmed) {
        console.log(confirmed);
        confirmedMessage = (
            <Card style={styles.summaryContainer}>
                <Text
                    style={{
                        ...styles.summaryTitle,
                        ...DefaultStyle.titleText,
                    }}
                >
                    You have Selected
                </Text>
                <NumberContainer numberValue={selectedNumber} />
                <View style={styles.summaryButton}>
                    <MainButton
                        title="START GAME"
                        onPress={() => {
                            props.startGameHandler(selectedNumber);
                        }}
                    />
                </View>
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={styles.screen}>
                <Text style={styles.title}>Start New Game</Text>
                <Card style={styles.inputContainer}>
                    <Text style={DefaultStyle.bodyText}>Select a Number</Text>
                    <TextField
                        style={styles.textField}
                        keyboardType="number-pad"
                        blurOnSubmit={true}
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enterdNumber}
                    />

                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button
                                title="Reset"
                                onPress={() => {
                                    resetHandler();
                                }}
                                color={Colors.buttonRed}
                            />
                        </View>
                        <View style={styles.button}>
                            <MainButton
                                title="Confirm"
                                onPress={() => {
                                    confirmHandler();
                                }}
                                style={{ backgroundColor: Colors.header }}
                            />
                        </View>
                    </View>
                </Card>
                {confirmedMessage}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    inputContainer: {
        width: 350,
        maxWidth: "80%",
    },
    textField: {
        width: 100,
        height: 30,
    },
    title: {
        //fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
        fontFamily: "open-sans-bold",
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        padding: 15,
    },
    button: {
        width: 100,
    },

    summaryContainer: {
        width: 300,
        maxWidth: "60%",
        marginTop: 20,
    },
    summaryTitle: {
        fontSize: 18,
        //fontWeight: "bold",
        paddingVertical: 5,
    },
    summaryButton: {
        marginTop: 10,
    },
});

export default StartGameScreen;
