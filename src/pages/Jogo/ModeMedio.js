import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Jogo() {
  const colors = ["green", "red", "yellow", "blue"];
  const [sequence, setSequence] = useState([]);
  const [playerSequence, setPlayerSequence] = useState([]);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [displayColor, setDisplayColor] = useState("");

  useEffect(() => {
    if (isPlaying) {
      setDisplayColor("");
      playSequence();
    }
  }, [sequence]);

  const onPressBotao = () => {
    if (!isPlaying) {
      startGame();
    }
  };

  const startGame = () => {
    setSequence([]);
    setPlayerSequence([]);
    setScore(0);
    setIsPlaying(true);
    addColorToSequence();
  };

  const addColorToSequence = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setSequence(prevSequence => [...prevSequence, randomColor]);
  };

  const playSequence = async () => {
    for (const color of sequence) {
      await delay(1000);
      setDisplayColor(color);
      await delay(500);
      setDisplayColor("");
    }
    setPlayerSequence([]);
  };

  const handleColorPress = color => {
    if (isPlaying) {
      setPlayerSequence(prevSequence => [...prevSequence, color]);
    }
  };

  useEffect(() => {
    if (playerSequence.length > 0) {
      checkSequence();
    }
  }, [playerSequence]);

  const checkSequence = () => {
    for (let i = 0; i < playerSequence.length; i++) {
      if (playerSequence[i] !== sequence[i]) {
        endGame();
        return;
      }
    }

    if (playerSequence.length === sequence.length) {
      setScore(prevScore => prevScore + 1);
      addColorToSequence();
      setPlayerSequence([]);
    }
  };

  const endGame = () => {
    setIsPlaying(false);
    alert(`Game Over! Pontuação: ${score}`);
  };

  const delay = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  return (
    <View style={styles.view1}>
      <View style={styles.container1}>
        <TouchableOpacity
          style={[styles.box, styles.box1, displayColor === "green" && styles.highlight]}
          onPress={() => handleColorPress("green")}
        ></TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, styles.box2, displayColor === "red" && styles.highlight]}
          onPress={() => handleColorPress("red")}
        ></TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <TouchableOpacity
          style={[styles.box, styles.box3, displayColor === "yellow" && styles.highlight]}
          onPress={() => handleColorPress("yellow")}
        ></TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, styles.box4, displayColor === "blue" && styles.highlight]}
          onPress={() => handleColorPress("blue")}
        ></TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.botao} onPress={onPressBotao}>
        <Text style={styles.text}>{isPlaying ? "Playing..." : "Play"}</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Score: {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  container1: {
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    textAlign: "center",
    marginTop: 15
  },
  box: {
    flex: 1,
    borderWidth: 4,
    borderColor: "black",
    padding: 100
  },
  box1: {
    backgroundColor: "green",
    borderTopLeftRadius: '100%'
  },
  box2: {
    backgroundColor: "red",
    borderTopRightRadius: '100%'
  },
  box3: {
    backgroundColor: "yellow",
    borderBottomLeftRadius: '100%'
  },
  box4: {
    backgroundColor: "blue",
    borderBottomRightRadius: '100%'
  },
  highlight: {
    opacity: 0.5
  },
  botao: {
    width: 100,
    height: 50,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "purple",
    marginTop: 10
  }
});
