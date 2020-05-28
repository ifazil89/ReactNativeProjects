import React, { useState, useRef, useEffect } from "react";
import {
    Text,
    View,
    StyleSheet,
    Button,
    Alert,
    ScrollView,
    FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import ListItem from "../components/ListItem";
import Colors from "../constants/Colors";

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const random = Math.floor(Math.random() * (max - min)) + min;
    if (random == exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return random;
    }
};
const GameScreen = (props) => {
    const intialGuess = generateRandomNumber(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(intialGuess);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const { userChoice, onGameOver } = props;
    const [guessRounds, setGuessRounds] = useState(0);
    const [guessesList, setGuessesList] = useState([intialGuess]);

    useEffect(() => {
        console.log("game screen load: " + guessRounds);
        if (currentGuess == userChoice) {
            console.log("Found the number.");
            onGameOver(guessRounds);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = (hint) => {
        console.log(" Hint " + hint);
        if (
            (hint === "lower" && currentGuess < userChoice) ||
            (hint === "higher" && currentGuess > userChoice)
        ) {
            Alert.alert("Wrong Hint", "You have provided the wrong hint....", [
                {
                    text: "Sorry",
                    style: "cancel",
                },
            ]);
            return;
        }

        if (hint === "lower") {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }

        setGuessRounds((currentGuess) => currentGuess + 1);
        const nextNumber = generateRandomNumber(
            currentLow.current,
            currentHigh.current,
            currentGuess
        );
        setCurrentGuess(nextNumber);
        //console.log(nextNumber);
        //console.log(currentGuess);
        setGuessesList((guessesList) => [nextNumber, ...guessesList]);
    };

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Current Guess</Text>
            <NumberContainer numberValue={currentGuess}></NumberContainer>
            <Card style={styles.buttonContainer}>
                <View>
                    <MainButton
                        style={styles.button}
                        //title="LOWER"
                        onPress={nextGuessHandler.bind(this, "lower")}
                    >
                        <Ionicons name="md-remove" size={24} color="white" />
                    </MainButton>
                </View>
                <View style={styles.button}>
                    <MainButton
                        //title="HIGHER"
                        onPress={nextGuessHandler.bind(this, "higher")}
                    >
                        <Ionicons name="md-add" size={24} color="white" />
                    </MainButton>
                </View>
            </Card>

            <View style={styles.listContainer}>
                {/* <ScrollView>
                    {guessesList.map((guess, index) => {
                        return <ListItem index={index} value={guess} />;
                    })}
                </ScrollView> */}

                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={guessesList}
                    renderItem={(itemData) => (
                        <ListItem
                            index={itemData.index}
                            value={itemData.item}
                        />
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10,
    },
    buttonContainer: {
        width: 250,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    button: {
        //width: 100,
        backgroundColor: Colors.buttonRed,
        borderRadius: 10,
    },
    listContainer: {
        marginTop: 30,
        width: "80%",
        backgroundColor: "#EAF0F1",
    },
});

export default GameScreen;
