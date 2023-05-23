import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>GENIUS GAME</Text>
      <View style={styles.buttonContainer}>
        <Button title="LOGIN" onPress={() => navigation.navigate('Login')}/>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="PLAY" onPress={() => navigation.navigate('Jogo')}/>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="RANKING" onPress={() => navigation.navigate('Ranking')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 200,
    backgroundColor: "cyan",
  },
  buttonContainer: {
    marginTop: 10,
    padding: 5
  },
  text: {
    fontSize: 60,
    padding: 10,
    textAlign: 'center'
  }
});

