import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

const fetchFonts = () => {
    return Font.loadAsync({
        "open-sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });
};

export default function App() {
    const [useNumber, setUseNumber] = useState();
    const [guessRounds, setGuessRounds] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false);

    if (!dataLoaded) {
        console.log(`font load ${dataLoaded}`);
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => {
                    console.log("font loaded done");
                    setDataLoaded(true);
                }}
                onError={(error) => {
                    console.log(error);
                }}
            />
        );
    }

    const startGameHandler = (selectedNumber) => {
        setUseNumber(selectedNumber);
    };

    const onGameOver = (rounds) => {
        console.log("Game Over" + rounds);
        setGuessRounds(rounds);
    };

    const startNewGameHandler = () => {
        setUseNumber(null);
        setGuessRounds(0);
    };

    let screenContent = <StartGameScreen startGameHandler={startGameHandler} />;

    if (useNumber && guessRounds <= 0) {
        screenContent = (
            <GameScreen userChoice={useNumber} onGameOver={onGameOver} />
        );
    } else if (guessRounds > 0) {
        console.log(guessRounds + " guessRounds");
        screenContent = (
            <GameOverScreen
                guessRounds={guessRounds}
                userChoice={useNumber}
                startNewGameHandler={startNewGameHandler}
            />
        );
    }

    return (
        <View style={styles.container}>
            <Header title="GUESS NUMBER" />
            {screenContent}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
