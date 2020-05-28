import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";

import GameScreen from "./GameScreen";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import DefaultStyle from "../constants/default-styles";

const GameOverScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    //source={require("../assets/original.png")}
                    source={{
                        uri:
                            "https://image.shutterstock.com/z/stock-vector--you-win-congratulations-banner-with-balloons-win-game-birthday-party-sale-holiday-kid-448182349.jpg",
                    }}
                    style={styles.image}
                />
            </View>
            <Card>
                <Text style={{ ...styles.title, ...DefaultStyle.titleText }}>
                    Won!Total Guess Rounds
                </Text>
                <NumberContainer numberValue={props.guessRounds} />
                <Text style={{ ...styles.title, ...DefaultStyle.titleText }}>
                    User selected number
                </Text>
                <NumberContainer numberValue={props.userChoice} />
                <View>
                    <Button
                        title="Starte New"
                        onPress={props.startNewGameHandler}
                    />
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    title: {
        //fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    imageContainer: {
        width: "50%",
        height: 150,
        marginVertical: 20,
        borderColor: "red",
        borderWidth: 3,
        borderRadius: 100,
        overflow: "hidden",
    },
});

export default GameOverScreen;
